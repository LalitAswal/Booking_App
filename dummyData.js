const mongoose = require('mongoose');
const SeatReservations = require('./models/seatReservationSchema'); 

const dummyData = [
  { seatNumber: 1, isReserved: true },
  { seatNumber: 2, isReserved: false },
  { seatNumber: 3, isReserved: false },
  { seatNumber: 4, isReserved: false },
  { seatNumber: 5, isReserved: true },
  { seatNumber: 6, isReserved: false },
  { seatNumber: 7, isReserved: false },
  { seatNumber: 8, isReserved: false },
  { seatNumber: 9, isReserved: true },
  { seatNumber: 10, isReserved: true },
  { seatNumber: 11, isReserved: false },
  { seatNumber: 12, isReserved: false },
  { seatNumber: 13, isReserved: false },
  { seatNumber: 14, isReserved: true },
  { seatNumber: 15, isReserved: true },
  { seatNumber: 16, isReserved: true },
  { seatNumber: 17, isReserved: true },
  { seatNumber: 18, isReserved: true },
  { seatNumber: 19, isReserved: false },
  { seatNumber: 20, isReserved: false },
  { seatNumber: 21, isReserved: false },
  { seatNumber: 22, isReserved: true },
  { seatNumber: 23, isReserved: false },
  { seatNumber: 24, isReserved: false },
  { seatNumber: 25, isReserved: false },
  { seatNumber: 26, isReserved: true },
  { seatNumber: 27, isReserved: false },
  { seatNumber: 28, isReserved: false },
  { seatNumber: 29, isReserved: true },
  { seatNumber: 30, isReserved: true },
  { seatNumber: 31, isReserved: true },
  { seatNumber: 32, isReserved: true }, 
  { seatNumber: 33, isReserved: false },
  { seatNumber: 34, isReserved: false },
  { seatNumber: 35, isReserved: false },
  { seatNumber: 36, isReserved: true },
  { seatNumber: 37, isReserved: false },
  { seatNumber: 38, isReserved: false },
  { seatNumber: 39, isReserved: false },
  { seatNumber: 40, isReserved: true },
  { seatNumber: 41, isReserved: false },
  { seatNumber: 42, isReserved: false },
  { seatNumber: 43, isReserved: true },
  { seatNumber: 44, isReserved: true },
  { seatNumber: 45, isReserved: true },
  { seatNumber: 46, isReserved: true }, 
  { seatNumber: 47, isReserved: false },
  { seatNumber: 48, isReserved: false },
  { seatNumber: 49, isReserved: false },
  { seatNumber: 50, isReserved: true },
  { seatNumber: 51, isReserved: false },
  { seatNumber: 52, isReserved: false },
  { seatNumber: 53, isReserved: false },
  { seatNumber: 54, isReserved: true },
  { seatNumber: 55, isReserved: false },
  { seatNumber: 56, isReserved: false },
  { seatNumber: 57, isReserved: true },
  { seatNumber: 58, isReserved: true },
  { seatNumber: 59, isReserved: true },
  { seatNumber: 60, isReserved: true }, 
  { seatNumber: 61, isReserved: false },
  { seatNumber: 62, isReserved: false },
  { seatNumber: 63, isReserved: false },
  { seatNumber: 64, isReserved: true },
  { seatNumber: 65, isReserved: false },
  { seatNumber: 66, isReserved: false },
  { seatNumber: 67, isReserved: false },
  { seatNumber: 68, isReserved: true },
  { seatNumber: 69, isReserved: false },
  { seatNumber: 70, isReserved: false },
  { seatNumber: 71, isReserved: true },
  { seatNumber: 72, isReserved: true },
  { seatNumber: 73, isReserved: true },
  { seatNumber: 74, isReserved: true }, 
  { seatNumber: 75, isReserved: false },
  { seatNumber: 76, isReserved: false },
  { seatNumber: 77, isReserved: false },
  { seatNumber: 78, isReserved: true },
  { seatNumber: 79, isReserved: false },
  { seatNumber: 80, isReserved: false },
];

const populateDummyData = async (req, res) => {
    try {
      let x =await SeatReservations.insertMany(dummyData);
      console.log(x);
      console.log('Dummy data inserted successfully');
      res.status(200).json({message:"Dummy data inserted successfully"})
    } catch (error) {
      console.error('Error inserting dummy data:', error);
      res.status(500).json({message:"Error inserting dummy data"})

    } finally {
      mongoose.disconnect();
    }
  };
  
  module.exports = populateDummyData;