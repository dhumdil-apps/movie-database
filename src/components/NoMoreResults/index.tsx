import { Center, Text, Stack } from '@mantine/core';

import { useSearchStore } from '$store/search';

import { IconMyUniverse } from '$icons/MyUniverse';

export const testId = {
  root: 'NoMoreResults',
};

export function NoMoreResults() {
  const { isLoading, totalMovies, loadedMovies, searchValue } =
    useSearchStore();

  const noMoreResults =
    searchValue && !isLoading && loadedMovies && loadedMovies === totalMovies;

  if (!noMoreResults) {
    return null;
  }

  return (
    <Center data-testid={testId.root} mt={500}>
      <Stack>
        <IconMyUniverse size='300' />
        <Text size='xl' align='center'>
          You have explored it all.
        </Text>
      </Stack>
    </Center>
  );
}
