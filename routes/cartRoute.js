var express = require("express");
var router = express.Router();
var controller = require("../controllers/cartController.js");
router.use(express.static('public'));

router.get("/add/:productId",controller.addToCart);
router.get("/",controller.cart);


module.exports = router;