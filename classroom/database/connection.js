const mysql = require('mysql');
// import mysql from "mysql";

const db = mysql.createConnection({
  host: '',
  user: '',
  password: '',
  database: 'classroom',
});

db.connect(function (err) {
  if (err) throw err;
  console.log('connected to database .');
});

module.exports = db;
