const path = require("path");
const webpack = require("webpack");
const uglifyPlugin = require("uglifyjs-webpack-plugin");

const environment = process.env.NODE_ENV || "prod";
const isProd = environment === "prod";

const vendors = [
    "rbush"
];

const plugins = [
    new uglifyPlugin({
        parallel: true,
        cache: true,
        sourceMap: !isProd
    })
];

const webpackConfig = {
    mode: "none",
    entry: "./canvasIconLayer.es6",
    devtool: isProd ? "(none)" : "source-map",
    output: {
        path: path.join(__dirname, "dist"),
        filename: "[name].js",
    },
    resolve: {
        extensions: [".js"]
    },
    module: {
        rules: [
            {
                test: /rbush.js/,
                use: "script-loader"
            }
        ]
    },
    plugins: plugins,
};

module.exports = webpackConfig;
