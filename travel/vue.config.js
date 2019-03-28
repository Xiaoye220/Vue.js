
module.exports = {
    baseUrl:"/",//根目录
    outputDir:"dist",//构建输入目录
    assetsDir:"assets",//静态资源目录（js,css,img,fonts）
    lintOnSave: false,
    chainWebpack: config => {
        config.resolve.alias
            .set('@styles', '@/assets/styles')
            .set('@common', '@/components/common')
    },
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:8080',
                changeOrigin: true,
                pathRewrite: {
                    '^/api' : '/mock'
                }
            }
        }
    }
};
