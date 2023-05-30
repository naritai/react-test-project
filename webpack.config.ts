import path from 'path';
import HTMLWebpackPlugin from 'html-webpack-plugin';
import webpack from 'webpack';

// const pluginName = 'WebpackConsoler';

// class WebpackConsoler  {
//   apply(compiler) {
//     compiler.hooks.run.tap(pluginName, (compilation) => {
//       console.log('webpack is building things right now...')
//     })
//   }
// }

const config: webpack.Configuration = {
  mode: 'development',
  entry: {
    main: path.resolve(__dirname, 'src', 'index.ts')
  },
  output: {
    filename: '[name].[contenthash].bundle.js',
    path: path.resolve(__dirname, 'build'),
    clean: true
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: 'Reactappz',
      template: path.resolve(__dirname, 'public', 'index.html')
    }),
    new webpack.ProgressPlugin()
  ],
  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  }
}

export default config;