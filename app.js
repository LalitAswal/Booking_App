const cors = require('cors');
const express = require('express');


const app = express();

//booking routes
const bookingRoutes = require('./routes/bookingRoutes.js');


//middleware
app.use(cors())
app.use(express.json());
// app.use(express.static('booking'))


app.get("/",(req,res)=>{

  return res.send("welcome to booking server")
})


// booking routes
app.use('/', bookingRoutes);

module.exports = app;   
