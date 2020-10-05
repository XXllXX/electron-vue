const path = require('path')

//拼接路径
function resolve(dir) {
  return path.join(__dirname, dir)
}
// vue.config.js
module.exports = {
  pages: { index: 'src/renderer/main.js' },
  outputDir: 'dist/web',
  chainWebpack: (config) => {
    config.resolve.alias.set('@', resolve('src/renderer'))
  },
  pluginOptions: {
    electronBuilder: {
      mainProcessFile: 'src/main/index.js',
      nodeIntegration: true,
      outputDir: 'dist/electron',
      externals: ['fs'],
      nodeModulesPath: ['./node_modules'],
    },
  },
  productionSourceMap: process.env.NODE_ENV === 'development' ? true : false,
}
