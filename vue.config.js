const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
    transpileDependencies: true,

    // Vue 빌드 파일을 Spring Boot의 static 폴더로 출력
    outputDir: "../achacha-back/achacha/src/main/resources/static",

    devServer: {
        proxy: {
            '/test': { // '/test'로 시작하는 요청을 Spring Boot 서버로 보내줌
                target: 'http://localhost:9000',
                changeOrigin: true // CORS 문제 해결
            },
        }
    },
    configureWebpack: {
        devtool: 'source-map'
    }
});