import { Switch, Group, useMantineTheme } from '@mantine/core';

import { useUIStore } from '$store/ui';

import { IconSun } from '$icons/Sun';
import { IconMoonStars } from '$icons/MoonStars';

import { COLOR_SCHEME } from '$constants/colorScheme';

export const testId = {
  root: 'ToggleColorScheme',
};

export function ToggleColorScheme() {
  const theme = useMantineTheme();
  const { colorScheme, toggleColorScheme } = useUIStore();

  return (
    <Group data-testid={testId.root} position='center'>
      <Switch
        aria-label='Toggle between dark and light color scheme'
        checked={colorScheme === COLOR_SCHEME.DARK}
        onChange={toggleColorScheme}
        size='lg'
        onLabel={<IconSun color={theme.white} size='20' />}
        offLabel={<IconMoonStars color={theme.colors.gray[6]} size='20' />}
      />
    </Group>
  );
}
