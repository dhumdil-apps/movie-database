import { useMutation } from '@tanstack/react-query';
import { Center, Button, useMantineTheme, LoadingOverlay } from '@mantine/core';

import { fetchMovies } from '$api/movies';

import { useUIStore } from '$store/ui';
import { useSearchStore } from '$store/search';

import { COLOR_SCHEME } from '$constants/colorScheme';

export const testId = {
  root: 'LoadMore',
};

export function LoadMore() {
  const theme = useMantineTheme();
  const colorScheme = useUIStore((state) => state.colorScheme);
  const {
    setLoading,
    resetSearchValue,
    loadNextPage,
    isLoading,
    searchValue,
    page,
    totalMovies,
    loadedMovies,
  } = useSearchStore();
  const mutation = useMutation(fetchMovies, {
    onSuccess: (response) => {
      if (response.data?.movies) {
        loadNextPage(response.data?.movies, page + 1);
      } else {
        resetSearchValue();
      }
    },
    onMutate: setLoading,
  });

  const hasResults = totalMovies > loadedMovies;
  const isHidden = !page || !hasResults;
  const contrastColor =
    colorScheme === COLOR_SCHEME.DARK ? theme.white : theme.black;

  const onLoadMore = () => {
    if (searchValue && page) {
      mutation.mutate({ searchValue, page: page + 1 });
    }
  };

  return (
    <Center data-testid={testId.root} sx={{ position: 'relative' }}>
      <Button
        hidden={isHidden}
        color={theme.primaryColor}
        size='md'
        fullWidth
        variant='gradient'
        onClick={onLoadMore}
      >
        Load more results
      </Button>
      <LoadingOverlay
        loaderProps={{ size: 'md', color: contrastColor, variant: 'dots' }}
        visible={isLoading}
      />
    </Center>
  );
}
