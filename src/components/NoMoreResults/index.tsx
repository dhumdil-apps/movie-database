import { Center, Text, Stack } from '@mantine/core';
import { IconMyUniverse } from '$icons/MyUniverse';
import { useSearchStore } from '$store/search';

export function NoMoreResults() {
  const isLoading = useSearchStore((state) => state.isLoading);
  const totalMovies = useSearchStore((state) => state.totalMovies);
  const loadedMovies = useSearchStore((state) => state.loadedMovies);
  const searchValue = useSearchStore((state) => state.searchValue);

  const noMoreResults =
    searchValue && !isLoading && loadedMovies && loadedMovies === totalMovies;

  if (!noMoreResults) {
    return <></>;
  }

  return (
    <Center mt={500}>
      <Stack>
        <IconMyUniverse size='300' />
        <Text size='xl' align='center'>
          You have explored it all.
        </Text>
      </Stack>
    </Center>
  );
}
