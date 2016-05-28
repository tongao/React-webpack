/**
 * @introduction  Webpack React Configuration
 * @authors       Tongao (email:tongao@yhd.cn)
 * @date          2016-05-28
 * @update        2016-05-28
 */

'use strict';

import path from 'path';
import webpack from 'webpack';
import loaders from './webpack.loaders';


module.exports = {
    entry: getEntrySources(['./src/js/app.js']),
    output: {
        publicPath: 'http://localhost:8080/',
        filename: 'build/bundle.js'
    },
    devtool: 'source-map',
    module: {
        preLoaders: [
            {
                test: /\.js[x]?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'source-map'
            }
        ],
        loaders: loaders,
    }
};

function getEntrySources(sources) {
    if (process.env.NODE_ENV !== 'production') {
        sources.push('webpack-dev-server/client?http://localhost:8080');
        sources.push('webpack/hot/only-dev-server');
    }
    return sources;
}
