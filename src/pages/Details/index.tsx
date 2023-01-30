import { IconStar } from '$icons/IconStar';
import {
  createStyles,
  Image,
  Container,
  Title,
  Group,
  Text,
  Paper,
  Flex,
  ActionIcon,
  Badge,
  SimpleGrid,
} from '@mantine/core';
import { Rating } from '$components/Rating';
import { parseRatingValue } from '$utils/parseRatingValue';
import { useFavoriteMoviesStore } from '$store/favoriteMovies';
import { MovieDetailType, useMovieDetailsQuery } from '$api/details';
import { useParams } from 'react-router-dom';
import { SimpleList } from '$components/SimpleList';
import { useUIStore } from '$store/ui';
import { COLOR_SCHEME } from '$constants/colorScheme';

const useStyles = createStyles((theme) => ({
  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan('md')]: {
      flexDirection: 'column-reverse',
    },
  },

  content: {
    maxWidth: 480,
    marginRight: theme.spacing.xl * 3,

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
      marginRight: 0,
    },
  },

  year: {
    fontSize: 64,
    fontWeight: 800,
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.gray[6]
        : theme.colors.dark[6],
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontSize: 44,
    lineHeight: 1.2,
    fontWeight: 800,

    [theme.fn.smallerThan('xs')]: {
      fontSize: 28,
    },
  },

  control: {
    [theme.fn.smallerThan('xs')]: {
      flex: 1,
    },
  },

  image: {
    flex: 1,
    maxWidth: 300,
  },

  highlight: {
    position: 'relative',
    backgroundColor: theme.fn.variant({
      variant: 'light',
      color: theme.primaryColor,
    }).background,
    borderRadius: theme.radius.sm,
    padding: '4px 12px',
  },
}));

function Details() {
  const { imdbID } = useParams();
  const { data, isLoading } = useMovieDetailsQuery(imdbID);
  const { classes, theme } = useStyles();
  const { addToFavoriteMovies, isInFavorites } = useFavoriteMoviesStore();
  const colorScheme = useUIStore((state) => state.colorScheme);
  const contrastColor =
    colorScheme === COLOR_SCHEME.DARK
      ? theme.colors.yellow[3]
      : theme.colors.orange[8];

  const handleAddToFavorites = () => {
    addToFavoriteMovies({
      imdbID: movieDetails.imdbID,
      Poster: movieDetails.Poster,
      Title: movieDetails.Title,
      Type: movieDetails.Type,
      Year: movieDetails.Year,
    });
  };

  if (isLoading || !data?.response) {
    // TODO: page skeleton
    return <>...</>;
  }

  const movieDetails: MovieDetailType = data?.response;
  const isStarInFavorites = isInFavorites(movieDetails?.imdbID);

  return (
    <div>
      <Container>
        <div className={classes.inner}>
          <div className={classes.content}>
            <Text className={classes.year}>{movieDetails.Year}</Text>
            <Flex
              gap='xl'
              justify='flex-start'
              align='center'
              direction='row'
              wrap='wrap'
            >
              <Title className={classes.title}>{movieDetails.Title}</Title>
              <ActionIcon
                aria-label='Add to favorites'
                size='xl'
                onClick={handleAddToFavorites}
                hidden={isStarInFavorites}
              >
                <IconStar size='44' color={contrastColor} />
              </ActionIcon>
            </Flex>

            <Text color='dimmed' mt='md'>
              {movieDetails.Plot}
            </Text>

            <SimpleList
              list={[
                {
                  label: 'Director',
                  value: movieDetails.Director,
                },
                {
                  label: 'Writer',
                  value: movieDetails.Writer,
                },
                {
                  label: 'Actors',
                  value: movieDetails.Actors,
                },
                {
                  label: 'Genre',
                  value: movieDetails.Genre,
                },
                {
                  label: 'Language',
                  value: movieDetails.Language,
                },
                {
                  label: 'Country',
                  value: movieDetails.Country,
                },
                {
                  label: 'Awards',
                  value: movieDetails.Awards,
                },
                {
                  label: 'Box Office',
                  value: movieDetails.BoxOffice,
                },
                {
                  label: 'Production',
                  value: movieDetails.Production,
                },
                {
                  label: 'Website',
                  value: movieDetails.Website,
                },
              ]}
            />

            <Group mt={30}>
              <Badge variant='dot' size='lg' aria-label='Type'>
                {movieDetails.Type}
              </Badge>
              <Badge variant='dot' size='lg' aria-label='Awards'>
                {movieDetails.Rated}
              </Badge>
              <Badge variant='dot' size='lg' aria-label='Released'>
                {movieDetails.Released}
              </Badge>
              <Badge variant='dot' size='lg' aria-label='Runtime'>
                {movieDetails.Runtime}
              </Badge>
            </Group>
          </div>
          <Flex
            gap='md'
            justify='center'
            align='flex-start'
            direction='row'
            wrap='wrap'
          >
            <Paper shadow='xl' radius='xs' p='xl'>
              <Image
                src={movieDetails.Poster}
                className={classes.image}
                alt={movieDetails.Title}
              />
            </Paper>
          </Flex>
        </div>
        <SimpleGrid
          cols={1}
          mt={30}
          breakpoints={[{ minWidth: 'md', cols: 3 }]}
        >
          {movieDetails.Ratings.map((rating) => (
            <Rating
              key={rating.Source}
              label={rating.Source}
              value={parseRatingValue(rating.Value)}
              valueLabel={rating.Value}
            />
          ))}
        </SimpleGrid>
      </Container>
    </div>
  );
}

export default Details;
