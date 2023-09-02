import { create } from "zustand";

type Store = {
	illustration: null | Blob;
	setIllustration: (illustration: any) => void;
};

export const useIllustration = create<Store>()((set) => ({
	illustration: null,
	setIllustration: (illustration: any) => set((state) => ({ illustration: illustration })),
}));
