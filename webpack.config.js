const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');


module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: (src) => /\.css$/.test(src) && !src.endsWith('main.scss'),
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[folder]_[local]_[hash:base64:5]',
              },
            },
          },
        ],
      },
      {
        test: (src) => src.endsWith('global.scss'),
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',

        ],
        exclude: /\.module\.css$/,
      },
    ],
  },
  resolve: { extensions: ['*', '.js', '.jsx'] },
  plugins: [
    new MiniCssExtractPlugin(),
    new HtmlWebPackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
  ],
};
