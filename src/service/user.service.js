const connection = require('../app/database')

class UserService {
  async create(user) {
    //获取传递的参数
    const { name, password } = user
    //sql语句
    const statement = 'INSERT INTO users (name,password) VALUES (?,?);'
    //执行数据库操作
    const reslut = await connection.execute(statement, [name, password])
    //返回数据
    return reslut[0]
  }
  async getUserByName(name) {
    const statement = `SELECT * FROM users WHERE name = ?;`

    const result = await connection.execute(statement, [name])

    return result[0]
  }

  async getNameById(userId) {
    const statement = `SELECT u.type,u.isflag,u.fix,u.createAt FROM users u WHERE id=?;`
    const result = await connection.execute(statement, [userId])
    return result[0][0]
  }
}

module.exports = new UserService()
