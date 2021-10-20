class UserController {
  async create(ctx, next) {
    console.log('success!')
    ctx.body = 'success!'
  }
}

module.exports = new UserController()
