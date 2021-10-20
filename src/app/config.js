const dotenv = require('dotenv')
const fs = require('fs')

dotenv.config()

// const PRIVATE_KEY = fs.readFileSync('src/app/keys/private.key')
// const PUBLIC_KEY = fs.readFileSync('src/app/keys/public.key')

module.exports = {
  APP_PORT,
  MYSQL_HOST,
  MYSQL_PORT,
  MYSQL_DATABASE,
  MYSQL_ROOT,
  MYSQL_PASSWORD,
} = process.env

// module.exports.PRIVATE_KEY = PRIVATE_KEY
// module.exports.PUBLIC_KEY = PUBLIC_KEY
