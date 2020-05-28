var express = require('express');
var multer  = require('multer');

var router = express.Router();
var controller = require("../controllers/userController.js");
router.use(express.static('public'));
var postCreateUser = require("../validate/createUserValidate");

var upload = multer({ dest: './public/uploads/' })

router.get('/', controller.index);
router.get("/search", controller.search);
router.get("/create", controller.create);
router.get("/:id", controller.view);
router.post("/create",upload.single('avatar'),postCreateUser.createUserValidate, controller.postCreate);


module.exports = router;