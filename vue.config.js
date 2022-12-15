const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir : "../src/main/resources/static",   //빌드 타겟디렉토리
  devServer : {
    proxy : {
      '/test' : {
        //test로 들어오면 스프링서버(8888)로 보냄
        target : 'http://localhost:8888',
        changeOrigin : true //cross origin 허용
      }
    }
  }
})
