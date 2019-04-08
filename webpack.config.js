const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
,
module: {
  rules: [
  {
    test: /\.js$/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env', '@babel/preset-react']
      }
    }
  },
  {
    test:/\.css$/,
    use:[
      "style-loader",
      "css-loader"
    ]
  }
  ]
},
plugins: [
  new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html'
  })
]
};