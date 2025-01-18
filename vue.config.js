const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production'
    ? '/furkan-bektas-website/'
    : '/',
  outputDir: 'dist',
  transpileDependencies: true
}) 