require('dotenv').config()

// Constants
const express = require('express')
const env = process.env.NODE_ENV || 'development'
const PORT = process.env.PORT || 8080
const HOST = '0.0.0.0'
const TIME_OF_DEATH = '2019/01/14'

// App
const app = express()
const server = require('http').Server(app)
const io = require('socket.io')(server)

if (env === 'development') {
  const webpackConfig = require('./config/webpack.config')(env)
  const compiler = require('webpack')(webpackConfig)

  app.use(require('webpack-dev-middleware')(compiler, {
    publicPath: '/',
  }))
  app.use(require('webpack-hot-middleware')(compiler, {
    log: console.log, path: '/__webpack_hmr', heartbeat: 10 * 1000
  }))
  // app.use(require('webpack-hot-middleware')(compiler))
} else {
  app.use(express.static('./build'))
}

app.use(express.static('./public'))

const getDistance = () => {
  // Set the date we're counting from
  const countFromDate = new Date(TIME_OF_DEATH).getTime()

  // Get todays date and time
  const now = new Date().getTime()

  // Find the distance between now and the date from
  const distance = now - countFromDate

  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24))
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((distance % (1000 * 60)) / 1000)

  return [days, hours, minutes, seconds]
}

setInterval(()=>{
  io.emit('getDistance', getDistance())
}, 1000)

server.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)