import {
  ColorSchemeProvider,
  MantineProvider,
  AppShell,
  MantineTheme,
} from '@mantine/core';
import { AppHeader } from '$components/AppHeader';
import { AppFooter } from '$components/AppFooter';

import { useUIStore } from '$store/ui';
import { Router } from './Router';

const useAppShellStyle = (theme: MantineTheme) => ({
  main: {
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[8]
        : theme.colors.gray[0],
  },
});

function App() {
  const colorScheme = useUIStore((state) => state.colorScheme);
  const toggleColorScheme = useUIStore((state) => state.toggleColorScheme);

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{
          colorScheme,
          fontFamily: 'Open Sans, sans-serif',
          primaryColor: 'violet',
        }}
        withGlobalStyles
        withNormalizeCSS
      >
        <AppShell
          padding='md'
          header={<AppHeader />}
          footer={<AppFooter />}
          styles={useAppShellStyle}
        >
          <Router />
        </AppShell>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

export default App;
