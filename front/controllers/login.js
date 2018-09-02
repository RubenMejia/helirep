
// Definimos una variable "app" y le definomos que VAMOS a user el modulo (app) <- app reucerden 
//que es nombre de enuestra aplicacion que definimos en index.html
var app = angular.module('app');

//Aqui injectamos los componentes que usaremos $scope (obligatorio), loginResource(este seria un servicio que estariamos usando para peticiones)
// y $location (ni idea esto xP)
app.controller('loginController', function($scope, LoginResource, $location) {
	//Esto seria la erstructura de una funcion en angularJs
	//Esta funcion es llamada en views/login/index.html
	$scope.login = function() {
		console.log($scope.Login);
		//Esto es una consulta
		//fijense que NOMBRE_USUARIO Y CONTRASENA, son los nombre con los cuales ENVIARAN los datos al back
		//Estos datos no los proporciona el ng-model accedemos con $scope 
		LoginResource.query(
			{
				NOMBRE_USUARIO: $scope.Login.NOMBRE_USUARIO,
				CONTRASENA: $scope.Login.CONTRASENA
			},
			function(response) { //Respuesta que nos trae el back
				console.log(response[0].Login);
				//hacemos los precosos que sean necesarios con la respuesta 
				if (response[0].Login == 1) {
					$location.path('/dashboard');

				}
			},
			function(response) {
				console.log(response);
				// $location.path('/solicitudes');
			}
		);
	}

	$scope.registro = function() {
		console.log($scope.Registro);
		//Realizar un save (Metodo POST)
		//con un array de todos los datos
		//como segundo parametro,
		//una función anónima que devuelve
		//el response
		LoginResource.save(
			$scope.Registro, 
			function(response) {
				console.log(response)
			}
		);
	}
});