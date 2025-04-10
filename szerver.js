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

app.get('/', (req, res) => {
    res.send('A szerver műlödik!');
});

app.get/("/szobak", (req, res) => {
    const sql = "SELECT * FROM szobak";
    db.query(sql, (err, result) => {
        if (err) return res.tatus(500).json({error: err.message})
        res.json(results);
    })
})

app.listen(3001, () => {
    console.log('fut a 3001-en');
});