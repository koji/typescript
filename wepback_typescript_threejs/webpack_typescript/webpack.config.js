module.exports = {
    mode: 'development',
    entry: './src/main.ts',
    output: {
        path: `${__dirname}/dist`,
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './',
        open: true
    },
    module: {
            rules: [{
                test: /\.ts$/,
                use: 'ts-loader'
            }]
        },
    resolve: {
        extensions: ['.ts', '.js']
    }
};