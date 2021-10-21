const errorType = require('../constants/error-types')
const service = require('../service/user.service')
const md5password = require('../utils/password-handle')

//验证用户输入的正确性
const verifyUser = async (ctx, next) => {
  //获取用户名，密码
  const { name, password } = ctx.request.body

  console.log('用户' + name + '正在尝试后端服务')

  //判断不能为空
  if (!name || !password) {
    const error = new Error(errorType.NAME_OR_PASSWORD_IS_REQUIRED)
    return ctx.app.emit('error', error, ctx)
  }

  //判断本次注册的用户名是否被注册
  const result = await service.getUserByName(name)

  if (result.length) {
    const error = new Error(errorType.USER_ALREADY_EXISTS)
    return ctx.app.emit('error', error, ctx)
  }

  await next()
}

//md5加密密码
const handlePassword = async (ctx, next) => {
  const { password } = ctx.request.body
  ctx.request.body.password = md5password(password)
  await next()
}

module.exports = {
  verifyUser,
  handlePassword,
}
