/**
 * @introduction  Webpack React build
 * @authors       Tongao (email:tongao@yhd.cn)
 * @date          2016-05-28
 * @update        2016-05-28
 */

'use strict';

import path from 'path';
import webpack from 'webpack';
import loaders from './webpack.loaders';


module.exports = {
    entry: ['./src/js/app.js'],
    output: {
      path: path.join(__dirname, 'build'),
      filename: 'bundle.js'
    },
    devtool: 'source-map',
    module: {
        preLoaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'source-map'
            }
        ],
        loaders: loaders,
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          NODE_ENV: JSON.stringify('production'),
        }
      })
    ]
};
