// 获取当前的时间戳
let timeStamp = new Date().getTime();
module.exports = {
  //打包后的位置
  publicPath: '/',
  //打包后的目录名称
  outputDir: 'dist',
  //静态资源目录名称
  assetsDir: "static",
  //去掉打包的时候生成的map文件
  productionSourceMap: false,
  lintOnSave: false,
  filenameHashing: false,
  configureWebpack: {    //重点
    output: { // 输出重构 打包编译后的js文件名称,添加时间戳.
      filename: `js[name].${timeStamp}.js`,
      chunkFilename: `js[name].${timeStamp}.js`,
    }
  },
  css: { //重点.
    extract: { // 打包后css文件名称添加时间戳
      filename: `css/[name].${timeStamp}.css`,
      chunkFilename: `css/[name].${timeStamp}.css`,
    }
  },
  devServer: {
    open: true,
    overlay: {
      warnings: false,
      errors: false
    },
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import '~@/styles/global.scss';`
      }
    }
  }
}
