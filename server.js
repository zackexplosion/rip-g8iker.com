require('dotenv').config()

// Constants
const express = require('express')
const env = process.env.NODE_ENV || 'development'
const PORT = process.env.PORT || 8080
const HOST = '0.0.0.0'

// App
const app = express()

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


// app.get('/', (req, res) => {
//   res.send('Hello world\n')
// })

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)