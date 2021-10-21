const Router = require('koa-router')

const { login, success } = require('../controller/auth.conreoller')
const { verifyLogin, verifyAuth } = require('../middleware/auth.middleware')

const authRouter = new Router({ prefix: '/auth' })

//用户登陆验证 ，验证通过后 颁发Token
authRouter.post('/login', verifyLogin, login)

authRouter.post('/test', verifyAuth, success)

module.exports = authRouter
