import { Flex, useMantineTheme } from '@mantine/core';

import { useUIStore } from '$store/ui';
import { useSearchStore } from '$store/search';

import { IconCircledArrow } from '$icons/CircledArrow';

import { COLOR_SCHEME } from '$constants/colorScheme';

export const testId = {
  root: 'NoResultsYet',
};

export function NoResultsYet() {
  const theme = useMantineTheme();
  const colorScheme = useUIStore((state) => state.colorScheme);
  const { searchValue, isLoading, page } = useSearchStore();

  const contrastColor =
    colorScheme === COLOR_SCHEME.DARK ? theme.white : theme.black;
  const noResultsYet = !searchValue || (!isLoading && page === 0);

  if (!noResultsYet) {
    return null;
  }

  return (
    <Flex
      data-testid={testId.root}
      mt={50}
      justify='flex-end'
      align='flex-start'
      direction='row'
    >
      <IconCircledArrow size='50' color={contrastColor} />
    </Flex>
  );
}
