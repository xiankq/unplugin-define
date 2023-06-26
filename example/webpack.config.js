import path from 'node:path'
import { fileURLToPath } from 'node:url'
import HtmlWebpackPlugin from 'html-webpack-plugin'

import Plugin from './../dist/webpack.js'
import options from './options.js'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)
/**
 * @type {import('webpack').Configuration}
 */
export default {
  entry: './src/main.ts',
  resolve: {
    extensions: ['.ts', '.js', '.tsx', '.jsx'],
  },
  output: {
    path: path.resolve(dirname, './dist/webpack/'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|gif|jpg|jpeg|svg|xml|json)$/,
        use: ['url-loader'],
      },
      {
        test: /\.(ts|tsx)$/,
        use: ['ts-loader'],
      },
    ],
  },
  devServer: {
    port: 8200,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './entry/webpack.html',
    }),
    Plugin(options),
  ],
}
