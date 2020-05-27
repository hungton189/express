require('dotenv').config();

var express = require('express');
var app = express();
var port = 3000;
var cookieParser = require('cookie-parser');

var userRoute = require("./routes/user.js");
var authRoute = require("./routes/authRoute.js");
var authMiddleware = require("./middleware/authMiddleware.js");
var productRoute = require("./routes/productRoute.js");
var sessionId = require("./middleware/sessionIdMiddleware.js");
var cartRoute = require("./routes/cartRoute.js");

// cấu hình để sử dụng pug
app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(cookieParser(process.env.SESSION_SECRET));
app.use(sessionId);

app.use(express.static('public'));

app.get('/',function(req,res)
	{
		res.render("index");
	});
app.use("/userlist",authMiddleware.authRequire, userRoute);
app.use("/auth", authRoute);
app.use("/products",productRoute);
app.use("/cart",cartRoute);

app.listen(port, function () 
{
	console.log("Server listening on port " +port);
})