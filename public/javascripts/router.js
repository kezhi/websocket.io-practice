angular.module('chatApp',['ngRoute'])
	.config(['$routeProvider', '$locationProvider', function($routeProvider,$locationProvider){

		$routeProvider.when('/',{
			templateUrl:'/pages/home.jade',
			controller:'ChatCtrl'
		});

		$locationProvider.html5Mode(true);
	}])
;