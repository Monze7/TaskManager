const express = require('express');
const app = express();
const mongoose = require('mongoose');
const authorizeRoutes = require('./Routes/authorize.js');
const connect = require('./config/dbconnect.js');

require('dotenv').config();
connect();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/auth' , authorizeRoutes);
const port = 3000;


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

