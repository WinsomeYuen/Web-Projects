var app = angular.module('GalleryApp', ['ngRoute']);

app.config(function($routeProvider) {
  $routeProvider
    .when("/", {
      controller: "HomeController",
      templateUrl: "views/home.html"
    })
    .when("/photos/:id", {
      controller: "PhotoController",
      templateUrl: "views/photo.html"
    })
    .when('/cart', {
      controller: 'CartController',
      templateUrl: "views/cart.html"
    })
    .otherwise({
      redirectTo: "/"
    });
});

app.service('productService', function() {
    var productList = [{title: "Bag", price: "20"}];

    this.addProduct = function(newObj) {
        productList.push(newObj);
    }

    this.getProducts = function(){
        return productList;
    }

    return {
        addProduct: addProduct,
        getProducts: getProducts
    }
});
