var shortId = require("shortid");

var db = require("../db.js");

module.exports = function(req, res, next)
{
	if(!req.signedCookies.sessionId)
	{
		var sessionId = shortId.generate()
		res.cookie("sessionId",sessionId,
			{
				signed: true
			});
		db.get("session").push(
			{
				id : sessionId
			}).write();
	}
	next();
}