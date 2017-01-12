/**
 * Created by jinhyungkim on 2017. 1. 12..
 */
module.exports = {
    entry: ['./src/index.js'],
    output: {
        path: __dirname + '/public',
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['react', 'es2015', 'stage-2']
            }
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    devServer: {
        inline: true,
        historyApiFallback: true,
        port: 3000,
        contentBase: __dirname + '/public'
    }
};