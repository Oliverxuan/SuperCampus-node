// 路由相关的js 注册接口适用

const Router = require('koa-router')

const { create } = require('../controller/user.controller')

const { verifyUser, handlePassword } = require('../middleware/user.middleware')

//入口
const userRouter = new Router({ prefix: '/users' })

//用户注册接口
userRouter.post('/register', verifyUser, handlePassword, create)

module.exports = userRouter
