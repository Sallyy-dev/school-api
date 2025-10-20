const mongoose = require("mongoose");
const studentSchema = mongoose.Schema({
    user: { type: Schema.Types.ObjectId, 
    ref: 'User',
    required:true
},
    dob: Date,
    class: String,
    documents: [String]

})

module.exports = mongoose.model("Student" ,studentSchema );