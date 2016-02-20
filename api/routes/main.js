module.exports = function(app, request, MainHelper){
	var Helper = new MainHelper();
	
	app.get('/insta/auth', function (req, res) {
	
		//1476688279.bbb32f8.a9fafb0c16fb415897b92d577946fb85

		var postData = {
			"client_id": "bbb32f809544487d827693b43169291b", 
			"client_secret": "a2dd2feb52cf4ac099c9aec3e0ba8130", 
			"grant_type" : "authorization_code", "redirect_uri" : 
			"http://hackisu.com", 
			"code": "620bf6d3b15b4c6bba79fedbb03f3e3d"
		}

		var url = 'https://www.example.com'
		var config = {
		  method: 'POST',
		  body: postData,
		  json: true,
		  url: 'https://api.instagram.com/oauth/access_token'
		}

		request(config, function (err, response, body) {
			if (err) {
				console.log(json);
				res.json('{"result" : "nope"}');
				return;
			}

			var json = JSON.stringify(body);
			console.log(json);
			res.json('{"result" : "'+json+'"}');
			
		});
	})

	app.get('/photos/:city', function (req, res) {


	  	res.json('{"result" : ""}')
	})
};