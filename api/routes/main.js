module.exports = function(app, request, MainHelper){
	var Helper = new MainHelper();
	var access_token = "1476688279.bbb32f8.a9fafb0c16fb415897b92d577946fb85"; //instagram
	var google_api_key = "AIzaSyAiWu9KZThGJxQjXh1zTIbOvXLm4Sb6UwQ";


	app.get('/place/photos', function (req, res) {

       var latitude = req.param('lat');
       var longitude = req.param('long');
       var name = req.param('name-of-city');
       var radius = req.param('radius-in-meters');

       var photoObjects = {};
       var count = 0;
       var locRequest = {
        method: 'GET',
        url: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?key='+google_api_key+'&location='+latitude+','+longitude+'&name='+name+'&radius='+radius
	   }
	   
	   request(locRequest, function (err, response, body) {

	    	if (err) {
				console.log(body);
				res.json('{"result" : "nope"}');
				return;
			}
		  var count = 0;
          var data = JSON.parse(body);
          

          var result = data.results;
          // Loop through results array
         for(var i = 0; i < result.length; i++) {
	        // Get the current Object
	        var obj = result[i];
	        var name = obj.name;
	        var types = obj.types;
	        var location = obj.vicinity;
	           // Check if photos key is in the object 
	           if(obj.photos) {
		         //If it is, get the photo_reference and the width for each one
		         for(var k = 0; k < obj.photos.length; k++) {
			      var photo = obj.photos[k];
			      photoObjects[photo.photo_reference] = {
			      	"name" : name,
			      	"location" : location,
			      	"types" : types,
			      	"width" :  photo.width
			      } 
			      count++;
		        }
	        }
         }  

         var photoCount = 0;
         for (var key in photoObjects) {
		  	if (photoObjects.hasOwnProperty(key)) {
		   		Helper.getGooglePhoto(key, photoObjects[key].width, request, function(err, body){
					//defining callback function
					if(err){
						console.log("Error: " + body);
						res.json('{"result" : "error"}');
						return;
					}
					
					var ex = JSON.parse(body);
					
					photoObjects[ex.result.url] = photoObjects[ex.result.photo_ref];
					delete photoObjects[ex.result.photo_ref];
					photoCount++;
					if(photoCount == count) {
						
						res.json('{"result" : '+ JSON.stringify(photoObjects) + '}');
					}
				});
		  	}
		}
	    });
	});

	app.get('/photos/coordinates', function (req, res) {
		// Ways to get GET data from the URL (i.e. http://example.com?lat=123&long=123)
        var latitude = req.param('lat');
		var longitude = req.param('lng');


		// Make request to instragram API here to get information
        
        var coordRequest = {
        method: 'GET',
        url: 'https://api.instagram.com/v1/media/search?lat='+latitude+'&lng='+longitude+'&distance=5000&access_token='+access_token

        }
        console.log('https://api.instagram.com/v1/media/search?lat='+latitude+'&lng='+longitude+'&distance=5000&access_token='+access_token);
      request(coordRequest, function (err, response, body) {

       if (err) {
				console.log(body);
				res.json('{"result" : "nope"}');
				return;
			}

		 // Return valid JSON string as a response to this API call
		 var json = JSON.stringify(body);
		 console.log(json);
		 var response_json = '{"result" : "'+json+'"}';
		 res.json(response_json);
	   });
	});

	/*
	*	Used to auth an instagram Oauth code
	*/
	app.get('/insta/auth', function (req, res) {

		/*
		*	Example of POST request 
		*/x     
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

	app.get('/insta/tag', function(req,res){
		
		var tag = req.param('tag'); //tag name request
		var minTag = req.param('min_tag_id');
		var maxTag = req.param('max_tag_id');

		//obtain url for get request from instagram
		var tagRequest = {
			method: 'GET',
			url: 'https://api.instagram.com/v1/tags/'+tag+'/media/recent?access_token='+access_token+'&min_tag_id='+minTag+'&max_tag_id'+maxTag
		}

		//get request for instagram url
		request(tagRequest, function (err, response, body){
			if(err){
				console.log(body);
				res.jsonon('{"result" : "nope"}');
				return;
			}

			var json = JSON.stringify(body);
			console.log(json);
			res.json('{"result" : "'+ json + '"}');
		});

	})

	app.get('/test', function(req, res){
		Helper.getGooglePhoto("CmRdAAAAqJXesNKSz3J08gaotnqNobQvJKfRYXHdcrzHt4D8ehPKzu--U1iR0E8kNgcib1SOkumb5NQ2bSq7acMVFzsRnu8UXDxgu5AmWsyoYeqpQg4YXEqjRcL9YHQj0k4BR8G_EhC85LGEfey1ADlv222N6AVsGhTjKCBiV3CzGHANJQ8kC1xjwDrciw", 1500, request, function(err, body){
				//defining callback function
				if(err){
				console.log(body);
				res.jsonon('{"result" : "nope"}');
				return;
			}
			var ex = JSON.parse(body)
			res.json('{"result" : "'+ ex.result + '"}');
		});


	})	


};