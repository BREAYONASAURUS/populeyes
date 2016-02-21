module.exports = function MainHelper()
{

	var google_api_key = "AIzaSyAn0xf1my9qbGerLxNSSWvk_xE67gbXA38";
	var helper = this;

	// Helper functions follow this pattern
	this.testing = function(params, callback) {
		
		//Callback should try to keep to style 
		//callback(err, return_val)
		callback(false, testing);
	};

	this.getGooglePhoto = function(photo_ref, maxwidth, request, callback) {
		var getPhoto = {
			method:'GET',
			url: 'https://maps.googleapis.com/maps/api/place/photo?key='+ google_api_key +'&photo_reference=' + photo_ref + '&maxwidth='+maxwidth
		}

		request(getPhoto, function(err, response, body){
			if(err){
			console.log(body);
			callback(true, '{"result" : "failure"}');
			}

			//console.log(response.request.uri.href); //returns photo's url from api information
			//console.log(getPhoto.url); //photo's url 
			callback(false, '{"result" : "'+ response.request.uri.href +'"}');
		})

	// this.get('/google/getphoto', function (req, res){




	// 		var json = JSON.stringify(body);
	// 		console.log(json);
	// 		res.json('{"result" : "'+ json + '"}');

	// })


	}
};