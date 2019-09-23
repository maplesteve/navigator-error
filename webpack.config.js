const webpack = require('webpack')
const path = require('path')
const slsw = require('serverless-webpack')

module.exports = {
    entry: slsw.lib.entries,
    target: 'node',
    mode: 'development',
    resolve: {
        extensions: [
            '.js',
            '.ts'
        ]
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                loader: 'ts-loader',
                options: {
                    transpileOnly: true
                }
            }
        ]
    },
    output: {
        libraryTarget: 'commonjs',
        path: path.join(__dirname, '.webpack'),
        filename: '[name].js'
    },
    node: {
        __dirname: false
    }
}
