import { create } from "zustand";
import { persist } from "zustand/middleware";

type TNumberLogin = {
  number: string;
  setNumber: (v: string) => void;
};

export const useNumberLogin = create<TNumberLogin>()(
  persist(
    (set) => ({
      number: "",
      setNumber: (value) => set(() => ({ number: value })),
    }),
    { name: "phonNumber" }
  )
);
