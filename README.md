# Movie Database

## Setup

### Requirements

- Install [VS Code](https://code.visualstudio.com/)
- Install [NVM](https://github.com/nvm-sh/nvm)
- Use the latest version of node 18: `nvm install lts/hydrogen && nvm use lts/hydrogen`
- Install pnpm globally: `npm i -g pnpm`
- Finish the setup by running the script: `bash setup.sh`

### Local Development

- Start Developing Locally: `pnpm dev`

### Format - coding style consistency

- Install the recommended extension in VS Code based on .vscode/extensions.json
- Apply the recommended settings based on .vscode/settings.json
- If using other IDE then VS Code, use the scripts: `pnpm run lint:fix` and `pnpm run prettier:fix` or for both `pnpm run format`

### Build

- `pnpm build`
- TODO

### Test

- To test with real data, use the [OMDb API](https://omdbapi.com/) to generate a new API Key using your email
- Update `.env.local` VITE_OMDB_API_KEY to be the generated API Key from OMDb API
- TODO

### Deploy

- TODO

---

## [File Structure](https://reactjs.org/docs/faq-structure.html#grouping-by-file-type)

### > main.tsx

- [react](https://reactjs.org/)
- Initialization of react and providers

### > App.tsx

- [react-router](https://reactrouter.com/en/main)
- lazy loads the corresponding Page and trigger the corresponding API calls

### > api/

- [React Query](https://tanstack.com/query/latest)
- TODO

### > components/

- [Mantine](https://mantine.dev/)
- TODO

### > constants/

- TODO
- Routes: all routes and params defined to be used instead of string literal for type-safety and ease of updates

### > icons/

- SVG's in React components
- [Tabler Icons](https://tablericons.com/) - open source free SVG icons
- [unDraw](https://undraw.co/): Open-source [illustrations](https://undraw.co/illustrations), [handcrafted gestures & symbols](https://handcrafts.undraw.co/app)

### > store/

- [Zustand](https://docs.pmnd.rs/zustand/getting-started/introduction)
- TODO

### > utils/

- TODO

---
