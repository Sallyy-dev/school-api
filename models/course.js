const mongoose = require("mongoose");
const courseSchema = mongoose.Schema({
  title:{
    type:String,
    required:true
  },
  code: { type: String, unique: true },
  description: String,
  teacher: { type: Schema.Types.ObjectId, ref: 'Teacher' },
  maxStudents: Number

})
module.exports = mongoose.model("Course", courseSchema );