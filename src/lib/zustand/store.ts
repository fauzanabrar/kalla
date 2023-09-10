import { create } from "zustand";

import { Asset } from "@/components";

interface IStore {
  fakeData: Asset[];
  inc: () => void;
  dec: () => void;
}

const useStore = create((set) => ({
  fakeData: [],
  setFakeData: (data: Asset[]) => set({ fakeData: data }),
  add: (data: Asset) => set((state: IStore) => ({ fakeData: [...state.fakeData, data] })),
  delete: (id: string) => set((state: IStore) => ({ fakeData: state.fakeData.filter((data) => data.id !== id) })),
  get: (id: string) => set((state: IStore) => ({ fakeData: state.fakeData.filter((data) => data.id === id) })),
}));

export default useStore;