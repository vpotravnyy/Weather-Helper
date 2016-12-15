var fs = require('fs')
var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config')

var Express = require('express')
var app = new Express()
var port = 3000

var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

// Catch all requests and forward them to index.html
app.use(function (req, res) {
  var file,
      type
  switch (req.url) {
    case "/main.css":
      file = __dirname + '/dist/main.css'
      type = 'text/css'
      break;
    default:
      file = __dirname + '/dist/index.html'
      type = 'text/html'
      break;
  }
  fs.readFile(file, (err, indexData) => {
    if (err) throw err
    res.set('Content-Type', type)
    res.send(indexData)
  })
})

app.listen(port, function (error) {
  if (error) {
    console.error(error)
  } else {
    console.info('==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port)
  }
})
