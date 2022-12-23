// requiring Express module
const express = require('express');

const app = express();

// handling GET request
app.get('/', (req, res) => {
    res.send('Node App is running on this server')
    res.end()
})

// port number
const PORT = process.env.PORT || 5000;

// server setup
app.listen(PORT, console.log (
    `Server started on port ${PORT}`));