module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  chainWebpack: config => {
      config.module.rules.delete('eslint');
  }
}
// sort the issue here