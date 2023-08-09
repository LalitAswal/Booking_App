const express = require('express');
const router = express();


const {seatDetails, seatsReservation} = require('../controllers/seats.controller');
const populateDummyData = require('../dummyData')

console.log('checking routes')


router.get('/seats', seatDetails)
router.post('/seats_reservation', seatsReservation)
router.post('/creatingDummyData',populateDummyData)


module.exports = router;
