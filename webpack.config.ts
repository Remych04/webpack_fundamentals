import path from "path"
import type { Configuration } from "webpack";
import { buildWebpack } from "./config/build/buildWebpack";
import { BuildMode, BuildPaths } from "./config/build/types/types";

interface EnvVariables {
    mode: BuildMode,
    port: number,
    analyzer?: boolean
}

export default (env: EnvVariables) => {
    const paths: BuildPaths = {
        output: path.resolve(__dirname, 'dist'),
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
    }


    const config: Configuration = buildWebpack({
        port: env.port ?? 6783,
        mode: env.mode ?? 'development',
        paths,
        analyzer: env.analyzer
    })

    return config;
};
