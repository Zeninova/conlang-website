// requiring Express module
const express = require('express');
const app = express();
const port = process.env.port || 5000; // port number
const mysql = require('mysql'); // mysql

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'conlang'
});

// handling GET request
app.get('/', (req, res) => {
    res.sendFile(__dirname + 'views/register.html');
})


// server setup
app.listen(port, console.log (
    `Server started on port ${port}`));