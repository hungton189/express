var shortId = require("shortid");
var User = require("../models/userModel.js");
module.exports.index = async function(req,res)
	{
		var users = await User.find();
		res.render("users/index",
			{
				users: users
			});
	};

module.exports.search = async function(req, res)
	{
		var q = req.query.q;
		var users = await User.find();
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

module.exports.view =async function(req,res)
	{
		var id = req.params.id;
		var user = await User.findById(id);
		 res.render("users/view",
		 	{
		 		user:user
		 	});
	};

module.exports.postCreate =async function(req,res)
	{
			var user = req.body;	
			user.avatar = req.file.path.slice(7);
			const doc = await User.create(user);
			await doc.save();
			res.redirect("/userlist");
	};
