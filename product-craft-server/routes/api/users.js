const express = require('express');
const router = express.Router();
const { check , validationResult } = require('express-validator');

const userController = require('../../controllers/UserController');

router.post('/create',[
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please provide an email').isEmail(),
    check('password','Please enter a password with 6 or more characters').isLength({min: 6})
], userController.create_user); //Create a user

module.exports = router;