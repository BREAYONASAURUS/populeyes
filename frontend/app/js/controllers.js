'use strict';
angular.module('frontendApp.controllers', ['frontendApp.services', 'frontendApp.directives', 'frontendApp.envConfig']);
angular.module('frontendApp.services', []);
angular.module('frontendApp.directives', []);
angular.module('frontendApp.envConfig', [])
.constant('EnvConfig', {
	//Here goes the host IP/URL address needed
  	'instragram': ''

});




