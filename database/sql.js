const mysql = require('mysql');
let connection;
function handleDisconnect() {
  connection = mysql.createConnection({
  host: 'b2ono8d7tfmzajnhawjd-mysql.services.clever-cloud.com',
  user: 'urhfqk3pxurx8rqf',
  password: 'tcNRCGMvyscmba4CPzF4',
  database: 'b2ono8d7tfmzajnhawjd',
  port: 3306 // usually 3306, confirm from Clever Cloud panel
});


  connection.connect(function (err) {
    if (err) {
      console.log('Error connecting to MySQL:', err);
      setTimeout(handleDisconnect, 2000); // retry after 2 sec
    } else {
      console.log('Connected to MySQL Database');
    }
  });

  connection.on('error', function (err) {
    console.log('MySQL error', err);
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      handleDisconnect(); // reconnect
    } else {
      throw err;
    }
  });
}

handleDisconnect();

module.exports = connection;
