import { setConfig } from "../../default.config.rollup";

export default setConfig({
  input: ["./contract.ts", "./state.ts"],
  output: {
    dir: "./build",
    format: "es",
    sourcemap: false,
    exports: "named",
    entryFileNames: "[name].js",
  },
  tsconfig: "./tsconfig.json",
});
