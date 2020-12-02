This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Prerequisites, tools and software

### Required:
* Node.js 12.x. The easiest way to install it is on https://nodejs.org/. 
* If you're currently running a different version, you can use a [node version manager](https://github.com/tj/n) to switch.

### Optional but recommended
* [Visual Studio Code](https://code.visualstudio.com/) and extensions
    * [vscode-styled-components](https://marketplace.visualstudio.com/items?itemName=jpoissonnier.vscode-styled-components)
    * [eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
    * [prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
* [Yarn](https://yarnpkg.com): a better package manager for Node.js

# Development
Start the development server from the project's root folder:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

### Debugging

When a dev server has been started with `yarn dev` or `npm run dev`, you can start debugging with `F5` in VSCode. Breakpoints should work. The debugging configuration is in `.vscode/launch.json`

### Code Style Guide

We are following [Airbnb's style guide for JavaScript](https://github.com/airbnb/javascript), with additional rules for TypeScript. Eslint and Prettier should be used for code style errors/warnings and autoformatting in VSCode. Configuration files for these are included in the the root of our project. `.eslintrc` and `.prettierrc`.

## Styling

We use [styled-components](https://styled-components.com/). There's a [VSCode extention](https://marketplace.visualstudio.com/items?itemName=jpoissonnier.vscode-styled-components#:~:text=The%20styled%2Dcomponents%20extension%20adds,linter%20and%20other%20language%20features.) for styled-components syntax highlighting. We also have [Material UI](https://material-ui.com/) installed and use it as a component library.

### File/folder structure for styles

* Global and re-usable styles (typography, theme colors, etc) should be stored in the [`components/styles`](https://github.com/SolidClouds/web/tree/dev/components/styles) folder.
* Component specific styles can be kept within their component `tsx` file. This usually makes it easier to refactor and delete dead code.

## Environment Variables

Create a `.env.local` file, you can copy the provided example file in `.env.local.example`.

For branch previews and production, env variables are configured in the [Vercel.com admin ui](https://vercel.com)

## Deployment and Workflow

We will [follow the Github-Flow workflow](https://guides.github.com/introduction/flow/) for this webapp.

Changes to the master branch are automatically deployed to production.
Always branch out of master when working on complex, multi-commit features. Then, create a Pull-Request on master.
Pull-requests are automatically staged on Vercel and each commit triggers a new preview build.

# Learn More About Next.js

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [The Next.js GitHub repository](https://github.com/vercel/next.js/)

