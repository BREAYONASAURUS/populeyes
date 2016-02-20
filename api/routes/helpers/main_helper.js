module.exports = function MainHelper()
{
	var helper = this;

	// Helper functions follow this pattern
	this.testing = function(params, callback) {
		
		//Callback should try to keep to style 
		//callback(err, return_val)
		callback(false, testing);
	};

	this.getGooglePhoto = function(photo_ref, minwidth, request, callback) {
		// https://maps.googleapis.com/maps/api/place/photo?key=<api-key>&photo_reference=<photo-ref>&maxwidth=<max-width>
	}
};