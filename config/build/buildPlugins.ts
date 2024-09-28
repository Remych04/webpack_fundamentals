import HtmlWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { Configuration, DefinePlugin, ProgressPlugin } from "webpack";
import { BuildOptions } from "./types/types";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import { platform } from "os";

export function buildPlugins(options: BuildOptions): Configuration['plugins'] {
    const isDev = options.mode === 'development';
    const isProd = options.mode === 'production';

    const plugins: Configuration['plugins'] = [
        new HtmlWebpackPlugin(
            { template: options.paths.html }
        ),
        new DefinePlugin({
            __PLATFORM__: JSON.stringify(options.platform)
        })
    ];

    if (isDev) {
        plugins.push(
            new ProgressPlugin()
        )
    }

    if (isProd) {
        plugins.push(
            new MiniCssExtractPlugin({
                filename: 'css/[name].[contenthash:8].css',
                chunkFilename: 'css/[name].[contenthash:8].css',
            })
        )
    }

    if(options.analyzer){
        plugins.push(new BundleAnalyzerPlugin())
    }


    return plugins;
}