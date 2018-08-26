//Este es un archivo de CONFIGURACIÓN para la app
//y las vistas de angular
var app = angular.module('app', ['ngResource', 'ngRoute']);

app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		templateUrl : 'views/login/index.html'
	})
	.when('/login',{
		templateUrl : 'views/login/index.html',
		controller : 'loginController'
	})
	.when('/dashboard',{
		templateUrl : 'views/dashboard/index_2.html',
		controller : 'dashboardController'
	})
	.otherwise({
		redirectTo : '/'
	});
});