//koa 导入
const app = require('./app')

//数据库导入
require('./app/database')

//配置导入
const config = require('./app/config')

//服务器启动
app.listen(config.APP_PORT, () => {
  console.log(`服务器在：${config.APP_PORT} 端口启动成功～`)
})
