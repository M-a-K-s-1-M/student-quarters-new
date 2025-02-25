const router = require("express").Router();
const UserController = require('../controllers/userController');
const authMIddleware = require("../middlewares/authMIddleware");

router.get('/activate/:link', UserController.activate);
router.get('/refresh', UserController.refresh);
router.get('/:id', UserController.getUser);
router.get('', authMIddleware, UserController.getUsers);

module.exports = router;
