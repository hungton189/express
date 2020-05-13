var express = require('express');
var app = express();
var port = 3000;

app.get('/',function(request,res)
	{
		res.send("Hello Coder.Tokyo");
	});

app.listen(port, function () 
{
	console.log("Server listening on port " +port);
})