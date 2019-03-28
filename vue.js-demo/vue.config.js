
module.exports = {
  lintOnSave: false,
    chainWebpack: config => {
        config.resolve.alias
            .set('views', 'src/views')
            .set('assets', 'src/assets')
    }
};
