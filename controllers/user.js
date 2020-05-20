var shortId = require("shortid");
var db = require("../db.js");
module.exports.index = function(req,res)
	{
		res.render("users/index",
			{
				users: db.get("users").value()
			});
	};

module.exports.search = function(req, res)
	{
		var q = req.query.q;
		var users = db.get("users").value();
		var mathchedUsers = users.filter(function(user)
			{
				return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
			});
		res.render("users/index",
			{
				users:mathchedUsers,
				valuee:q
			});
	};

module.exports.create = function(req,res)
	{
		res.render("users/create");
	};

module.exports.view = function(req,res)
	{
		var id = req.params.id;
		var user = db.get('users')
		  .find({ id: id })
		  .value();
		 res.render("users/view",
		 	{
		 		user:user
		 	});
	};

module.exports.postCreate = function(req,res)
	{
		console.log(res.locals.success);
		
			req.body.id = shortId.generate();
			db.get('users')
	  		.push(req.body)
	  		.write()
			res.redirect("/userlist");
	};