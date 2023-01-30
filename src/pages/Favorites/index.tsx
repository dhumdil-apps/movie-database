import { Container } from '@mantine/core';
import { MovieList } from '$components/MovieList';
import { MovieType } from '$api/movies';
import { useFavoriteMoviesStore } from '$store/favoriteMovies';
import { useMemo } from 'react';

function Favorites() {
  const { favoriteMovies, deleteFromFavoriteMovies } = useFavoriteMoviesStore();

  const movies: MovieType[] = useMemo(() => {
    return Object.entries(favoriteMovies).map(([, movie]) => movie);
  }, [favoriteMovies]);

  return (
    <Container my='lg'>
      <MovieList
        list={movies}
        onDeleteFromFavorites={deleteFromFavoriteMovies}
      />
    </Container>
  );
}

export default Favorites;
