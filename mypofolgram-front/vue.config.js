module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        sassOptions: {
          includePaths: ['./node_modules', './src/assets'],
        },
      },
    },
  },
  devServer: {
    proxy: {
      '/': {
        target: 'http://localhost:8080',
        ws: true,
        changeOrigin: true
      }
    },
    disableHostCheck: true,
    port: 8079
  }
}
