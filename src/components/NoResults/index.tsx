import { Center, Text, Stack } from '@mantine/core';

import { useSearchStore } from '$store/search';

import { IconSearching } from '$icons/Searching';

export const testId = {
  root: 'NoResults',
};

export function NoResults() {
  const { isLoading, totalMovies, searchValue } = useSearchStore();

  const noResults = searchValue && !isLoading && totalMovies === 0;

  if (!noResults) {
    return null;
  }

  return (
    <Center data-testid={testId.root} mt={50}>
      <Stack>
        <IconSearching size='300' />
        <Text size='xl' align='center'>
          No Results found for that keyword.
        </Text>
      </Stack>
    </Center>
  );
}
