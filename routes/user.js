var express = require('express');
var router = express.Router();
var controller = require("../controllers/user.js");
router.use(express.static('public'));

router.get('/', controller.index);
router.get("/search", controller.search);
router.get("/create", controller.create);
router.get("/:id", controller.view);
router.post("/create", controller.postCreate);


module.exports = router;