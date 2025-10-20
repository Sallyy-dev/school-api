const mongoose = require("mongoose");
const studentSchema = mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, 
    ref: 'User',
    required:true
},
    dob: Date,
    studentClass: String,


})

module.exports = mongoose.model("Student" ,studentSchema );