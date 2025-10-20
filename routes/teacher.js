const express = require('express');
const router = express.Router();
const studentController = require('../controllers/teacher');


router.post("/teacher" ,createTeacher, errorHandler);
router.get("/allteacher",getAllTeachers,errorHandler );
router.get("/teacher/:id" ,getTeacherById, errorHandler);
router.put("/teacher/:id" ,updateTeacher, errorHandler);
router.delete("/teacher/:id",deleteTeacher,errorHandler);