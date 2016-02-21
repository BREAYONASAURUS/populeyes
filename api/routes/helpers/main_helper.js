module.exports = function MainHelper()
{

	var google_api_key = "AIzaSyAiWu9KZThGJxQjXh1zTIbOvXLm4Sb6UwQ";
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
				callback(true, '{"result" : "failure"}');
			}

			console.log(response.request.uri.href);
			//console.log('{"result" : { "photo_ref" : "'+photo_ref+'", "url" : "'+ response.request.uri.href +'"}}'); //returns photo's url from api information
			console.log(getPhoto.url); //photo's url 
			callback(false, '{"result" : { "photo_ref" : "'+photo_ref+'", "url" : "'+ response.request.uri.href +'"}}');
		});
	}
};