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
	.otherwise({
		redirectTo : '/'
	});
});