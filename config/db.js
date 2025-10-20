const mongoose = require("mongoose");

const mongodb = async()=>{
    try{
        mongoose.connect(process.env.MONGO_URL)
            console.log('MongoDB connected');
    }
    catch(err){
            console.error('MongoDB connection error', err);
    }
}

module.exports = mongodb;
