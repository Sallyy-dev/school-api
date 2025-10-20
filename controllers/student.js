const Student = require("../models/student");

const createStudent = async(req, res)=> {
  try{
    const {user , dob , studentClass} = req.body;
    if (!user || !dob || !studentClass) {
      return res.status(400).json({ success: false, message: "Missing fields" });
    }
    const student = new Student({
      user:user,
      dob:dob,
      studentClass:studentClass
    });
    const newStudent = await student.save();
    res.status(201).json({ success: true, message: "Student created", newStudent:newStudent });
  }
  catch(err){
  res.status(400).json({ success: false, message: err.message });

  }
};

const getAllStudents = async (req, res) => {
  try {
    const users = await Student.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


const getStudentById = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);
    if (!student) return res.status(404).json({ message: 'User not found' });
    res.json(student);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


const updateStudent = async (req, res)=>{
      try {
      const student = await Student.findById(req.params.id);
      if (!student) return res.status(404).json({ message: "student not found" });
      res.json(student);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
};


const deleteStudent = async(req,res)=>{
      try {
      const student = await Student.findById(req.params.id);
      if (!student) return res.status(404).json({ message: "student not found" });
      res.json({ message: "student deleted" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
};





module.exports = {
  createStudent,
  getAllStudents,
  getStudentById,
  updateStudent,
  deleteStudent,
};
