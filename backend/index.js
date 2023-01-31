const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const { mongoose } = require('./database');
const {json} = require("express");


app.set('port', 3000);
// Middleware
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

// Routes
app.use('/ASU/movies', require('./routes/movie.route'));
app.use('/ASU/genres', require('./routes/genres.route'));
app.use('/', (req, res) => res.send('API in /ASU/movies'));

// Starting the server
app.listen(app.get('port'), () => {
    console.log('Server on port: ', app.get('port'));
});