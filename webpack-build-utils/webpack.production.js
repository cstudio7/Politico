const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const webpack = require('webpack');

const uglifyJS = new UglifyJsPlugin({
  test: /\.(js|jsx)$/,
  exclude: /node_modules/,
  cache: true,
  parallel: true
});

module.exports = {
  devtool: 'source-map',
  performance: {
    hints: false
  },
  optimization: {
    minimizer: [uglifyJS]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash].css',
      chunkFilename: 'css/[id].[hash].css'
    }),
    uglifyJS,
    new webpack.DefinePlugin({
      'process.env': {
        UPLOADPRESET: JSON.stringify(process.env.UPLOADPRESET),
        UPLOADCLOUDNAME: JSON.stringify(process.env.UPLOADCLOUDNAME),
        UPLOADFOLDER: JSON.stringify(process.env.UPLOADFOLDER)
      }
    })
  ]
};
