import { Link } from 'react-router-dom';
import { createStyles, Header, Container, Group, Button } from '@mantine/core';

import { useRouterStore } from '$store/router';
import { ToggleColorScheme } from '$components/ToggleColorScheme';
import { IconStar } from '$icons/IconStar';
import { IconVercel } from '$icons/Vercel';
import { ROUTES } from '$constants/routes';
import { LABELS } from '$constants/labels';

const useStyles = createStyles((theme) => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },

  link: {
    [theme.fn.smallerThan('xs')]: {
      padding: 0,
    },
  },
}));

export function AppHeader() {
  const { classes, theme } = useStyles();
  const activeRoute = useRouterStore((state) => state.activeRoute);

  return (
    <Header data-testid='header' height={60} mb={120}>
      <Container className={classes.header}>
        <Group>
          <Button
            data-testid='home-link'
            className={classes.link}
            aria-label={LABELS.HOME}
            hidden={activeRoute === ROUTES.HOME}
            component={Link}
            to={ROUTES.HOME}
            variant='subtle'
            leftIcon={
              <IconVercel color={theme.primaryColor} size='30' stroke='3' />
            }
          >
            {LABELS.HOME}
          </Button>
          <Button
            data-testid='favorites-link'
            className={classes.link}
            aria-label={LABELS.FAVORITES}
            hidden={activeRoute === ROUTES.FAVORITES}
            component={Link}
            to={ROUTES.FAVORITES}
            variant='subtle'
            leftIcon={<IconStar color={theme.primaryColor} size='30' />}
          >
            {LABELS.FAVORITES}
          </Button>
        </Group>

        <Group>
          <ToggleColorScheme />
        </Group>
      </Container>
    </Header>
  );
}
