angular.module('chatApp',['ngRoute']).config(function($routeProvider,$locationProvider){
		$routeProvider.when('/home',{
			templateUrl:'pages/home',
			controller:'ChatCtrl'
		}).when('/',{
			templateUrl:'pages/login',
			controller:'LoginCtrl'
		}).otherwise({
			redirectTo:'/'
		})


		;
		$locationProvider.html5Mode(true);
	})
;