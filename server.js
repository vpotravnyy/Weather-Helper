var fs = require('fs')
var webpack = require('webpack')
var webpackDevMiddleware = require('webpack-dev-middleware')
var webpackHotMiddleware = require('webpack-hot-middleware')
var config = require('./webpack.config')
var secret = require('./secret.json')
var request = require('request')
var Express = require('express')
var app = new Express()
var port = 3127

var compiler = webpack(config)
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }))
app.use(webpackHotMiddleware(compiler))

var corsWhiteList = ["http://localhost:3127/"]
app.use('/weather', function(req, res){
  if( isTrusted(req, res) ){
    var apiServerHost = "https://api.darksky.net/forecast/" + secret.darksky
    var url = apiServerHost + req.url
    req.pipe( request(url) ).pipe( res )
  }
})
app.use('/coords', function(req, res){
  if( isTrusted(req, res) ){
    var apiServerHost = "https://www.googleapis.com/geolocation/v1/geolocate?key=" + secret.google
    var url = apiServerHost
    req.pipe( request(url) ).pipe( res )
  }
})
app.use('/google', function(req, res){
  if( isTrusted(req, res) ){
    var apiServerHost = "https://maps.googleapis.com/maps/api/js?key=" + secret.google + "&libraries=places"
    var url = apiServerHost
    req.pipe( request(url) ).pipe( res )
  }
})

app.use(Express.static(__dirname + '/dist'))

// Catch all requests and forward them to index.html
// app.use(function (req, res) {
//   var file,
//       type
//   switch (req.url) {
//     case "/main.css":
//       file = __dirname + '/dist/main.css'
//       type = 'text/css'
//       break;
//     default:
//       file = __dirname + '/dist/index.html'
//       type = 'text/html'
//       break;
//   }
//   fs.readFile(file, (err, indexData) => {
//     if (err) throw err
//     res.set('Content-Type', type)
//     res.send(indexData)
//   })
// })

app.listen(port, function (error) {
  if (error) {
    console.error(error)
  } else {
    console.info('==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port)
  }
})

function isTrusted(req, res){
  if(corsWhiteList.indexOf( req.header('Referer') ) === -1) {
    res.json({
      error: true,
      msg: 'Cross origin requests are not allowed.'
    })
    return false
  }
  else return true
}
