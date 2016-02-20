// !javascript
// spec/run-spec.js
//-----------------------
//      Uses Jasmine 1.3.1
//-----------------------
var MainHelper = require("../../routes/helpers/main_helper.js");
var Helper = new MainHelper();

describe("MainHelper", function () {
	describe("testing()", function () {
		it("returns an array of 3 elements in its callback", function () {
			var params = {};
			Helper.testing(params, function(err, val){
				expect(val.length).toEqual(3);
			});
		});
	});
});
//Use Helper to call and test main helper functions