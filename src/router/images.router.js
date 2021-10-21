const Router = require('koa-router')

const imagesRouter = new Router({ prefix: '/images' })

const { getSwiper } = require('../controller/images.controller.js')

imagesRouter.post('/swipers', getSwiper)

module.exports = imagesRouter
