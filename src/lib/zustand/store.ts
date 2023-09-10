import { create } from "zustand";

interface IStore {
  count: number;
  inc: () => void;
  dec: () => void;
}

const useStore = create((set) => ({
  count: 0,
  inc: () => set((state: IStore) => ({ count: state.count + 1 })),
  dec: () => set((state: IStore) => ({ count: state.count - 1 })),
}));

export default useStore;