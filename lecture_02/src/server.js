import express from 'express';
import path from 'path';
import open from 'open';

const webpackDevMiddleware = require('webpack-dev-middleware');

import webpack from 'webpack';
import config from '../webpack.config.js';

const port = 8000;
const app = express();
const compiler = webpack(config);

app.use(
  webpackDevMiddleware(compiler, {
    publicPath: config.output.publicPath,
  })
);

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, './src/index.html')); // this is .html file and path we defined in Step 3
});

app.listen(port, function (err) {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});