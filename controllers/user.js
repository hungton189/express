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
		var errors = [];
		if(!req.body.name)
		{
			errors.push("Vui lòng nhập tên!");
		}
		if(!req.body.phone)
		{
			errors.push("Vui lòng nhập SĐT!");
		}
		if(errors.length > 0) res.render("users/create",
			{
				errors: errors,
				values: req.body
			});
		else
		{
			req.body.id = shortId.generate();
			db.get('users')
	  		.push(req.body)
	  		.write()
			res.redirect("/userlist");
		}
	};