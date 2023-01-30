import {
  createStyles,
  Title,
  Text,
  Button,
  Container,
  Group,
} from '@mantine/core';
import { IconFixingBugs } from '$icons/FixingBugs';
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
  },
}));

type ErrorHandlerProps = {
  error: Error;
  resetErrorBoundary: () => void;
};

export function ErrorHandler(props: ErrorHandlerProps) {
  const { classes } = useStyles();

  return (
    <Container className={classes.root}>
      <IconFixingBugs width='100%' />
      <Title className={classes.title}>You have found a bug.</Title>
      <Text
        color='dimmed'
        size='lg'
        align='center'
        className={classes.description}
      >
        Something bad just happened. Don&apos;t worry, our development team was
        already notified.
      </Text>
      <Group position='center'>
        <Button variant='subtle' size='md' onClick={props.resetErrorBoundary}>
          Try Again
        </Button>
        <a href={ROUTES.HOME}>
          <Button size='md'>Take me to home page</Button>
        </a>
      </Group>
    </Container>
  );
}
