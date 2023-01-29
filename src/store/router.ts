import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type State = {
  activeRoute: string;
};

type Actions = {
  setActiveRoute: (route: string) => void;
};

export const useRouterStore = create<State & Actions>()(
  devtools(
    (set, get) => ({
      activeRoute: '',
      setActiveRoute: (route: string) => {
        if (get().activeRoute !== route) {
          set({
            activeRoute: route,
          });
        }
      },
    }),
    {
      anonymousActionType: 'ROUTER',
    },
  ),
);
