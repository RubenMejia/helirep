var app = angular.module('app');

app.controller('loginController', function($scope, LoginResource, $location) {
	$scope.login = function() {
		console.log($scope.Login);
		LoginResource.query(
			{
				NOMBRE_USUARIO: $scope.Login.NOMBRE_USUARIO,
				CONTRASENA: $scope.Login.CONTRASENA
			},
			function(response) {
				console.log(response[0].Login);

				if (response[0].Login == 1) {
					$location.path('/dashboard');
				}
			},
			function(response) {
				console.log(response);
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