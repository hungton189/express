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
		if(req.body.password !== user.password)
		{
			error.push("Password sai!");
			res.render("auth/login.pug",
				{
					errors:error,
					values:req.body
				});
			return;
		}
		res.cookie("user",user.id);
		res.redirect("/userlist");
	}
