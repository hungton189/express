var express = require('express');
var router = express.Router();
var controller = require("../controllers/authController.js");

router.use(express.static('public'));
var loginValidate = require("../validate/loginValidate");

router.get('/login', controller.login);
router.post("/login",loginValidate.login, controller.postLogin);

module.exports = router;