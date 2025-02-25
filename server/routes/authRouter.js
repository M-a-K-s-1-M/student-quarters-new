const router = require("express").Router();
const UserController = require('../controllers/userController');
const { body } = require('express-validator');

router.post('/registration',
    body('email').isEmail(),
    body('password').isLength({ min: 3, max: 32 }),
    UserController.registration);
router.post('/login', UserController.login);
router.post('/logout', UserController.logout);

module.exports = router;