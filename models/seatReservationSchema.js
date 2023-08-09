const mongoose = require('mongoose');

const seatReservationSchema = new mongoose.Schema({
  seatNumber: Number,
  isReserved: { type: Boolean, default: false },
});

module.exports = mongoose.model('SeatReservation', seatReservationSchema);
