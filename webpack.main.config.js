// webpack.main.config.js
const rules = require('./webpack.rules');
const path = require('path');

module.exports = {
  entry: './src/main.js', // Asegúrate de que este es tu archivo de entrada principal
  module: {
    rules,
  },
  output: {
    path: path.resolve(__dirname, '.webpack/main'), // Ajusta el path si es necesario
    filename: 'main.js',
  },
  resolve: {
    extensions: ['.js', '.json'],
  },
  target: 'electron-main', // Especifica que es para el proceso principal de Electron
};
