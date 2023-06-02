import path from 'path';
import type webpack from 'webpack';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { type BuildEnv, type BuildPaths } from './config/build/types/config';
import { type WebpackConfiguration } from 'webpack-dev-server';

export default (env: BuildEnv): WebpackConfiguration => {
  const { mode = 'development', port = 3000 } = env;

  const paths: BuildPaths = {
    src: path.resolve(__dirname, 'src'),
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html')
  };

  const isDev = mode === 'development';
  const config: webpack.Configuration = buildWebpackConfig({
    mode,
    paths,
    isDev,
    port
  });

  return config;
};
