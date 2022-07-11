// const { defineConfig } = require('@vue/cli-service')
// module.exports = defineConfig({
//   transpileDependencies: true,

//   pluginOptions: {
//     vuetify: {
// 			// https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
// 		}
//   },
//     publicPath: process.env.NODE_ENV === 'production'
//     ? '/' + process.env.CI_PROJECT_NAME + '/vue3_movie'
//     : '/'
// })

module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/vue3_movie/" : "/",
};
