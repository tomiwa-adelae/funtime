import type { Metadata } from "next";
import localFont from "next/font/local";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
	subsets: ["latin"],
	weight: ["200", "400", "700", "900"],
});

export const metadata: Metadata = {
	title: "Funtime",
	description: "Fun in every crunch. It is fun time.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${montserrat.className} antialiased bg-white`}>
				{children}
			</body>
		</html>
	);
}
