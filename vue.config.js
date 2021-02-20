module.exports = {
  //打包后的位置
  publicPath: '/',
  //打包后的目录名称
  outputDir: 'dist',
  //静态资源目录名称
  assetsDir: "static",
  //去掉打包的时候生成的map文件
  productionSourceMap:false,
  devServer: {
    open: true
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import '~@/styles/global.scss';`
      }
    }
  }
}
