var md5 = require("md5");

var db = require("../db.js");
module.exports.login = function(req,res)
	{
		res.render("auth/login.pug");
	};
module.exports.postLogin = function(req,res)
	{
		var error = [];
		var email = req.body.email;
		var user = db.get("users").find({email :email}).value();
		if(!user)
		{
			error.push("Email chưa đăng kí!");
			res.render("auth/login.pug",
				{
					errors:error,
					values:req.body
				});
			return;
		}
		var password = md5(req.body.password);
		if(password !== user.password)
		{
			error.push("Password sai!");
			res.render("auth/login.pug",
				{
					errors:error,
					values:req.body
				});
			return;
		}
		res.cookie("userId",user.id,
			{
				signed: true
			});
		res.redirect("/userlist");
	}
