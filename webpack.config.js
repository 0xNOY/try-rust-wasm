const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index.ts",
    output: {
        filename: "bundle.js",
        path: path.join(__dirname, "dist")
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./src/index.html",
        })
    ],
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: "ts-loader"
            },
            {
                test: /\.s[ac]ss$/,
                use: [
                    "style-loader",
                    {
                        loader: "css-loader",
                        options: {
                            url: true,
                            importLoaders: 2,
                            sourceMap: false
                        }
                    },
                    {
                        loader: "sass-loader",
                        options: {
                            sourceMap: false
                        }
                    }
                ]
            },
            {
                test: /\.(gif|png|jpg|eot|wof|woff|woff2|ttf|svg)$/,
                loader: "url-loader"
            },
            {
                test: /\.html$/,
                use: "html-loader"
            },
        ],
    },
    resolve: {
        extensions: [
            ".ts", ".js"
        ]
    },
    optimization: {
        minimizer: [
            new TerserPlugin({
                terserOptions: {
                    compress: { drop_console: true }
                }
            })
        ]
    }
};