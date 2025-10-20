const express = require('express');
const router = express.Router();
const userController = require('../controllers/user');
const errorHandler = require("../middleware/globalErorr")
router.post('/register', userController.register , errorHandler);
router.post('/login', userController.login , errorHandler);
router.post("/logout", userController.logout , errorHandler);

module.exports = router;
