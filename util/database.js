const mysql = require('mysql2');

const pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  database: 'node_eshop',
  password: 'nilton'
});

module.exports = pool.promise(); //allows promises with pool