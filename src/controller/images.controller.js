class ImagesController {
  async getSwiper(ctx, next) {
    console.log('swipers成功获取！')
    ctx.body = 'swipers!'
  }
}

module.exports = new ImagesController()
