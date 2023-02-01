import { Center, SimpleGrid } from '@mantine/core';

import type { MovieType } from '$api/movies';

import { MovieCard } from '$components/MovieCard';

export const testId = {
  root: 'MovieList',
};

type MovieListProps = {
  onDeleteFromFavorites?: (imdbID: string) => void;
  list?: MovieType[];
};

export function MovieList({ list, onDeleteFromFavorites }: MovieListProps) {
  if (!list?.length) {
    return null;
  }

  return (
    <Center data-testid={testId.root}>
      <SimpleGrid
        cols={1}
        spacing='xl'
        verticalSpacing='xl'
        breakpoints={[{ minWidth: 'md', cols: 2 }]}
      >
        {list.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            {...movie}
            onDeleteFromFavorites={onDeleteFromFavorites}
          />
        ))}
      </SimpleGrid>
    </Center>
  );
}
