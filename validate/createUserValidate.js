module.exports.createUserValidate = function(req,res, next)
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