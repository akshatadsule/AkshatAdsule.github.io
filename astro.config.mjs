import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";

import { SITE_URL } from "./src/data/seo";

export default defineConfig({
	site: SITE_URL,
	vite: {
		plugins: [tailwindcss()],
	},
	fonts: [
		{
			provider: fontProviders.local(),
			name: "Akshat Sans",
			cssVariable: "--font-akshat-sans",
			display: "swap",
			fallbacks: ["system-ui", "arial", "sans-serif"],
			formats: ["ttf"],
			options: {
				variants: [{ src: ["./src/assets/fonts/AkshatSans.ttf"] }],
			},
		},
		{
			provider: fontProviders.google(),
			name: "Space Grotesk",
			cssVariable: "--font-space-grotesk",
			display: "swap",
			weights: ["300 700"],
			subsets: ["latin"],
			fallbacks: ["system-ui", "arial", "sans-serif"],
		},
	],
});
