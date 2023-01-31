import { useMemo } from 'react';
import { Container } from '@mantine/core';
import { useDocumentTitle } from '@mantine/hooks';
import { MovieList } from '$components/MovieList';
import { MovieType } from '$api/movies';
import { useFavoriteMoviesStore } from '$store/favoriteMovies';

function Favorites() {
  const { favoriteMovies, deleteFromFavoriteMovies } = useFavoriteMoviesStore();

  useDocumentTitle('Favorite Movies');

  const movies: MovieType[] = useMemo(() => {
    return Object.entries(favoriteMovies).map(([, movie]) => movie);
  }, [favoriteMovies]);

  return (
    <Container data-testid='favorites' my='lg'>
      <MovieList
        list={movies}
        onDeleteFromFavorites={deleteFromFavoriteMovies}
      />
    </Container>
  );
}

export default Favorites;
