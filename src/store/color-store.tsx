import { create } from "zustand";

type Store = {
	color: string;
	setColor: (color: string) => void;
};

export const useColor = create<Store>((set) => ({
	color: "#f44336",
	setColor: (color: string) => set((state) => ({ color: color })),
}));
