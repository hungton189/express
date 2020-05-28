var User = require("../models/userModel.js")
module.exports.createUserValidate =async function(req,res, next)
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
		if(!req.body.email)
		{
			errors.push("Vui lòng nhập Email!");
		}
		var data =await User.findOne({email:req.body.email});
		if(data)
		{
			errors.push("Email đã tồn tại trong hệ thống!");
		}
		if(!req.body.password)
		{
			errors.push("Vui lòng nhập Password!");
		}
		if(errors.length > 0)
		{ 	
			res.render("users/create",
			{
				errors: errors,
				values: req.body
			}
			);
			return;
		}

	next();
}