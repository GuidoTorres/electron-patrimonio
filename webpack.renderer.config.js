// webpack.renderer.config.js
const rules = require('./webpack.rules');
const path = require('path');

rules.push({
  test: /\.css$/,
  use: ['style-loader', 'css-loader'],
});

module.exports = {
  entry: './src/renderer.js', // Asegúrate de que este es tu archivo de entrada correcto
  module: {
    rules,
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'], // Añade otras extensiones si las usas
  },
  output: {
    path: path.resolve(__dirname, '.webpack/renderer'), // Ajusta el path si es necesario
    filename: 'renderer.js',
  },
  target: 'electron-renderer', // Especifica que es para el renderizador de Electron
};
