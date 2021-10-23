const path = require('path'); 

module.exports = {
    entry: ['babel-polyfill', './src/index.js'],
    output: {
        path: path.resolve(__dirname, 'public/scripts'), 
        filename: 'bundle.js' 
    },
    module:{
        rules: [{ //rules to tell webpack to use babel
            rules: [{
                test: /\.js$/,  //babel should process all files that have .js extension
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env']
                    }
                }
            }]
        }]
    },
    devServer:{
        contentBase: path.resolve(__dirname, 'public'), //telling webpack-dev-server where the absolute path reside
        publicPath: '/scripts/'    //telling webpack-dev-server where the bundle.js reside
    },
    devtool: 'source-map'                                                   
}
