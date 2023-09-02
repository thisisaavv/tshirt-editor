import { editorConfig } from "@/config/editorConfig";
import { create } from "zustand";

type Store = {
	image: string;
	setImage: (text: string) => void;
};

export const useImage = create<Store>()((set) => ({
	image: editorConfig.images[0].image[0],
	setImage: (image: string) => set((state) => ({ image: image })),
}));
