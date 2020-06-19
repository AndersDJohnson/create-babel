#!/usr/bin/env node

const fs = require('fs')
const { spawnSync } = require('child_process')

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
