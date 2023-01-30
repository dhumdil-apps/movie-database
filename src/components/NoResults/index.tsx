import { Center, Text, Stack } from '@mantine/core';
import { IconSearching } from '$icons/Searching';
import { useSearchStore } from '$store/search';

export function NoResults() {
  const isLoading = useSearchStore((state) => state.isLoading);
  const totalMovies = useSearchStore((state) => state.totalMovies);
  const searchValue = useSearchStore((state) => state.searchValue);

  const noResults = searchValue && !isLoading && totalMovies === 0;

  if (!noResults) {
    return <></>;
  }

  return (
    <Center mt={50}>
      <Stack>
        <IconSearching size='300' />
        <Text size='xl' align='center'>
          No Results found for that keyword.
        </Text>
      </Stack>
    </Center>
  );
}
