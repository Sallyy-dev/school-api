const Teacher = require("../models/teacher");

const createTeacher = async(req, res)=> {
  try{
    const {user , subject , phone} = req.body;
    if (!user || !subject || !phone) {
      return res.status(400).json({ success: false, message: "Missing fields" });
    }
    const teacher = new Teacher({
      user:user,
      subject:subject,
      phone:phone
    });
    const newTeacher = await teacher.save();
    res.status(201).json({ success: true, message: "Teacher created", newTeacher:newTeacher });
  }
  catch(err){
  res.status(400).json({ success: false, message: err.message });

  }
};


const getAllTeacher = async (req, res) => {
  try {
    const users = await Student.find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


const getTeacherById = async (req, res)=>{
      try {
       const teacher = await Teacher.findById(req.params.id);
      if (!teacher) return res.status(404).json({ message: "teacher not found" });
      res.json(teacher);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
};

const updateTeacher = async (req, res)=>{
      try {
       const teacher = await Teacher.findById(req.params.id);
      if (!teacher) return res.status(404).json({ message: "teacher not found" });
      res.json(teacher);
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
};


const deleteTeacher = async(req,res)=>{
      try {
      const teacher = await Teacher.findById(req.params.id);
      if (!teacher) return res.status(404).json({ message: "teacher not found" });
      res.json({ message: "teacher deleted" });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
};

module.exports = {
  createTeacher,
  getAllTeacher,
  getTeacherById,
  updateTeacher,
  deleteTeacher,
};
