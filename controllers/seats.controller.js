const  SeatReservation  = require("../models/seatReservationSchema");
const mongoose = require('mongoose');
console.log("checking controller");
const {isSeatAvailable, isConsecutiveAvailable} = require('./seats.helper')

// to check seats are available or not
const seatDetails = async(req, res) => {
    try {
      console.log("checking seatDetails")
        const seatStatus = await SeatReservation.find();
        return res.status(200).json(seatStatus);
    } catch (error) {
      console.log("checking seatDetails  error",error)

    res.status(500).json({ error: "Internal Server Error" });
    }
}

// seat Reservation based on no. of seats to book
const seatsReservation = async (req, res) => {
  try {
    let { numberOfSeats } = req.body;
    console.log("checking numberOfSeats ", numberOfSeats);

     numberOfSeats = Number(numberOfSeats)

    if(!numberOfSeats){
      return res.status(500).json({ error: "Enter a valid number"})
    }
    if(numberOfSeats>7){
      return res.status(500).json({ error: "cant book more than 7"})
    }
    const coachCapacity = 80;
    const availableSeats = await SeatReservation.find({ isReserved: false }).sort('seatNumber');
    console.log("availableSeats", availableSeats);
    const bookedSeats = [];

    for (const seat of availableSeats) {
      if (bookedSeats.length === numberOfSeats) {
        break;
      }
      console.log("checking line 41 ");

      if (isConsecutiveAvailable(seat.seatNumber, numberOfSeats)) {
        for (let i = seat.seatNumber; i < seat.seatNumber + numberOfSeats; i++) {
          await SeatReservation.updateOne({ seatNumber: i }, { isReserved: true });
          bookedSeats.push(i);
        }
      }
    }
    console.log("checking line 50 ");

    if (bookedSeats.length === numberOfSeats) {
      return res.status(200).json({ data: bookedSeats });
    }

    for (let i = 1; i <= coachCapacity; i++) {
      if (bookedSeats.length === numberOfSeats) {
        break;
      }
      console.log("checking line 60 ");

      if (await isSeatAvailable(i)) {
        await SeatReservation.updateOne({ seatNumber: i }, { isReserved: true });
        bookedSeats.push(i);
      }
    }
    console.log("checking line 67 ");

    let result = bookedSeats.length === numberOfSeats ? bookedSeats : null;
    if (!result) {
      return res.status(400).json({ error: "Not enough seats available" });
    }
    return res.status(200).json({ data: result });

  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};


module.exports = { seatDetails, seatsReservation };
