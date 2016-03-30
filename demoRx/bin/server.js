import webpack from 'webpack'
import WebpackDevServer from 'webpack-dev-server'
import config from '../webpack.config'

// // Start watching and bundling tests here
// var tests = require('../webpack.test.config'),
//   testsCompiler = webpack(tests);
//
// testsCompiler.watch({}, function (err) {
//   if (err) console.log(err);
//   //console.log('Test file bundled');
// });

// Primary app
new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: {colors: true}
})
.listen(3000, 'localhost', function (err) {
  if (err) {
    console.log(err)
  }

  console.log('Listening at localhost:3000')
})
