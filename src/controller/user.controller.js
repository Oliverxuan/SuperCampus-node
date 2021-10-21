const service = require('../service/user.service')

class UserController {
  //用户注册
  async create(ctx, next) {
    //获取参数
    const user = ctx.request.body

    //创建用户信息
    const result = await service.create(user)

    //返回数据
    console.log(user.name + '创建用户成功')
    ctx.body = '用户创建成功'
  }
}

module.exports = new UserController()
