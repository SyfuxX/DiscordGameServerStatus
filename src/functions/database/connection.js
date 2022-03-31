const mysql = require('mysql2');
const config = require('../../config.json');

module.exports = {
  dbConnect: async function() {
    return mysql.createPool({
      host: config.database.hostname,
      port: config.database.port,
      user: config.database.user,
      database: config.database.database,
      password: config.database.password,
    });
  }
}
