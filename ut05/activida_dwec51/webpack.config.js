const path = require('path');

module.exports = {
  entry: './src/index.js', // Punto de entrada
  output: {
    filename: 'bundle.js', // Archivo de salida
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  devServer: {
    static: './dist',
  },
  mode: 'development', // Modo de desarrollo
};
