var webpack = require('webpack');
module.exports = {
    entry: [
        //'webpack/hot/only-dev-server',
        "./src/index.js"
    ],
    output: {
        path: './build',
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.js?$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
            { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'}//,
            //{ test: /\.css$/, loader: "style!css" },
            //{test: /\.less/,loader: 'style-loader!css-loader!less-loader'}
        ]
    },
    resolve:{
        extensions:['','.js','.json','.jsx']
    },
    plugins: [
        new webpack.NoErrorsPlugin()
    ]
};