import { create } from 'zustand';
import { devtools, persist } from 'zustand/middleware';
import { ColorScheme } from '@mantine/core';
import { COLOR_SCHEME } from '$constants/colorScheme';

type State = {
  colorScheme: ColorScheme;
};

type Actions = {
  toggleColorScheme: () => void;
};

export const useUIStore = create<State & Actions>()(
  devtools(
    persist(
      (set) => ({
        colorScheme: COLOR_SCHEME.DARK,
        toggleColorScheme: () => {
          set((state) => ({
            colorScheme:
              state.colorScheme === COLOR_SCHEME.DARK
                ? COLOR_SCHEME.LIGHT
                : COLOR_SCHEME.DARK,
          }));
        },
      }),
      {
        name: 'UI',
      },
    ),
    {
      anonymousActionType: 'UI',
    },
  ),
);
