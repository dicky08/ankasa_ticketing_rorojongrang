const mysql = require('mysql2')

const { DB_HOST,DB_USERNAME,DB_PASSWORD,DATABASE,DATE,JWT_PRIVATE,JWT_REFRESH } = require('../helper/env')

const connection = mysql.createConnection({
  host: DB_HOST,
  user: DB_USERNAME,
  password: DB_PASSWORD,
  database: DATABASE,
  dateStrings: DATE
})

module.exports = connection