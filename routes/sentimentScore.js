

//POST the sentiment score
exports.score = function(req, res) {
	//respond with a resource

	//Create the AlchemyAPI object
	
	
	var txt = req.param('msg');
	res.send(txt);
	/*
	alchemyapi.sentiment('text', txt, {}, function(response) {
		console.log("we got here");
		var type = response["docSentiment"]["type"];
		var score = response["docSentiment"]["score"];
		console.log("Sentiment Type: " + type + " Score: " + score);
		res.send(score);
	});
	*/
	//res.send("hello");
};