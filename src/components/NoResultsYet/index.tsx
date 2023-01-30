import { Flex, useMantineTheme } from '@mantine/core';
import { IconCircledArrow } from '$icons/CircledArrow';
import { useUIStore } from '$store/ui';
import { COLOR_SCHEME } from '$constants/colorScheme';
import { useSearchStore } from '$store/search';

export function NoResultsYet() {
  const theme = useMantineTheme();
  const colorScheme = useUIStore((state) => state.colorScheme);
  const contrastColor =
    colorScheme === COLOR_SCHEME.DARK ? theme.white : theme.black;

  const searchValue = useSearchStore((state) => state.searchValue);
  const isLoading = useSearchStore((state) => state.isLoading);
  const page = useSearchStore((state) => state.page);

  const noResultsYet = !searchValue || (!isLoading && page === 0);

  if (!noResultsYet) {
    return <></>;
  }

  return (
    <Flex mt={50} justify='flex-end' align='flex-start' direction='row'>
      <IconCircledArrow size='50' color={contrastColor} />
    </Flex>
  );
}
