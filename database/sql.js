const mysql = require('mysql');

const pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.MYSQL_HOST || 'b2ono8d7tfmzajnhawjd-mysql.services.clever-cloud.com',
  user: process.env.MYSQL_USER || 'urhfqk3pxurx8rqf',
  password: process.env.MYSQL_PASSWORD || 'tcNRCGMvyscmba4CPzF4',
  database: process.env.MYSQL_DATABASE || 'b2ono8d7tfmzajnhawjd',
  port: process.env.MYSQL_PORT || 3306,
});
console.log('Database connection pool created');
module.exports = pool;
