const express = require('express');
const router = express.Router();
const userInfoController = require('../controllers/userInfo');

router.post('/submitUserInfo', userInfoController.createUser);

module.exports = router;
