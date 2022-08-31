const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    // Your API Link
    proxy: 'https://cyber-loox.herokuapp.com/'
  }
})
