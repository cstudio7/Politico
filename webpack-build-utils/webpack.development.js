const ErrorOverlayPlugin = require('error-overlay-webpack-plugin');

module.exports = {
  devServer: {
    historyApiFallback: true,
    port: 9000,
    publicPath: '/',
    proxy: {
      '/api/**': {
        target: 'https://ngpolitico.herokuapp.com/',
        secure: false,
        changeOrigin: true,
      }
    }
  },
  plugins: [new ErrorOverlayPlugin()]
};
