require('dotenv').config();
const mongoose = require('mongoose');
function connectDB() {


    // Database connection 🥳
    mongoose.connect(process.env.MONGO_CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true}, err => {
        if(err) throw err;
        console.log('Connected to MongoDB!!!')})
    // const connection = mongoose.connection;
    // connection.once('open', () => {
    //     console.log('Database connected 🥳🥳🥳🥳');
    // })

    }
// mIAY0a6u1ByJsWWZ

module.exports = connectDB;