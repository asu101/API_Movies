const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const { mongoose } = require('./database');
const {json} = require("express");

// Middleware
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// Routes
app.use('/ASU/movies', require('./routes/movies'));
app.use('/', (req, res) => res.send('API in /api/asu'));

// Starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port: ', app.get('port'));
});