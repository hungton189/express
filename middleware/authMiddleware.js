var User = require("../models/userModel.js");

module.exports.authRequire =async function(req,res,next)
{
	if(!req.signedCookies.userId)
	{
		res.render("auth/login.pug",
				{
					errors:["Bạn chưa đăng nhập"]
				});
			return;
	}
	var id = req.signedCookies.userId;
	var user = await User.findById(id);
	res.locals.user = user;
	next();
}