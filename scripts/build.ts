import { 
    $, 
    build, 
    write, 
    file, 
    serve
} from 'bun';
import { parseArgs } from 'util';
import { watch } from 'fs';

// initialization, get cli arguments
const { values: {
    dev = false,
    port = '1714',
    outdir = 'dist',
    srcdir = 'src',
    entrypoints = 'index.tsx',
}} = parseArgs({
    args: Bun.argv,
    options: {
        dev: { type: 'boolean' },
        port: { type: 'string' },
        outdir: { type: 'string' },
        srcdir: { type: 'string' },
        entrypoints: { type: 'string' },
    },
    strict: true,
    allowPositionals: true,
});

async function bundle() {
    const start = performance.now();
    await $`bunx tailwindcss -i ${srcdir}/index.css -o ${outdir}/index.css`;
    write(`${outdir}/index.html`,
        `
        <!DOCTYPE html>
        <html>
            <head>
                <meta charset="utf-8">
                <meta name="viewport" content="width=device-width, initial-scale=1">
                <link rel="stylesheet" href="index.css">
            </head>
            <body>
                <div id="app"></div>
                <script type="module" src="index.js"></script>
                ${dev ? `<script>var ws = new WebSocket('ws://localhost:${port}/dev').onmessage = () => location.reload()</script>` : ''}
            </body>
        <html>
        `
    );
    await build({
        entrypoints: entrypoints.split(',').map((e) => `${srcdir}/${e}`),
        outdir,
        format: 'esm',
        target: 'browser',
        minify: !dev,
        splitting: true,
        sourcemap: dev ? 'inline' : 'none',
        define: {
            'process.env.NODE_ENV': dev ? '"development"' : 'production',
        },
    }).then(() => console.info(`Built ${outdir} in ${(performance.now() - start).toFixed(2)}ms`));
}

await bundle();

if (!dev) process.exit(0);

// start dev mode

const server = serve({
    port: Number(port),
    fetch(request, server) {
        let { pathname } = new URL(request.url);
        if (pathname === '/dev') {
            server.upgrade(request);
            return undefined;
        }
        if (pathname === '/') {
            pathname = '/index.html';
        }
        return new Response(file(`${outdir}${pathname}`));
    },
    websocket: {
        message: console.info,
        open: (ws) => ws.subscribe('dev'),
    },
    development: true,
});

console.info(`Server running at http://localhost:${port}`);

const watcher = watch(srcdir, { recursive: true }, () => bundle().then(() => server.publish('dev', '')));

process.on('SIGINT', () => {
    watcher.close();
    server.stop(true);
    process.exit(0);
});