const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index:'./src/index.js',
        funcs: './src/funcs.js'
    },
    plugins: [
        new HtmlWebpackPlugin({
          title: 'Output Management',
          template: './dist/index.html',
        }),
      ],
    output: {
        filename: '[name].main.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
};