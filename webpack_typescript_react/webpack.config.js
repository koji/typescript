
const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: "development",
    entry: "./src/main.tsx",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "bundle.js",
        chunkFilename: '[id].js',
        publicPath: ''
    },
    devtool: "inline-source-map",
    devServer: {
        contentBase: "./",
        open: true
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader"
            },
            // {
            //     test: /\.(gif|png|svg|jpg)$/,
            //     loader: "url-loader"
            // },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: "[name]__[local]___[hash:base64:5]",
                            },
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins: () => [
                                autoprefixer({})
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.(svg|png|jpe?g|gif)$/,
                loader: 'url-loader?limit=10000&name=img/[name].[ext]'
            }

        ]
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + '/index.html',
            filename: 'index.html',
            inject: 'body'
        })
    ]
};
