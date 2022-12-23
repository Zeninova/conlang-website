// requiring Express module
const express = require('express');
const app = express();
const port = process.env.port || 5000; // port number
const mysql = require('mysql'); // mysql
var path = require('path');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'conlang'
});

app.use(express.static(path.join(__dirname, 'public')));

// handling GET request
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/html/register.html');
})


// server setup
app.listen(port, console.log (
    `Server started on port ${port}`));