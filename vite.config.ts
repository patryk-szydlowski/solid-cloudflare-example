import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";
import solid from "solid-start";
// @ts-expect-error: Solid Cloudflare adapter has no types
import cloudflare from "solid-start-cloudflare-pages";
import { defineConfig } from "vite";

export default defineConfig(({ command }) => ({
  plugins: [
    solid({ adapter: cloudflare() }),
    vanillaExtractPlugin({ identifiers: command === "build" ? "short" : "debug" }),
  ],
}));
