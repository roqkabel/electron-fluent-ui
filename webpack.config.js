const path = require("path");

const distributionDirectoryPath = path.join(__dirname, "dist");

const mode = process.env.NODE_ENV === "production" ? "production" : "development";

console.log(`Mode: ${mode}`);

const entryPoints = {
    main: path.join(__dirname, "src", "main", "Main.ts"),
    preload: path.join(__dirname, "src", "shared", "Preload.ts"),
    renderer: path.join(__dirname, "src", "renderer", "Renderer.tsx"),
};

const outputFiles = {
    main: "Main.js",
    preload: "Preload.js",
    renderer: "Renderer.js",
};

const targets = {
    main: "electron-main",
    preload: "electron-preload",
    renderer: "electron-renderer",
};

const baseConfig = {
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: {
                    loader: "babel-loader",
                    options: {
                        configFile: path.join(__dirname, ".babelrc"),
                    },
                },
            },
        ],
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx"],
    },
    mode,
};

const mainConfig = {
    entry: entryPoints.main,
    output: {
        filename: outputFiles.main,
        path: distributionDirectoryPath,
    },
    target: targets.main,
};

const preloadConfig = {
    entry: entryPoints.preload,
    output: {
        filename: outputFiles.preload,
        path: distributionDirectoryPath,
    },
    target: targets.preload,
};

const rendererConfig = {
    entry: entryPoints.renderer,
    output: {
        filename: outputFiles.renderer,
        path: distributionDirectoryPath,
    },
    target: targets.renderer,
};

module.exports = [
    Object.assign({}, baseConfig, mainConfig),
    Object.assign({}, baseConfig, preloadConfig),
    Object.assign({}, baseConfig, rendererConfig),
];