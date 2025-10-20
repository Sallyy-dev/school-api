const express = require('express');
const router = express.Router();
const teacherController = require('../controllers/teacher');


router.post("/teacher" ,teacherController.createTeacher, errorHandler);
router.get("/allteacher",teacherController.getAllTeacher,errorHandler );
router.get("/teacher/:id" ,teacherController.getTeacherById, errorHandler);
router.put("/teacher/:id" ,teacherController.updateTeacher, errorHandler);
router.delete("/teacher/:id",teacherController.deleteTeacher,errorHandler);