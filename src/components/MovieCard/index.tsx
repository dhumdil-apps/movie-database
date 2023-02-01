import { Link } from 'react-router-dom';
import { createStyles, Stack, Text, Paper, Button, Badge } from '@mantine/core';

import type { MovieType } from '$api/movies';

import { ROUTES } from '$constants/routes';

export const testId = {
  root: 'MovieCard',
};

const useStyles = createStyles(
  (theme, { Poster, hasSrc }: { Poster: string; hasSrc: boolean }) => ({
    card: {
      position: 'relative',
      width: 300,
      height: 450,
      backgroundPosition: 'center',
      backgroundSize: 'contain',
      backgroundImage: `url(${Poster})`,
      backgroundRepeat: 'no-repeat',
    },

    cardDetails: {
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      padding: 24,
      background: 'rgba(0,0,0, 0.9)',
      opacity: hasSrc ? 0 : 0.5,
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
  }),
);

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
  const { classes } = useStyles({
    Poster,
    hasSrc: !!Poster && Poster !== 'N/A',
  });

  return (
    <Paper
      data-testid={testId.root}
      shadow='md'
      p='xl'
      className={classes.card}
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
