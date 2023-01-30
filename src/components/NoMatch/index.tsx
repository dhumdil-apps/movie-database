import { Link } from 'react-router-dom';
import {
  createStyles,
  Title,
  Text,
  Button,
  Container,
  Group,
  Box,
} from '@mantine/core';

import { IconPageNotFound } from '$icons/PageNotFound';
import { ROUTES } from '$constants/routes';

const useStyles = createStyles((theme) => ({
  root: {
    paddingTop: 80,
    paddingBottom: 80,
  },

  title: {
    textAlign: 'center',
    fontWeight: 800,
    fontSize: 38,
    paddingTop: 38,

    [theme.fn.smallerThan('sm')]: {
      fontSize: 32,
    },
  },

  description: {
    maxWidth: 500,
    margin: 'auto',
    marginTop: theme.spacing.xl,
    marginBottom: theme.spacing.xl * 1.5,
    fontWeight: 300,
    fontStyle: 'italic',
  },

  button: {
    fontWeight: 400,
  },
}));

export function NoMatch() {
  const { classes } = useStyles();

  return (
    <Container className={classes.root}>
      <IconPageNotFound width='100%' />
      <Title className={classes.title}>You have found a secret place.</Title>
      <Text
        color='dimmed'
        size='lg'
        align='center'
        className={classes.description}
      >
        Unfortunately, this is only a 404 page. You may have mistyped the
        address, or the page has been moved to another URL.
      </Text>
      <Group position='center'>
        <Box component={Link} to={ROUTES.HOME}>
          <Button className={classes.button} variant='subtle' size='md'>
            Take me back to home page
          </Button>
        </Box>
      </Group>
    </Container>
  );
}
