const path = require('path')
const webpack = require('webpack')
const express = require('express')
const config = require('./webpack.config')
const favicon = require('serve-favicon')

const app = express()
const compiler = webpack(config)

app.use(favicon(path.join(__dirname, '.', 'favicon.ico')))

app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath
}))

app.use(require('webpack-hot-middleware')(compiler))

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.listen(3000, function (err) {
  if (err) {
    return console.error(err) // eslint-disable-line
  }

  console.log('Listening at http://localhost:3000/') // eslint-disable-line
})
