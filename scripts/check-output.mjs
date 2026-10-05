import { constants } from "node:fs";
import { access, readFile } from "node:fs/promises";

const requiredFiles = [
	"dist/index.html",
	"dist/404.html",
	"dist/sitemap.xml",
	"dist/resume.pdf",
];

for (const file of requiredFiles) {
	await access(file, constants.R_OK);
}

const html = await readFile("dist/index.html", "utf8");
const sitemap = await readFile("dist/sitemap.xml", "utf8");

for (const [name, pattern] of [
	["page title", /<title>[^<]+<\/title>/i],
	["meta description", /<meta name="description" content="[^"]+"/i],
	["canonical URL", /<link rel="canonical" href="https?:\/\//i],
	["structured data", /application\/ld\+json/i],
]) {
	if (!pattern.test(html))
		throw new Error(`Missing ${name} in dist/index.html`);
}

if (!/<urlset[\s>]/i.test(sitemap) || !/<loc>https?:\/\//i.test(sitemap)) {
	throw new Error("dist/sitemap.xml does not contain a valid URL set");
}

console.log("Static output checks passed.");
