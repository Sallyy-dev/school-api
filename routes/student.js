const express = require('express');
const router = express.Router();
const studentController = require('../controllers/student');


router.post("/student" ,createStudent, errorHandler);
router.get("/allstudent",getAllStudents,errorHandler );
router.get("/student/:id" ,getStudentById, errorHandler);
router.put("/student/:id" ,updateStudent, errorHandler);
router.delete("/student/:id",deleteStudent,errorHandler);