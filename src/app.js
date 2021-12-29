const { mongoose } = require('./config')
const { vars } = require('./config')

const express = require('express')
const cors = require('cors')
const routes = require('../src/routes')
// Create an instance
const app = new express()
// newer way of parsing json request body
app.use(express.json())

// use the API anywhere outside our localhost/computer
app.use(cors())

app.get('/ping', (req, res) => {
  res.sendStatus(200)
})

// ROUTES
app.use('/users', routes.userRoutes)
app.use('/login', routes.loginRoutes)
app.use('/signup', routes.signup)

// any other request
app.all('*', (req, res) => {
  res.sendStatus(404)
})

// connect with database
mongoose.connect()

// START THE SERVER, listen to specific port
app.listen(vars.PORT, () => console.log(`Server started on port ${vars.PORT})`))
