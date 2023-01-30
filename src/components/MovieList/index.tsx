import { Center, SimpleGrid } from '@mantine/core';
import { MovieCard } from '$components/MovieCard';
import { MovieType } from '$api/movies';

type MovieListProps = {
  onDeleteFromFavorites?: (imdbID: string) => void;
  list?: MovieType[];
};

export function MovieList({ list, onDeleteFromFavorites }: MovieListProps) {
  if (!list?.length) {
    return <></>;
  }

  return (
    <Center>
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
