const mongoose = require('mongoose')

const url = 'mongodb://localhost:27017/bookings'
// const url ='mongodb+srv://lalitaswal143:69BSsAE79qhMMJt4@seatreservation.pun2xa6.mongodb.net/?retryWrites=true&w=majority'

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // family: 4
}

const dbConnection = mongoose.connect(url, options);

dbConnection.then(() => {
  console.log('MongoDB connection established');
}).catch((err) => {
  console.error('MongoDB connection error:', err);
});

module.exports = mongoose;
