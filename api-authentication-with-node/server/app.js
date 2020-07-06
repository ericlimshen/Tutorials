const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/APIAuthentication', {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true
})
//mongoose.connect('mongodb://localhost/APIAuthentication')
const app = express()

// Middlewares

app.use(morgan('dev'))
app.use(bodyParser.json())

// Routes all routes start from /users
//app.use('/users', require('./routes/users'))
app.use('/users', require('./routes/users'))
//Start the server
const port = process.env.PORT || 3000
app.listen(port)
console.log(`Server listening ${port}`)
