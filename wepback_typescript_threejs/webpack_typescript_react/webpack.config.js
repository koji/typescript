module.exports = {
    mode: "development",
    entry: "./src/main.tsx",
    output: {
        path: `${__dirname}/dist`,
        filename: "bundle.js"
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
            {
                test: /\.(gif|png|svg|jpg)$/,
                loader: "url-loader"
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".json"]
    }
};
