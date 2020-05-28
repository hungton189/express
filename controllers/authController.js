
var User = require("../models/userModel.js");
module.exports.login = function(req,res)
	{
		res.render("auth/login.pug");
	};
module.exports.postLogin =async function(req,res)
	{
		var error = [];
		var email = req.body.email;
		var user = await User.findOne({email :email});
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
		var password = req.body.password;
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
