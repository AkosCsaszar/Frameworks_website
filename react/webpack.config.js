const { merge } = require('webpack-merge')
const singleSpaDefaults = require('webpack-config-single-spa-react')

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: 'single-spa-microfrontend-angular-vue-react',
    projectName: 'react',
    webpackConfigEnv,
    argv,
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: [['@babel/preset-env', { targets: 'defaults' }]],
            },
          },
        },
      ],
    },
  })
  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
  })
}
