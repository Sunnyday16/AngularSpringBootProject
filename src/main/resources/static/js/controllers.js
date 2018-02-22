
training.controller('TableCtrl', ['$scope','$http', function($scope,$http) {
	$scope.message = 'Retrieving information from an open API';
 $http({
    method: 'GET',
    url: 'https://jsonplaceholder.typicode.com/posts'
  }).then(function successCallback(response) {
    $scope.posts =response.data
    }, function errorCallback(response) {
      
    });
 
}]);


