import { Link } from 'react-router-dom';
import { createStyles, Header, Container, Group } from '@mantine/core';
import { useRouterStore } from '$store/router';
import { useUIStore } from '$store/ui';
import { ToggleColorScheme } from '$components/ToggleColorScheme';
import { ROUTES } from '$constants/routes';
import { IconStar } from '$icons/IconStar';
import { COLOR_SCHEME } from '$constants/colorScheme';

const useStyles = createStyles((theme) => ({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '100%',
  },

  search: {
    [theme.fn.smallerThan('xs')]: {
      display: 'none',
    },
  },

  link: {
    display: 'block',
    lineHeight: 1,
    padding: '8px 12px',
    borderRadius: theme.radius.sm,
    textDecoration: 'none',
    color:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[0]
        : theme.colors.gray[7],
    fontSize: theme.fontSizes.sm,
    fontWeight: 500,

    '&:hover': {
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    },
  },

  linkActive: {
    '&, &:hover': {
      backgroundColor: theme.fn.variant({
        variant: 'light',
        color: theme.primaryColor,
      }).background,
      color: theme.fn.variant({ variant: 'light', color: theme.primaryColor })
        .color,
    },
  },
}));

export function HeaderSimple() {
  const { classes, cx } = useStyles();
  const activeRoute = useRouterStore((state) => state.activeRoute);
  const colorScheme = useUIStore((state) => state.colorScheme);
  const isDark = colorScheme === COLOR_SCHEME.DARK;

  return (
    <Header height={60} mb={120}>
      <Container className={classes.header}>
        <Group>
          <Link
            to={ROUTES.FAVORITES}
            className={cx(classes.link, {
              [classes.linkActive]: activeRoute === ROUTES.FAVORITES,
            })}
          >
            <IconStar color={isDark ? '#F9A826' : '#6C63FF'} size='30' />
          </Link>
        </Group>

        <Group>
          <ToggleColorScheme />
        </Group>
      </Container>
    </Header>
  );
}
