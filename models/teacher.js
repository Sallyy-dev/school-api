const mongoose = require("mongoose");
const teacherSchema = mongoose.Schema({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  subject: String,
  phone: String
})
module.exports = mongoose.model("Teacher" ,teacherSchema );