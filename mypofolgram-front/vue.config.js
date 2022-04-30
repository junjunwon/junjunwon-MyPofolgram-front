module.exports = {
  outputDir: "./public/resources/static/",
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
      '/api': {
        // target: 'http://localhost:8080',
        target : 'https://myportfoliogram.herokuapp.com/',
        ws: true,
        changeOrigin: true
      }
    },
    // disableHostCheck: true,
    port: 8079
  }
}
