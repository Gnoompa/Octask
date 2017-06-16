var fs = require('fs')
var express = require('express')
var app = express()

app.use('/dist', express.static(`${__dirname}/dist`))

app.get('/', function (req, res) {
	res.sendFile(`${__dirname}/index.html`)
})

app.listen(process.env.PORT || 5051, function () { console.log('Server has been started!') })