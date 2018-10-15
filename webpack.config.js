const path = require('path');
const webpack = require('webpack');
const precss = require('precss');
const autoprefixer = require('autoprefixer');
const BundleTracker = require('webpack-bundle-tracker');

module.exports = {
    mode: 'development',
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './src/index.tsx'
    ],

    output: {
        path: __dirname + '/dist',
        filename: '[name]-[hash].js',
        publicPath: 'http://localhost:3000/dist/bundles/', // Tell django to use this URL to load packages and not use STATIC_URL + bundle_name
    },

    devtool: 'source-map',
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.json']
    },

    module: {
        rules: [
            // All files with a '.ts' or '.tsx' extension will be handled by 'awesome-typescript-loader'.
            {
                test: /\.tsx?$/,
                loaders: ['awesome-typescript-loader']
            },
            // Parse .scss files with node-sass => auto-prefix styles => convert to CSS
            {
                test: /\.scss?$/,
                use: [
                    'style-loader',
                    'css-loader',
                    { loader: 'postcss-loader', options: {
                        ident: 'postcss',
                        plugins: (loader) => [
                            precss,
                            autoprefixer
                        ]
                    } },
                    'sass-loader'
                ]
            },

            // All output '.js' files will have any sourcemaps re-processed by 'source-map-loader'.
            { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(), // don't reload if there is an error
        new BundleTracker({filename: './webpack-stats.json'}),
    ],

    // // When importing a module whose path matches one of the following, just
    // // assume a corresponding global variable exists and use that instead.
    // // This is important because it allows us to avoid bundling all of our
    // // dependencies, which allows browsers to cache those libraries between builds.
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM'
    },
};
