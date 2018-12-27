// entry -> output

const path = require('path');

module.exports = (env) => {
    const isProduction = env === 'production';

     return {
        entry: "./src/app.js",
        output: {
            filename: "bundle.js",
            path: path.resolve(__dirname, 'public')        
        },
        module: {
            rules: [
                { test: /\.js$/, use: ['babel-loader'] , exclude: /node_modules/ },
                { test: /\.s?css$/, use: ['style-loader', 'css-loader', 'sass-loader'] }
            ]
        },
        devtool: isProduction ? 'source-map' : 'cheap-module-eval-source-map',
        devServer: {
            contentBase: path.resolve(__dirname, 'public'),
            historyApiFallback: true
        }
    }
};