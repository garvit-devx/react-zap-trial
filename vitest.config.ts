import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    globals: true,
    environment: "jsdom",
    coverage: {
      reportsDirectory: "./coverage",
      provider: "v8",
      reporter: ["html", "text"],
      thresholds: {
        branches: 85,
        statements: 85,
        functions: 85,
        lines: 85,
      },
    },
  },
});
