var app = angular.module('app');

app.factory('LoginResource', function($resource) {
	return $resource("http://localhost:8000/login");
});