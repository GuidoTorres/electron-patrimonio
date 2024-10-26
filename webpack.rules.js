// webpack.rules.js
module.exports = [
  // Soporte para módulos nativos de Node
  {
    test: /native_modules[/\\].+\.node$/,
    use: 'node-loader',
  },
  // Configuración para módulos en node_modules
  {
    test: /[/\\]node_modules[/\\].+\.(m?js|node)$/,
    parser: { amd: false },
    use: {
      loader: '@vercel/webpack-asset-relocator-loader',
      options: {
        outputAssetBase: 'native_modules',
      },
    },
  },
  // Configuración para archivos JavaScript y JSX con Babel
  {
    test: /\.jsx?$/,
    exclude: /node_modules/,
    use: [{
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-react'],
      },
    }],
  },
  // **Nueva regla para archivos de imagen**
  {
    test: /\.(png|jpe?g|gif|svg)$/i,
    type: 'asset/resource', // Usa Asset Modules de Webpack 5
  },
  // **Regla para fuentes (si es necesario)**
  {
    test: /\.(woff|woff2|eot|ttf|otf)$/i,
    type: 'asset/resource',
  },
];
