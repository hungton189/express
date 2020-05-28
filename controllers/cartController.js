var Session = require("../models/sessionModel.js");
var Product = require("../models/productModel.js");

module.exports.addToCart =async function(req,res)
{
	var productId = req.params.productId;
	var sessionId = req.signedCookies.sessionId;

	if(!sessionId)
	{
		res.redirect("/products");
	}

	var data = await Session.findOne({session:sessionId});
	var count;
	if(!data.cart)
	{
		count = 0;
		data.cart = {};
	}
	else
	{
		if(!data.cart[productId]) count = 0;
		else
			count = data.cart[productId];
	}
	data.cart[productId]= count+1;
	await Session.findOneAndUpdate({session:sessionId},data);

	res.redirect("/products");
}
module.exports.cart =async function(req,res)
{
	var sessionId = req.signedCookies.sessionId;
	var cart =await Session.findOne({session:sessionId});
	var products = [];
	for(productId in cart.cart)
	{
		 var product =await Product.findById(productId);;
		// product.sl = cart[productId];
		products.push(product);
	}
	res.render("cart/cart.pug",
		{
			cart:products
		});
}