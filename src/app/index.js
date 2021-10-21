// app操作
const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const errorHandler = require('./error-handle')
const useRoutes = require('../router')
const cors = require('@koa/cors')

const app = new Koa()

//Koa 跨域插件
app.use(cors())
app.use(bodyParser())
useRoutes(app)
app.on('error', errorHandler)

module.exports = app
