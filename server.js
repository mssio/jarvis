// modules =================================================
var express = require('express')     // framework d'appli
var app = express()
var bodyParser = require('body-parser') // BodyParser pour POST
var http = require('http').Server(app)      // préparer le serveur web
var path = require('path')

// configuration ===========================================

app.use(express.static(path.join(__dirname, '/public')))

// parsing
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing url encoded

// view engine ejs
app.set('view engine', 'ejs')

// routes
require('./app/routes/routes')(app)

// port for Heroku
app.set('port', (process.env.PORT || 3000))

// START ===================================================
http.listen(app.get('port'), function () {
  console.log('listening on port ' + app.get('port'))
})
