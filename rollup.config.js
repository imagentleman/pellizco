import buble from "rollup-plugin-buble";

export default [
  {
    entry: "src/main.js",
    moduleName: "pellizco",
    targets: [
      { dest: "dist/pellizco.umd.js", format: "umd" }
    ],
    plugins: [
      buble({
        exclude: ["node_modules/**"]
      })
    ]
  }
];
