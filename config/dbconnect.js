const mongoose = require('mongoose');
require('dotenv').config();

const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URL, {
        });
        console.log('Connected to the database');
    }
    catch (error) {
        console.log('Error connecting to the database');
    }
}

module.exports = connect;