import { createStyles, Container, Group, ActionIcon } from '@mantine/core';

import { IconGithub } from '$icons/Github';
import { IconLink } from '$icons/Link';
import { IconVercel } from '$icons/Vercel';

export const testId = {
  root: 'AppFooter',
};

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
      marginTop: theme.spacing.xl,
    },
  },
}));

export function AppFooter() {
  const { classes } = useStyles();

  return (
    <footer data-testid={testId.root} className={classes.footer}>
      <Container className={classes.inner}>
        <ActionIcon
          component='a'
          href='https://movie-database-dhumdil.vercel.app/'
          variant='subtle'
          aria-label='Vercel'
        >
          <IconVercel size='18' />
        </ActionIcon>

        <Group className={classes.links}>
          <ActionIcon
            component='a'
            href='https://github.com/dhumdil-apps/movie-database'
            target='_blank'
            variant='subtle'
            aria-label='Github'
          >
            <IconGithub size='18' />
          </ActionIcon>
          <ActionIcon
            component='a'
            href='https://omdbapi.com/'
            target='_blank'
            variant='subtle'
            aria-label='OMDb API'
          >
            <IconLink size='18' />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}
