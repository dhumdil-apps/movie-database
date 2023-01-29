import { Switch, Group, useMantineTheme } from '@mantine/core';
import { IconSun } from '$icons/Sun';
import { COLOR_SCHEME } from '$constants/colorScheme';
import { IconMoonStars } from '$icons/MoonStars';
import { useUIStore } from '$store/ui';

export function ToggleColorScheme() {
  const theme = useMantineTheme();
  const colorScheme = useUIStore((state) => state.colorScheme);
  const toggleColorScheme = useUIStore((state) => state.toggleColorScheme);

  return (
    <Group position='center'>
      <Switch
        checked={colorScheme === COLOR_SCHEME.DARK}
        onChange={() => toggleColorScheme()}
        size='lg'
        onLabel={<IconSun color={theme.white} size='20' stroke='1.5' />}
        offLabel={
          <IconMoonStars color={theme.colors.gray[6]} size='20' stroke='1.5' />
        }
      />
    </Group>
  );
}
