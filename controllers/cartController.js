var db = require("../db.js");

module.exports.addToCart = function(req,res)
{
	var productId = req.params.productId;
	var sessionId = req.signedCookies.sessionId;

	if(!sessionId)
	{
		res.redirect("/products");
	}

	var count = db.get("session")
					.find({id:sessionId})
					.get("cart."+ productId,0)
					.value();

	db.get("session")
	.find({id:sessionId})
	.set("cart." + productId, count+1)
	.write();

	res.redirect("/products");
}
module.exports.cart = function(req,res)
{
	var sessionId = req.signedCookies.sessionId;
	var cart = db.get("session")
					.find({id:sessionId})
					.get("cart")
					.value();
	var products = [];
	for(productId in cart)
	{
		var product = db.get("products").find({id:productId}).value();
		product.sl = cart[productId];
		products.push(product);
	}
	res.render("cart/cart.pug",
		{
			cart:products
		});
}