This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Prerequisites
You'll need node.js and yarn. I reccommend using [NVM](https://github.com/nvm-sh/nvm) to manage node versions. We use the LTS version.

Yarn can be installed like this:
```bash
npm install --global yarn
```

Then from the project's folder, install dependencies like this:
```bash
yarn install
```
## Getting Started

First, start the dev server:
```bash
yarn dev
```

Open [http://localhost:3001](http://localhost:3001) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3001/api/hello](http://localhost:3001/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Recommended tools:
* [Visual Studio Code](https://code.visualstudio.com/) and extensions
    * [vscode-styled-components (syntax highlighting for our styles)](https://marketplace.visualstudio.com/items?itemName=jpoissonnier.vscode-styled-components)
    * [eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
* [Yarn](https://yarnpkg.com): a better package manager for Node.js
* [Vercel CLI](https://vercel.com/download): A dev server that can replicate our production environment. Helpful for testing serverless functions.


## Learn More

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [The Next.js GitHub repository](https://github.com/vercel/next.js/) - contains a bunch of useful examples
- [Styled Components Basics](https://styled-components.com/docs/basics) - a quickstart guide and brief explanation
- [Material-UI](https://material-ui.com) - component library reference