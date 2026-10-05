import { copyFile } from "node:fs/promises";

await copyFile("cloudflare/_headers", "dist/_headers");
