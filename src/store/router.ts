import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type ParamsType = {
  [key: string]: string | undefined;
};

type State = {
  activeRoute: string;
  routeParams: ParamsType;
};

type Actions = {
  updateRoute: (activeRoute: string, params: ParamsType) => void;
};

export const useRouterStore = create<State & Actions>()(
  devtools(
    (set) => ({
      activeRoute: '',
      routeParams: {},
      updateRoute: (route, params) => {
        set({
          activeRoute: route,
          routeParams: params,
        });
      },
    }),
    {
      anonymousActionType: 'ROUTER',
    },
  ),
);
