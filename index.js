#!/usr/bin/env node

const fs = require("fs");
const create = require("base-create");

create("babel", {
  dependencies: ["@babel/runtime"],
  devDependencies: [
    "@babel/core",
    "@babel/cli",
    "@babel/node",
    "@babel/preset-env",
    "@babel/plugin-transform-runtime",
  ],
  package: {
    main: "dist/main.js",
    scripts: {
      build: "babel src --out-dir dist",
      "build:watch": "npm run build -- --watch",
    },
  },
});

fs.writeFileSync(
  "babel.config.json",
  `{
  "presets": ["@babel/preset-env"],
  "plugins": ["@babel/plugin-transform-runtime"]
}`
);

fs.mkdirSync("src");
fs.writeFileSync("src/index.js", "");
