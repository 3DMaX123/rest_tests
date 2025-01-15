import {create} from "zustand";

interface GameStore {
  resetGame: () => void;
  setResetGame: (fn: () => void) => void;
}

export const useCheckStore = create<GameStore>((set) => ({
  resetGame: () => {},
  setResetGame: (fn) => set({resetGame: fn}),
}));
