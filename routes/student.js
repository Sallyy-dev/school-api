const express = require('express');
const router = express.Router();
const studentController = require('../controllers/student');


router.post("/student" ,studentController.createStudent, errorHandler);
router.get("/allstudent",studentController.getAllStudents,errorHandler );
router.get("/student/:id" ,studentController.getStudentById, errorHandler);
router.put("/student/:id" ,studentController.updateStudent, errorHandler);
router.delete("/student/:id",studentController.deleteStudent,errorHandler);


module.exports = router;