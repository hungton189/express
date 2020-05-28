var Product = require('../models/productModel.js');

module.exports.present = async function(req,res)
{
	// var perPage = 8;
	// var a
	// var n = parseInt(req.query.page) || 1;
	// var start = (n - 1) * perPage;
	// var end = n*perPage;
	// var products = db.get("products").value();

	// //setup các chỉ số cho nav cuối trang
	// var page = {};
	// var maxPage = (products.length % perPage === 0) ? Math.round(products.length / perPage)-1 : 
	// Math.round(products.length / perPage);
	// if(n <= 2)
	// {
	// 	page.previous = 1;
	// 	page.page1 = 1;
	// 	page.page2 = 2;
	// 	page.page3 = 3;
	// 	page.next = (n===1)?2 :3;

	// }
	// else
	// {
	// 	if(n < (maxPage - 1))
	// 	{	
	// 		page.previous = n-1
	// 		page.page1 = n-1;
	// 		page.page2 = n;
	// 		page.page3 = n+1;
	// 		page.next = n+1;
	// 	}
	// 	else
	// 	{	
	// 		page.previous = (n === maxPage)? maxPage-1: maxPage-1;
	// 		page.page1 = maxPage-2;
	// 		page.page2 = maxPage-1;
	// 		page.page3 = maxPage;
	// 		page.next = maxPage;
	// 	}
	// }

	// res.locals.page = page;
	// products = products.slice(start,end);
	// res.render("products/product.pug",
	// 	{
	// 		products:products
	// 	});

	var products = await Product.find();
	res.render('products/product', {
		products: products
	});
}