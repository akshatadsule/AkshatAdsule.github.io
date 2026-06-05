import type { Metadata } from "next";

import { Space_Grotesk } from "next/font/google";
import localFont from "next/font/local";

import "./globals.css";
import { Backdrop } from "./_components/backdrop";
import { SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "./seo";

const akshatSans = localFont({
	src: "./fonts/AkshatSans.ttf",
	display: "swap",
	variable: "--font-akshat-sans",
	preload: true,
	fallback: ["system-ui", "arial"],
});

const spaceGrotesk = Space_Grotesk({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-space-grotesk",
	preload: true,
	fallback: ["system-ui", "arial"],
});

export const metadata: Metadata = {
	metadataBase: new URL(SITE_URL),
	title: {
		default: SITE_NAME,
		template: `%s | ${SITE_NAME}`,
	},
	description: SITE_DESCRIPTION,
	keywords: [
		"Akshat Adsule",
		"UC Davis",
		"Software Engineer",
		"Software Engineering",
		"Developer",
		"Photographer",
		"Portfolio",
		"Next.js",
		"React",
		"Cloud Infrastructure",
		"Distributed Rendering",
	],
	authors: [{ name: "Akshat Adsule" }],
	creator: "Akshat Adsule",
	publisher: "Akshat Adsule",
	alternates: {
		canonical: "/",
	},
	openGraph: {
		title: SITE_NAME,
		description: SITE_DESCRIPTION,
		url: "/",
		siteName: SITE_NAME,
		locale: "en_US",
		type: "website",
	},
	twitter: {
		card: "summary",
		title: SITE_NAME,
		description: SITE_DESCRIPTION,
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-snippet": -1,
			"max-image-preview": "large",
			"max-video-preview": -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={`${akshatSans.variable} ${spaceGrotesk.variable} antialiased`}
		>
			<body className="bg-slate-900 leading-relaxed text-slate-400 antialiased selection:bg-teal-300 selection:text-teal-900">
				<div className="group/spotlight relative">
					<Backdrop />
					{children}
				</div>
			</body>
		</html>
	);
}
