import {
	JetBrains_Mono as FontJetBrainsMono,
	Inter as FontInter,
	Space_Grotesk as FontSpaceGrotesk,
} from "next/font/google";

export const fontInter = FontInter({
	subsets: ["latin"],
	variable: "--font-sans",
});

export const fontJetBrainsMono = FontJetBrainsMono({
	subsets: ["latin"],
	variable: "--font-mono",
});

export const fontSpaceGrotesk = FontSpaceGrotesk({
	subsets: ["latin"],
	variable: "--font-sans",
});
