const {database } = require('./config');
const mysql = require('mysql2');
const mysqlPromise = require('mysql2/promise');

const connection = mysql.createConnection(database);
const connectionPromise = mysqlPromise.createConnection(database);

connection.connect();

// connection.end();
module.exports = connection;