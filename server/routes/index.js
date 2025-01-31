const router = require("express").Router();
const userController = require("../controllers/userController");
const userRouter = require('./userRouter');
const authMiddleware = require('../middlewares/authMIddleware');


router.use('/user', userRouter);
router.get('/users', authMiddleware, userController.getUsers);

module.exports = router;