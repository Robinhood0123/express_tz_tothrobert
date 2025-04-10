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
    res.send('A szerver működik!');
});

app.get("/szoba", (req, res) => {
    db.query("SELECT*FROM szobak"
    , (err, result) => {
        if (err) return res.json(err);
        res.json(result);
    });
 
});

app.listen(3001, () => {
    console.log('fut a 3001-en');
});