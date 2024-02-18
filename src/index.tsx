import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { dependencies, devDependencies, peerDependencies } from 'package.json';

const root = createRoot(document.getElementById("app")!);

const App = () => 
<main className="bg-slate-950 min-h-screen w-full flex flex-col items-center justify-center text-white">
    <h1 className="text-6xl font-black bg-gradient-to-r from-yellow-600 to-red-600 inline-block text-transparent bg-clip-text">
        Bun-react-app
    </h1>
    <p>
        Running in <span className="font-bold">{process.env.NODE_ENV}</span> mode, hot reloading is <span className="font-bold">{globalThis as any['ws'] ? 'enabled' : 'disabled'}</span>
    </p>
    <p className="mt-2 mb-4">
        This is a minimal React app with TailwindCSS and Bun
    </p>
    <section>
        <p className="text-lg font-bold">
            What to do next
        </p>
        <ul className="list-[circle] mb-4">
            <li>
                <a className="border-b-2 border-slate-50 border-dotted" href="https://github.com/gerardmarquinarubio/bun-react-app">Star this repo</a>
            </li>
            <li>
                Edit index.tsx
            </li>
            <li>
                <a className="border-b-2 border-slate-50 border-dotted" href="https://bun.sh/docs">Read the Bun documentation</a>
            </li>
            <li>
                <a className="border-b-2 border-slate-50 border-dotted" href="https://tailwindcss.com/docs">Read the TailwindCSS documentation</a>
            </li>
            <li>
                <a className="border-b-2 border-slate-50 border-dotted" href="https://react.dev/reference/react">Read the React documentation</a>
            </li>
            <li>
                <a className="border-b-2 border-slate-50 border-dotted" href="https://eslint.org/">Install ESlint</a>
            </li>
            <li>
                <a className="border-b-2 border-slate-50 border-dotted" href="https://reactrouter.com/en/main">Install React Router</a>
            </li>
        </ul>
        <p className="text-lg font-bold">
            Installed dependencies
        </p>
        <ul className="list-[circle]">
            {Object.entries({ ...dependencies, ...devDependencies, ...peerDependencies }).map(([name, version]) => (
                <li key={name}>
                    {name}@{version}
                </li>
            ))}
        </ul>
    </section>
</main>

if (process.env.NODE_ENV === "development") {
    root.render(
        <StrictMode>
            <App />
        </StrictMode>
    );
} else {
    root.render(<App />);
}