const  SeatReservation  = require("../models/seatReservationSchema");

// to check seat availability
const isSeatAvailable = async (seatNumber) => {
    const seat = await SeatReservation.findOne({ seatNumber });
    return !seat || !seat.isReserved;
  }
  
// to check consecutive seats availability  
const isConsecutiveAvailable = async (startSeatNumber, numberOfSeats) => {
for (let i = startSeatNumber; i < startSeatNumber + numberOfSeats; i++) {
    if (!(await isSeatAvailable(i))) {
    return false;
    }
}
return true;
}

  module.exports = {isSeatAvailable,isConsecutiveAvailable};