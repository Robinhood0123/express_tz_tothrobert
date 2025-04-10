const express = require('express');
const app = express();
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    port: '3306',
    password: '',
    database: 'fogado',
});

app.get("/", (req, res) => {
    res.send("Fut a backend.");
});
 
app.get("/szobak", (req, res) => {
    const sql = "SELECT * FROM szobak";
    db.query(sql, (err, result) => {
        res.json(result);
    });
});
   
app.listen(3002, () => {
    console.log("Fut a 3002 es porton.");
});