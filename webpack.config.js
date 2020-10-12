const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const WasmPackPlugin = require("@wasm-tool/wasm-pack-plugin");

module.exports = {
    mode: "development",
    entry: "./src/index.ts",
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new WasmPackPlugin({
            outDir: path.resolve(__dirname, "rust-lib", "pkg"),
            crateDirectory: path.resolve(__dirname, "rust-lib")
        }),
        new HtmlWebpackPlugin({
            template: "./src/index.html"
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
            ".ts", ".tsx", ".js", ".jsx", ".wasm"
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
    },
    devServer: {
        contentBase: path.resolve(__dirname, "dist")
    }
};