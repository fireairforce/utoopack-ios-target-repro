import { build } from "@utoo/pack";

await build(
  {
    config: {
      mode: "production",
      target: "ios >= 8",
      entry: [{ import: "./src/index.js", name: "main" }],
      output: {
        path: "./dist",
        filename: "[name].js",
        chunkFilename: "[name].js",
        clean: true
      },
      optimization: { minify: true },
      sourceMaps: false
    }
  },
  process.cwd()
);
