var webpack = {
    entry: './src/app.js',
    output: {
        filename: 'bundle.js',
        path: './dist/'
    },
    module: {
        rules: [{
            test: /\.js/,
            loader: 'babel-loader',
        }, {
            test: /\.scss/,
            loader: 'sass-loader'
        }]
    }
}
module.exports = webpack
