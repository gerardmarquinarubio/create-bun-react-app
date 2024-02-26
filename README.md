<div align="center">
    <h1>
        🛠️-🥟-⚛️-📱 </br>
        create-bun-react-app
    </h1>
    <h4>
        A minimalistic template for Bun, React and TailwindCSS; with hot reloading and production builds
    </h4>
    <img src="https://img.shields.io/badge/typescript-latest-blue?style=flat-square&logo=typescript" /> 
    <img src="https://img.shields.io/badge/react-latest-%2361DBFB?style=flat-square&logo=react" />
    <img src="https://img.shields.io/badge/bun-latest-red?style=flat-square&logo=bun" />
    <img src="https://img.shields.io/badge/🔋_batteries-sold_separately-yellow?style=flat-square" />
</div>

## Get started
```shell
bun create gerardmarquinarubio/create-bun-react-app myapp
cd myapp
bun dev
```

## Template screenshot

<img src="https://i.ibb.co/RD2yhYj/create-bun-react-app.png" />

## Features

| **Feature**         | **Description**                       |
|---------------------|---------------------------------------|
| dependencies        | `react`, `react-dom`, `tailwindcss`   |
| bundle              | `bun bundle`                          |
| dev (hot reload)    | `bun dev`                             |
| serve               | `bun start`                           |
| dist bundle size    | `16kb` (dist production)              |
| repo size           | `37kb` (src + conf + scripts)         |

## Motivation
Meta-frameworks are overkill for simple client-side-only react apps. Bundlers like `webpack`are too complicated and cumbersome, others like `esbuild` or `rollup` while much easier to use still require you to know the inner workings of bundling, module types, transpilation, loaders, etc. This template aims to solve that by simplifying the process.

This template has 4 dependencies:
- `react` and `react-dom` to develop and render your react app in the client
- `tailwindcss` for styling your app using convenient classnames
- `bun` to run your code and bundle it to the web

This template won't include:
- linters/formatters like `eslint`
- state managment `redux` or `react-query`
- route managment like `react-router`
- ui libraries like `daisyui` or `shadcn`
