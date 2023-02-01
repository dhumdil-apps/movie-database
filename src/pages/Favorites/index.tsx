import { useMemo } from 'react';
import { Container } from '@mantine/core';
import { useDocumentTitle } from '@mantine/hooks';

import type { MovieType } from '$api/movies';

import { MovieList } from '$components/MovieList';

import { useFavoriteMoviesStore } from '$store/favoriteMovies';

export const testId = {
  root: 'Favorites',
};

function Favorites() {
  const { favoriteMovies, deleteFromFavoriteMovies } = useFavoriteMoviesStore();

  useDocumentTitle('Favorite Movies');

  const movies: MovieType[] = useMemo(() => {
    return Object.entries(favoriteMovies).map(([, movie]) => movie);
  }, [favoriteMovies]);

  return (
    <Container data-testid={testId.root} my='lg'>
      <MovieList
        list={movies}
        onDeleteFromFavorites={deleteFromFavoriteMovies}
      />
    </Container>
  );
}

export default Favorites;
