var express = require("express");
var router = express.Router();
var controller = require("../controllers/productController.js");
router.use(express.static('public'));

router.get("",controller.present);


module.exports = router;