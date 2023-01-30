import { Link } from 'react-router-dom';
import { createStyles, Stack, Text, Paper, Button, Badge } from '@mantine/core';
import { MovieType } from '$api/movies';
import { ROUTES } from '$constants/routes';

const useStyles = createStyles((theme) => ({
  card: {
    position: 'relative',
    width: 300,
    height: 450,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
  },

  cardDetails: {
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    padding: 24,
    background: 'rgba(0,0,0, 0.9)',
    opacity: 0,
    transition: 'opacity 300ms ease-in-out',

    '&:hover': {
      opacity: 1,
    },
  },

  title: {
    fontWeight: 400,
    fontSize: 24,
    color: theme.white,
  },

  year: {
    fontWeight: 800,
    fontSize: 48,
    color: theme.white,
  },

  type: {
    fontWeight: 300,
    fontStyle: 'italic',
    fontSize: 16,
    color: theme.primaryColor,
  },
}));

type MovieCardType = {
  onDeleteFromFavorites?: (imdbID: string) => void;
};

export function MovieCard({
  imdbID,
  Title,
  Type,
  Year,
  Poster,
  onDeleteFromFavorites,
}: MovieType & MovieCardType) {
  const { classes } = useStyles();

  return (
    <Paper
      shadow='md'
      p='xl'
      className={classes.card}
      sx={{
        backgroundColor: 'white',
        backgroundImage: `url(${Poster})`,
      }}
    >
      <Stack justify='space-between' className={classes.cardDetails}>
        <Stack align='flex-start' justify='flex-start'>
          <Badge radius='xs' className={classes.type} mt={5} hidden={!Type}>
            {Type}
          </Badge>
          <Text
            className={classes.year}
            color='dimmed'
            size='xs'
            weight={700}
            mt='md'
            hidden={!Year}
          >
            {Year}
          </Text>

          <Text className={classes.title} mt={5}>
            {Title}
          </Text>
        </Stack>

        <Stack justify='flex-end'>
          <Button
            variant='subtle'
            onClick={() =>
              onDeleteFromFavorites && onDeleteFromFavorites(imdbID)
            }
            hidden={!onDeleteFromFavorites}
          >
            Remove from Favorites
          </Button>
          <Button component={Link} to={`${ROUTES.MOVIE_DETAILS}/${imdbID}`}>
            More Details
          </Button>
        </Stack>
      </Stack>
    </Paper>
  );
}
