'use strict';
angular.module('frontendApp.controllers').controller('MainCtrl', function($rootScope, $scope, $state, $timeout, HttpService) {
    $scope.locations = {
        "choice": "Please Select Location",
        "options": {
            "0": "San Fransisco",
            "1": "Chicago",
            "2": "New York City",
            "3": "Houston",
            "4": "Los Angeles",
            "5": "Philadelphia",
            "6": "Phoenix",
            "7": "Minneapolis",
            "8": "Ames",
            "9": "Denver",
            "10": "Iowa State University",
            "11": "Boston"
        }
    }

    $scope.locationCoor = {
        "San Fransisco" : {
            "lat" : "37.7833",
            "long" : "-122.4167"
        },
        "Chicago" : {
            "lat": "41.8369",
            "long" : "-87.6847"
        },
        "New York City" : {
            "lat": "40.7127",
            "long" : "-74.0059"
        },
         "Houston" : {
            "lat": "29.7604",
            "long" : "-95.3698"
        },
        "Los Angeles" : {
           "lat": "34.0500",
            "long": "-118.2500"
        },
        "Philadelphia":{
            "lat": "39.9500",
            "long": "-75.1667" 
        },
         "Phoenix":{
            "lat": "33.4500",
            "long": "-112.0667" 
        },
         "Minneapolis":{
            "lat": "44.9778",
            "long": "-93.2650" 
        },
        "Ames": {
            "lat": "42.0347",
            "long": "-93.6200"
        },
        "Denver": {
           "lat": "39.7392",
            "long": "-104.9903" 
        },
        "Iowa State University":{
           "lat": "42.0239",
            "long": "-93.6476" 
        },
        "Boston":{
            "lat": "42.3601",
            "long": "-71.0589" 
        }
    }
	$scope.validCountry = false;
	$scope.validCity = false;
	$scope.country = "";
	$scope.city = "";
    $scope.photos = {};

	$scope.hitInstragram = function() {
    	HttpService.getRequest('api', '/insta/auth',function(err, data){
            if(!err) {
               console.log(data);

            }  else {
                console.log(data);
            }
        });
    };

    $scope.search = function() {
        if($scope.locations.choice == "") console.log("Invalid Place");
        else {
            var lat = $scope.locationCoor[$scope.locations.choice].lat; 
            var lon = $scope.locationCoor[$scope.locations.choice].long; 
            var name = $scope.locations.choice;
            name = name.replace(/\s+/g, ',');
            var radius = "5000"
            HttpService.getRequest('api', '/place/photos?lat='+lat+'&long='+lon+'&name-of-city='+name+'&radius-in-meters='+radius,function(err, data){
                if(!err) {
                   $scope.photos = JSON.parse(data).result;
                   console.log(JSON.stringify(JSON.parse(data).result));
                }  else {
                     console.log(JSON.stringify(data));
                }
            });
        }
    }
});
