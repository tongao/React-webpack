// export loaders

export default [
    {
      test: /\.(scss)$/,
      include: /(src|node_modules)/,
      loaders: [
          'style',
          'css',
          'autoprefixer?browsers=last 3 versions',
          'sass?outputStyle=expanded'
      ]
    },
    {
      test: /\.css$/,
      include: /(src|node_modules)/,
      loaders: [
          'style',
          'css',
          'autoprefixer?browsers=last 3 versions'
      ]
    },
    {
      test: /\.(jpe?g|png|gif|svg)$/i,
      loaders: [
          'url?limit=8192',
          'file'
      ]
    },
    {
      test: /\.(js|jsx)?$/,
      exclude: /(node_modules|bower_components)/,
      loaders: [
          'react-hot',
          'babel?presets[]=es2015,presets[]=stage-0,presets[]=react'
      ]
    },
    {
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      loader: "file"
    },
    {
      test: /\.(woff|woff2)$/,
      loader: "url?prefix=font/&limit=5000"
    },
    {
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      loader: "url?limit=10000&mimetype=application/octet-stream"
    },
    {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      loader: "url?limit=10000&mimetype=image/svg+xml"
    },
];
