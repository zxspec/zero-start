import { defineConfig, mergeConfig } from "vitest/config";
import viteConfig from "./vite.config.ts";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      exclude: ["e2e**/*.spec.*"],
      globals: true,
      environment: "jsdom",
    },
  })
);
