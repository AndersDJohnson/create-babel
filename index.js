#!/usr/bin/env node

const create = require("base-create");

create({
  dependencies: ["@babel/runtime"],
  devDependencies: [
    "@babel/core",
    "@babel/cli",
    "@babel/node",
    "@babel/preset-env",
    "@babel/plugin-transform-runtime",
  ],
  package: {
    main: "dist/index.js",
    keywords: ["create-babel"],
    files: ["dist"],
    scripts: {
      start: "node .",
      build: "babel src --out-dir dist",
      "build:watch": "npm run build -- --watch",
    },
  },
  files: [
    {
      path: "babel.config.json",
      contents: {
        "presets": ["@babel/preset-env"],
        "plugins": ["@babel/plugin-transform-runtime"]
      }
    },
    "src/index.js"
  ]
});
