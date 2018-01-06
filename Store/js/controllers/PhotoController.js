app.controller('PhotoController', ['$scope', 'photos', '$routeParams', function($scope, photos, $routeParams, productService) {
  $scope.detail;

  photos.success(function(data) {
    $scope.detail = data[$routeParams.id];
  });

  $scope.addTo = function(){
      productService.addProduct($scope.detail);
  };
}]);
