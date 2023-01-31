import { Grid, Container } from '@mantine/core';
import { Search } from '$components/Search';
import { MovieList } from '$components/MovieList';
import { LoadMore } from '$components/LoadMore';
import { useSearchStore } from '$store/search';
import { NoResults } from '$components/NoResults';
import { NoResultsYet } from '$components/NoResultsYet';
import { NoMoreResults } from '$components/NoMoreResults';
import { useDocumentTitle } from '@mantine/hooks';

function Home() {
  const movies = useSearchStore((state) => state.movies);

  useDocumentTitle('Movie Database');

  return (
    <Container data-testid='home' my='lg'>
      <Grid grow gutter='lg'>
        <Grid.Col span={12} py='lg'>
          <Search />
        </Grid.Col>

        <Grid.Col span={12} py='lg'>
          <MovieList list={movies} />
          <NoResults />
          <NoResultsYet />
          <NoMoreResults />
        </Grid.Col>

        <Grid.Col span={12} py='lg'>
          <LoadMore />
        </Grid.Col>
      </Grid>
    </Container>
  );
}

export default Home;
