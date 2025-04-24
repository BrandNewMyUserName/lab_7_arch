const express = require('express');

// Importing the controller
const router = express.Router();
const userController = require('../controller/user.controller');

router.get('/', userController.findAll); // Get all users
router.get('/:user_id', userController.findByID); // Get user by ID
router.post('/', userController.create); // Create new user
router.put('/:user_id', userController.update); // Update user by ID
router.delete('/:user_id', userController.delete); // Delete user by ID

module.exports = router;