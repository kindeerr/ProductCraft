const express = require('express');
const router = express.Router();
const User = require('../../models/User');
const authController = require('../../controllers/AuthController');
const auth = require('../../middleware/auth');
const { check , validationResult } = require('express-validator');

router.get('/', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    } catch(err) {
        console.error(err.message);
        res.status(500).send('Internal server error!');
    };
});

router.post('/login',[
    check('email', 'Please provide an email').isEmail(),
    check('password','Password is required').exists()
], auth, authController.get_login); //login an user

module.exports = router;