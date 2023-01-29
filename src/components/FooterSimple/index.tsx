import { ROUTES } from '$constants/routes';
import { IconGithub } from '$icons/Github';
import { IconVercel } from '$icons/Vercel';
import { createStyles, Container, Group, Button } from '@mantine/core';

const useStyles = createStyles((theme) => ({
  footer: {
    borderTop: `1px solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
    }`,
  },

  inner: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: theme.spacing.xl,
    paddingBottom: theme.spacing.xl,

    [theme.fn.smallerThan('xs')]: {
      flexDirection: 'column',
    },
  },

  links: {
    [theme.fn.smallerThan('xs')]: {
      marginTop: theme.spacing.md,
    },
  },
}));

export function FooterSimple() {
  const { classes } = useStyles();

  return (
    <div className={classes.footer}>
      <Container className={classes.inner}>
        <Button
          component='a'
          href={ROUTES.HOME}
          variant='subtle'
          leftIcon={<IconVercel />}
        >
          Deployed here
        </Button>

        <Group className={classes.links}>
          <Button
            component='a'
            href='https://github.com/dhumdil-apps/movie-database'
            target='_blank'
            variant='subtle'
            leftIcon={<IconGithub size='18' />}
          >
            Github
          </Button>
        </Group>
      </Container>
    </div>
  );
}
