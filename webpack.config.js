const webpack = require('webpack');

module.exports = {
    context: __dirname,
    entry: ["./src/js/main.js"],
    output: {
        path: __dirname + "./dist",
        filename: "bundle.js"
    },
    watch: true,
    devtool: 'source-map',
    module: {

        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                enforce: "pre",
                use: {
                    loader: "eslint-loader",
                }

            },
            {
                test: /\.css$/,
                use: [
                    {loader: 'style-loader'},
                    {
                        loader: 'css-loader',
                        options: {
                            modules: false,
                            limit: 10000,
                            importLoaders: 1
                        },
                    },
                ]

            },
            {
                test: /\.sass$/,
                use: [
                    {loader: 'style-loader'},
                    {
                        loader: 'css-loader',
                        options: {
                            modules: false,
                            limit: 10000,
                            importLoaders: 1
                        }
                    },
                    {loader: 'postcss-loader'},
                    {loader: 'sass-loader'}
                ]
            },
            {
                test: /\.js/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015', 'react']
                    }
                }
            }

        ]

    },
    resolve: {
        extensions: [' ', '.js', '.es6'],
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': {NODE_ENV: JSON.stringify('development')}
        })
    ],
    devServer: {
        inline: false,
        port: 8081,
        contentBase: "./dist"

    }
};