const cors = require('cors');
const express = require('express');


const app = express();

//booking routes
const bookingRoutes = require('./routes/bookingRoutes.js');

//middlewares
app.use(cors())
app.use(express.json());
app.use(express.static('booking'))


// booking routes
app.use('/', bookingRoutes);

module.exports = app;   