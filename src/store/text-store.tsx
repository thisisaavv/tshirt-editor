import { create } from "zustand";

type Store = {
	value: string;
	font: string;
	color: string;
	setFont: (font: string) => void;
	setValue: (value: string) => void;
	setColor: (color: string) => void;
};

export const useInputText = create<Store>()((set) => ({
	value: "",
	font: "Arial",
	color: "#f44336",
	setValue: (value: string) => set((state) => ({ value })),
	setColor: (color: string) => set((state) => ({ color })),
	setFont: (font: string) => set((state) => ({ font })),
}));
