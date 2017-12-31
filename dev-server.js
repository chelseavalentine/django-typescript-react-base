var webpack = require('webpack')
var WebpackDevServer = require('webpack-dev-server')
var config = require('./webpack.config')

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  inline: true,
  historyApiFallback: true,
  headers: { "Access-Control-Allow-Origin": "*" },
  watchOptions: {
    aggregateTimeout: 300,
    poll: 1000
  }
}).listen(3000, '0.0.0.0', function (err, result) {
  if (err) {
    console.log(err)
  }

  console.log('Listening at 0.0.0.0:3000')
});
