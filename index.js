var express = require('express');
var app = express();
var port = 3000;
var cookieParser = require('cookie-parser');

var userRoute = require("./routes/user.js");
var authRoute = require("./routes/authRoute.js");
var authMiddleware = require("./middleware/authMiddleware.js");

// cấu hình để sử dụng pug
app.set('view engine', 'pug');
app.set('views', './views');
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(cookieParser());

app.use(express.static('public'));

app.get('/',function(req,res)
	{
		res.render("index");
	});
app.use("/userlist",authMiddleware.authRequire, userRoute);
app.use("/auth", authRoute);

app.listen(port, function () 
{
	console.log("Server listening on port " +port);
})