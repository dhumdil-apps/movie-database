import { create } from 'zustand';
import { immer } from 'zustand/middleware/immer';
import add from '$utils/math/add';
import subtract from '$utils/math/subtract';

type State = {
  count: number;
};

type Actions = {
  increment: (qty: number) => void;
  decrement: (qty: number) => void;
};

export const useCountStore = create(
  immer<State & Actions>((set) => ({
    count: 0,
    increment: (qty: number) =>
      set((state) => {
        state.count = add(state.count, qty);
      }),
    decrement: (qty: number) =>
      set((state) => {
        state.count = subtract(state.count, qty);
      }),
  })),
);
