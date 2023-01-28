# Movie Database

## Setup

- Install IDE: [VS Code](https://code.visualstudio.com/)
- Install [NVM](https://github.com/nvm-sh/nvm)
- Use the latest version of node 18: `nvm install lts/hydrogen && nvm use lts/hydrogen`
- Install pnpm globally: `npm i -g pnpm`
- Finish the setup by running the script: `bash setup.sh`

### Local

- Create `.env.local` file based on `.env.example`
- Start Developing: `pnpm dev`

### Format

- For consistency install the recommended extension in VS Code

### Test

- TODO

### Deploy

- TODO

---

## [File Structure](https://reactjs.org/docs/faq-structure.html#grouping-by-file-type)

- [Atomic Design](https://atomicdesign.bradfrost.com/table-of-contents/)
- Initialization of [ReactDOM](https://reactjs.org/) and used providers in `main.tsx`
- App's starting point is with [react-router](https://reactrouter.com/en/main) in `App.tsx`

**The Flow**

- Based on active route react will lazy load the corresponding Page and trigger the corresponding API calls
- Pages are composed of Templates by passing the page specific data to them
- Templates are layouts that serve as a content structure
- Organism are complex components
- Molecules are single purpose, simple components
- Atoms are primitive components
- Icons are SVG's but in a react component

### API: [React Query](https://tanstack.com/query/latest)

- TODO

### Components: [Mantine](https://mantine.dev/)
- Icons
- Atoms
- Molecules
- Organisms
- Templates
- Pages

### Constants

- Routes: all routes and params defined to be used instead of string literal for type-safety and ease of updates

### State: [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction)

- TODO

---
