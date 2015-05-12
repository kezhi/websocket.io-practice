angular.module('chatApp',['ngRoute'])
	.run(function ($window, $http, $rootScope, $location) {
		//$window.moment.lang('zh-cn');
		$http({
			url: '/api/validate',
			method: 'GET'
		}).success(function (user) {
			$rootScope.me = user
			$location.path('/home')
		}).error(function (data) {
			$location.path('/')
		});

		$rootScope.$on('login', function (evt, me) {
			$rootScope.me = me
		})
	})
	.config(function($routeProvider,$locationProvider){
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