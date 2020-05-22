var db = require("../db.js");

module.exports.authRequire = function(req,res,next)
{
	if(!req.signedCookies.userId)
	{
		res.render("auth/login.pug",
				{
					errors:["Bạn chưa đăng nhập"]
				});
			return;
	}
	var id= req.signedCookies.userId;
	var user = db.get('users')
		  .find({ id: id })
		  .value();
	res.locals.user = user;
	next();
}