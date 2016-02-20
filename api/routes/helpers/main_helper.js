module.exports = function MainHelper()
{
	var helper = this;

	// Helper functions follow this pattern
	this.testing = function(params, callback) {
		var testing = ["one", "two", "three"];
		//Callback should try to keep to style 
		//callback(err, return_val)
		callback(false, testing);
	};
};