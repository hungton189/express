var express = require("express");
var router = express.Router();
var controller = require("../controllers/productController.js");
router.use(express.static('public'));
var authMiddleware = require("../middleware/authMiddleware.js");

router.get("",authMiddleware.authRequire,controller.present);


module.exports = router;