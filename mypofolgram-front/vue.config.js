module.exports = {
  outputDir: "../../MyPofolgram-back/src/main/resources/static/",
  indexPath: "../static/index.html",
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
  configureWebpack: {
    devtool: 'source-map'
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
