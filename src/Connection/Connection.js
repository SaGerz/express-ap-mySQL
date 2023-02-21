const mysql = require('mysql')

const db = mysql.createConnection({
    // host: "localhost",
    // user: "root",
    // password: "",
    // database: "siakad"
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE
})

module.exports = db;