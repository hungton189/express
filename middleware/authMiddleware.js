var db = require("../db.json");

module.exports.authRequire = function(req,res,next)
{
	if(!req.cookies.user)
	{
		res.render("auth/login.pug",
				{
					errors:["Bạn chưa đăng nhập"]
				});
			return;
	}
	next();
}