import { create } from 'zustand';

interface CounterState {
  count: number;
  increment: () => void;
  decrement: () => void;
  setValue: (value: number) => void;
  reset: () => void;
}

export const useCounterStore = create<CounterState>((set) => ({
  count: 10,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  setValue: (value: number) => set({ count: value }),
  reset: () => set({ count: 0 }),
}));
