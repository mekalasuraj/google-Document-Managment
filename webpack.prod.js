import webpack from 'webpack';
import path from 'path';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import OptimizeCSSAssetsPlugin from 'optimize-css-assets-webpack-plugin';
import UglifyJsPlugin from 'uglifyjs-webpack-plugin';

const GLOBALS = {
    'process.env.NODE_ENV': JSON.stringify('production')
};

export default {
    mode: 'production',
    devtool: 'source-map',
    entry: {
        'homeApp': './src/client/js/homeApp.js',
        'folderInner': './src/client/js/folderInner.js'
    },
    target: 'web',
    output: {
        path: __dirname + '/build/dist',
        publicPath: '/',
        filename: '[name].js'
    },
    devServer: {
        contentBase: './dist'
    },
    optimization: {
        minimize: true,
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true,
                uglifyOptions: { output: { comments: false } }
            }),
            new OptimizeCSSAssetsPlugin({
                cssProcessorOptions: { discardComments: { removeAll: true } },
                canPrint: true
            })
        ]
    },
    plugins: [
        new webpack.DefinePlugin(GLOBALS),
        new MiniCssExtractPlugin({ filename: '[name].css' })
    ],
    module: {
        rules: [
            { test: /\.js$/, include: path.resolve(__dirname, 'src/client'), use: ['babel-loader'] },
            { 
                test: /(\.css)$/, 
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ] 
            }
        ]
    }
};
