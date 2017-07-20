var path = require('path');

module.exports = {
    entry:"./src/js/index.js",
    output:{
        filename: "bundle.js",
        path:path.resolve(__dirname,'./dist'),
        publicPath: "/"
    },
    module: {
        loaders: [
            { test: /\.scss$/, loader: 'style-loader!css-loader!sass-loader' },
        ]
    }
};