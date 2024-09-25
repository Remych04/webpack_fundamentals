import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin'
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import type { Configuration } from "webpack";

type Mode = 'production' | 'development'

interface EnvVariables {
    mode: Mode,
    port: number
}

export default (env: EnvVariables) => {
    const isDev = env.mode === 'development';
    const devServer: DevServerConfiguration = {};

    const config: Configuration = {
        mode: env.mode ?? 'development',
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    use: 'ts-loader',
                    exclude: /node_modules/,
                },
            ],
        },
        resolve: {
            extensions: ['.tsx', '.ts', '.js'],
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].[contenthash].js',
            clean: true
        },
        plugins: [
            new HtmlWebpackPlugin(
                { template: path.resolve(__dirname, 'public', 'index.html') }
            ),
            isDev && new webpack.ProgressPlugin(),
        ].filter(Boolean),
        devServer: isDev ? {
            port: env.port ?? 6783,
            open: true,
        } : undefined,
        devtool: isDev && 'inline-source-map',
    }

    return config;
};
