const router = require('express').Router();
const authController = require('./controllers/auth-controller');
<<<<<<< HEAD
const activateController = require('./controllers/activate-controller');
const authMiddleware = require('./middlewares/auth-middleware');

router.post('/api/send-otp', authController.sendOtp);
router.post('/api/verify-otp', authController.verifyOtp);
router.post('/api/activate', authMiddleware, activateController.activate);
=======

router.post('/api/send-otp',authController.sendOtp);

router.post('/api/verify-otp', authController.verifyOtp);

>>>>>>> 20ffaefbf0b561d1337f5c084e1de18ddb08d973

module.exports = router;
