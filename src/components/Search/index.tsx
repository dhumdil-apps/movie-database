import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import {
  ActionIcon,
  TextInput,
  LoadingOverlay,
  createStyles,
} from '@mantine/core';
import { useInputState, getHotkeyHandler } from '@mantine/hooks';
import styled from '@emotion/styled';
import { IconSearch } from '$icons/Search';
import { IconArrowLeft } from '$icons/ArrowLeft';
import { IconArrowRight } from '$icons/ArrowRight';
import { useSearchStore } from '$store/search';
import { useUIStore } from '$store/ui';
import { COLOR_SCHEME } from '$constants/colorScheme';
import { fetchMovies } from '$api/movies';

const StyledDiv = styled.div`
  position: relative;
`;

const useStyles = createStyles(
  (theme, { floating }: { floating: boolean }) => ({
    root: {
      position: 'relative',
    },

    label: {
      position: 'absolute',
      zIndex: 2,
      top: 7,
      left: theme.spacing.sm,
      pointerEvents: 'none',
      color: floating
        ? theme.colorScheme === 'dark'
          ? theme.white
          : theme.black
        : theme.colorScheme === 'dark'
        ? theme.colors.dark[3]
        : theme.colors.gray[5],
      transition:
        'transform 150ms ease, color 150ms ease, font-size 150ms ease',
      transform: floating
        ? `translate(-${theme.spacing.sm}px, -28px)`
        : 'translate(30px, 5px)',
      fontSize: floating ? theme.fontSizes.xs : theme.fontSizes.sm,
      fontWeight: 400,
    },

    input: {
      '&::placeholder': {
        transition: 'color 150ms ease',
        color: !floating ? 'transparent' : undefined,
      },
    },
  }),
);

export function Search() {
  const colorScheme = useUIStore((state) => state.colorScheme);
  const resetSearchValue = useSearchStore((state) => state.resetSearchValue);
  const loadFirstPage = useSearchStore((state) => state.loadFirstPage);
  const setSearchValue = useSearchStore((state) => state.setSearchValue);
  const searchValue = useSearchStore((state) => state.searchValue);
  const isLoading = useSearchStore((state) => state.isLoading);
  const [search, setSearch] = useInputState(searchValue);
  const [focused, setFocused] = useState(false);
  const { classes, theme } = useStyles({
    floating: search.trim().length !== 0 || focused,
  });
  const contrastColor =
    colorScheme === COLOR_SCHEME.DARK ? theme.white : theme.black;
  const mutation = useMutation(fetchMovies, {
    onSuccess: (response) => {
      if (
        response.success &&
        response.data?.movies &&
        response.data?.totalMovies
      ) {
        loadFirstPage(
          response.data?.movies,
          parseInt(response.data?.totalMovies),
        );
      } else {
        resetSearchValue();
      }
    },
    onMutate: (data) => {
      setSearchValue(data.searchValue);
    },
  });

  const triggerSearch = () => {
    if (!isLoading) {
      mutation.mutate({ searchValue: search, page: 1 });
    }
  };

  return (
    <StyledDiv>
      <TextInput
        classNames={classes}
        icon={<IconSearch size='18' color={theme.colors.dark[0]} />}
        value={search}
        placeholder='Batman'
        label='Search OMDb'
        size='md'
        mt='md'
        radius='xl'
        onChange={setSearch}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onKeyDown={getHotkeyHandler([['Enter', triggerSearch]])}
        rightSectionWidth={42}
        rightSection={
          <ActionIcon
            size={32}
            radius='xl'
            onClick={triggerSearch}
            color={theme.primaryColor}
            variant='filled'
            aria-label='Submit search'
          >
            {theme.dir === 'ltr' ? (
              <IconArrowRight size='18' color={theme.white} />
            ) : (
              <IconArrowLeft size='18' color={theme.white} />
            )}
          </ActionIcon>
        }
      />
      <LoadingOverlay
        style={{ borderRadius: '50px' }}
        loaderProps={{ size: 'sm', color: contrastColor, variant: 'dots' }}
        visible={isLoading}
      />
    </StyledDiv>
  );
}
