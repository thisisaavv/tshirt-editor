import "../styles/globals.css";
import type { Metadata } from "next";
import { fontInter, fontSpaceGrotesk } from "./fonts";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
	title: "Editor Online",
	description: "Online editor",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={`${fontInter.className} ${fontSpaceGrotesk.className}`}>
				<div>
					<Header />
				</div>
				<div className="container py-10">
					<main>{children}</main>
				</div>
				<div>
					<Footer />
				</div>
			</body>
		</html>
	);
}
