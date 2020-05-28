var shortId = require("shortid");

var Session = require("../models/sessionModel.js");

module.exports =async function(req, res, next)
{
	if(!req.signedCookies.sessionId)
	{
		var sessionId = shortId.generate()
		res.cookie("sessionId",sessionId,
			{
				signed: true
			});
		var data = {}
		data.session = sessionId;
		data.cart = {};
		const doc =await Session.create(data);
		await doc.save();
	}
	next();
}