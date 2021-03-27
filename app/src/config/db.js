const mysql = require("mysql");

const db = mysql.createConnection({
    host: "peerco.cfcvxbugkuau.ap-northeast-2.rds.amazonaws.com",
    user: "admin",
    password: "12345678",
    database: "peerco",
});

db.connect();

module.exports = db;