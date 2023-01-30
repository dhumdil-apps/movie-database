import { Center, Button, useMantineTheme, LoadingOverlay } from '@mantine/core';
import { useSearchStore } from '$store/search';
import { COLOR_SCHEME } from '$constants/colorScheme';
import { useUIStore } from '$store/ui';
import { useMutation } from '@tanstack/react-query';
import { fetchMovies } from '$api/movies';

export function LoadMore() {
  const setLoading = useSearchStore((state) => state.setLoading);
  const resetSearchValue = useSearchStore((state) => state.resetSearchValue);
  const loadNextPage = useSearchStore((state) => state.loadNextPage);
  const isLoading = useSearchStore((state) => state.isLoading);
  const searchValue = useSearchStore((state) => state.searchValue);
  const page = useSearchStore((state) => state.page);
  const totalMovies = useSearchStore((state) => state.totalMovies);
  const loadedMovies = useSearchStore((state) => state.loadedMovies);
  const colorScheme = useUIStore((state) => state.colorScheme);
  const theme = useMantineTheme();
  const hasResults = totalMovies > loadedMovies;
  const isHidden = !page || !hasResults;
  const contrastColor =
    colorScheme === COLOR_SCHEME.DARK ? theme.white : theme.black;
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

  const onLoadMore = () => {
    if (searchValue && page) {
      mutation.mutate({ searchValue, page: page + 1 });
    }
  };

  return (
    <Center sx={{ position: 'relative' }}>
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
