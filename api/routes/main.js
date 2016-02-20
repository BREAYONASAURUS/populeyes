module.exports = function(app, request, MainHelper){
	var Helper = new MainHelper();
	var access_token = "1476688279.bbb32f8.a9fafb0c16fb415897b92d577946fb85";

	app.get('/photos/coordinates', function (req, res) {
		// Ways to get GET data from the URL (i.e. http://example.com?lat=123&long=123)
		var latitude = req.param('lat');
		var longitude = req.param('long');

		// Make request to instragram API here to get information


		// Return valid JSON string as a response to this API call
		var response_json = '{"result" : "'+latitude+','+longitude+'"}';
		res.json(response_json);
	});

	/*
	*	Used to auth an instagram Oauth code
	*/
	app.get('/insta/auth', function (req, res) {

		/*
		*	Example of POST request 
		*/
		// POST data is built in JSON format
		var postData = {
			"client_id": "bbb32f809544487d827693b43169291b", 
			"client_secret": "a2dd2feb52cf4ac099c9aec3e0ba8130", 
			"grant_type" : "authorization_code", "redirect_uri" : 
			"http://hackisu.com", 
			"code": "620bf6d3b15b4c6bba79fedbb03f3e3d"
		}

		// Config file you set for the request to process
		var config = {
			// Method of request (i.e. POST/GET/ect...)
		  	method: 'POST',
		  	// If POST request, you will set the data here and json to true
		  	body: postData,
		  	json: true,
		  	// The URL the request will be sent to 
		  	// If GET request you can set the url with data as 'http://example.com?data1=123&data2=123'
		  	url: 'https://api.instagram.com/oauth/access_token'
		}

		//This sends the request out
		request(config, function (err, response, body) {
			/* Since the request could take 0.0001 sec or 2 hours, we need to wait for the data to be return
			* That is why we use the variable err, response, body given in the parameters
			* This code does not run until the request has return with it data
			*/

			// Checking if the api returned an error
			if (err) {
				console.log(json);
				res.json('{"result" : "nope"}');
				return;
			}

			// Return JSON string
			var json = JSON.stringify(body);
			console.log(json);
			res.json('{"result" : "'+json+'"}');
			
		});
	})

	app.get('/photos/:city', function (req, res) {


	  	res.json('{"result" : ""}')
	})


};