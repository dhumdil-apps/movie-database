import { useState, useEffect } from 'react';
import { ROUTES } from '$constants/routes';
import {
  Grid,
  Skeleton,
  Container,
  Button,
  Center,
  TextInput,
} from '@mantine/core';
import { useRouterStore } from '$store/router';
import { useDebouncedState } from '@mantine/hooks';
import { IconCircledX } from '$icons/CircledX';
import { IconSearch } from '$icons/Search';

const child = <Skeleton height={250} radius='md' animate={false} />;

function Home() {
  const [value, setValue] = useDebouncedState('', 200);
  const setActiveRoute = useRouterStore((state) => state.setActiveRoute);

  useEffect(() => {
    setActiveRoute(ROUTES.HOME);
  }, []);

  return (
    <Container my='lg'>
      <Grid grow gutter='lg'>
        <Grid.Col span={12} py='lg'>
          <TextInput
            icon={<IconSearch size='18' />}
            defaultValue={value}
            placeholder='Search OMDb'
            size='xl'
            onChange={(event: any) => setValue(event.currentTarget.value)}
          />
        </Grid.Col>

        <Grid.Col xs={4}>{child}</Grid.Col>
        <Grid.Col xs={8}>{child}</Grid.Col>
        <Grid.Col xs={8}>{child}</Grid.Col>
        <Grid.Col xs={4}>{child}</Grid.Col>
        <Grid.Col xs={3}>{child}</Grid.Col>
        <Grid.Col xs={3}>{child}</Grid.Col>
        <Grid.Col xs={6}>{child}</Grid.Col>
        <Grid.Col xs={8}>{child}</Grid.Col>
        <Grid.Col xs={4}>{child}</Grid.Col>
        <Grid.Col xs={4}>{child}</Grid.Col>
        <Grid.Col xs={8}>{child}</Grid.Col>
        <Grid.Col xs={3}>{child}</Grid.Col>
        <Grid.Col xs={3}>{child}</Grid.Col>
        <Grid.Col xs={6}>{child}</Grid.Col>
        <Grid.Col xs={8}>{child}</Grid.Col>
        <Grid.Col xs={4}>{child}</Grid.Col>

        <Grid.Col span={12} py='lg'>
          <Center>
            <Button
              size='lg'
              fullWidth
              leftIcon={<IconCircledX size='18' />}
              variant='gradient'
              loading
            >
              Load more
            </Button>
          </Center>
        </Grid.Col>
      </Grid>
    </Container>
  );
}

export default Home;
