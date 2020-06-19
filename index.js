#!/usr/bin/env node

const fs = require('fs')
const { spawnSync } = require('child_process')

const appDir = process.argv[2];

if (!appDir) {
  console.log('Must provide directory as argument: `npm init babel my-app`.')
  process.exit(1)
}

fs.mkdirSync(appDir)

process.chdir(appDir)

spawnSync('npm', 'init -y'.split(' '), {
  stdio: 'inherit'
})

spawnSync('npm', 'add -D @babel/core @babel/register @babel/node @babel/preset-env @babel/plugin-transform-runtime'.split(' '), {
  stdio: 'inherit'
})

spawnSync('npm', 'npm add @babel/runtime'.split(' '), {
  stdio: 'inherit'
})

fs.writeFileSync('babel.config.json', `{
  "presets": ["@babel/preset-env"],
  "plugins": ["@babel/plugin-transform-runtime"]
}`)
