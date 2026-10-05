import type { APIRoute } from "astro";

import { SITE_URL } from "../data/seo";

export const GET: APIRoute = () =>
	new Response(
		`User-Agent: *
Allow: /

Host: ${SITE_URL}
Sitemap: ${SITE_URL}/sitemap.xml
`,
		{ headers: { "Content-Type": "text/plain; charset=utf-8" } },
	);
