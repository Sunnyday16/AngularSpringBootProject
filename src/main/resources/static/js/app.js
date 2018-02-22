
var training = angular.module("training", ['ngRoute']);

training.config(function($routeProvider) {
	$routeProvider
		.when('/all', {
			templateUrl: 'js/partials/table.html',
			controller: 'TableCtrl'
		})
		.otherwise({
			redirectTo: '/all'
		});
	});



