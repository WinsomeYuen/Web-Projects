app.controller('CartController', ['$scope', function($scope, productService) {
    $scope.products = productService.getProducts();
}]);