const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: './/dist', // 생략하면 기본 dist 폴더
  productionSourceMap: false // .map 파일을 생성하지 않는다.
})
