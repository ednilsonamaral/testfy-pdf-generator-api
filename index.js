const express = require('express')
const env = require('dotenv').config()
const bodyParser = require('body-parser')
const app = express()

app.use(bodyParser.json({ limit: '100mb' }))
app.use(bodyParser.urlencoded({ limit: '100mb', extended: false }))

// CORS
app.use((req, res, next) => {
	res.header("Access-Control-Allow-Origin", "*")
	res.header("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE")
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization")
  next()
})

// Routes
require('./src/routes')(app)

let port = process.env.APP_PORT || 4000

app.listen(port, () => {
	console.log('Servidor rodando em http://localhost:' + port)
})

module.exports = app
