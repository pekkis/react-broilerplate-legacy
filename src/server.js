var port = 8888;

var path = require('path');
var url = require('url');
var express = require('express');
var webpack = require('webpack');
var config = require('../webpack.config.dev');
var proxy = require('express-http-proxy');

var app = express();
var compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('/api/tussi', function(req, res, next) {

    res.send([
        'tussi',
        'tussi2',
        'tussi3',
        'tussi4',
    ]);

});

/*
app.use('/api', proxy('http://localhost:8765', {
  forwardPath: function(req, res) {
    return '/api' + require('url').parse(req.url).path;
  }
}));
*/

app.get('*', function(req, res, next) {
  res.sendFile(path.join(__dirname, '/../web/index.dev.html'));
});


app.listen(port, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:' + port);
});


