// export loaders

export default [
    {
        test: /\.scss$/,
        include: /src/,
        loaders: [
            'style',
            'css',
            'autoprefixer?browsers=last 3 versions',
            'sass?outputStyle=expanded'
        ]
    },
    {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
            'url?limit=8192',
            'img'
        ]
    },
    {
        test: /\.js[x]?$/,
        exclude: /(node_modules|bower_components)/,
        loaders: [
            'react-hot',
            'babel?presets[]=stage-0,presets[]=react,presets[]=es2015'
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
