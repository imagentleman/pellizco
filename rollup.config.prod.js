import buble from "rollup-plugin-buble";
import uglify from "rollup-plugin-uglify";
import pkg from "./package.json";

export default [
  {
    entry: "src/main.js",
    targets: [
      { dest: pkg.main, format: "cjs" },
      { dest: pkg.module, format: "es" }
    ],
    plugins: [
      buble({
        exclude: ["node_modules/**"]
      })
    ]
  },
  {
    entry: "src/main.js",
    moduleName: "pellizco",
    targets: [{ dest: pkg.browser, format: "umd" }],
    plugins: [
      buble({
        exclude: ["node_modules/**"]
      }),
      uglify()
    ]
  }
];
