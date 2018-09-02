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
	.when('/solicitudes',{
		templateUrl : 'views/solicitudes/solicitudes.html',
		controller : 'solicitudesController'
	})
	.when('/dashboard_m',{
		templateUrl : 'views/dashboard_m/index_mecanico.html',
		controller : 'dashboard_m_Controller'
	})
	.when('/solicitar',{
		templateUrl : 'views/solicitar/solicitar.html',
		controller : 'solicitarController'
	})	
	.when('/usuarios',{
		templateUrl : 'views/usuarios/usuarios.html',
		controller : 'usuariosController'
	})	
	.otherwise({
		redirectTo : '/'
	});
});