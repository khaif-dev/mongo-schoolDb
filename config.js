// importing mongoose and dotenv
const mongoose = require( 'mongoose');
require('dotenv').config();

// connect to mongoDB
async function connectDB(){
    await mongoose.connect(process.env.MONGODB_URL);
    console.log('connected to mongoDB');
}
module.exports = { connectDB, mongoose };