import path from "path";
import { buildLoaders } from "./buildLoaders";
import { buildPlugins } from "./buildPlugins";
import { buildResolvers } from "./buildResolvers";
import { BuildOptions } from "./types/config";
import webpack from 'webpack';

export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
  const { mode, paths } = options;

  return {
    mode,
    entry: {
      main: paths.entry
    }, 
    output: {
      filename: '[name].[contenthash].bundle.js',
      path: paths.build,
      clean: true
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders()
    },
    resolve: buildResolvers(),
  }
}