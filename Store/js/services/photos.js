app.factory('photos', ['$http', function($http) {
  return $http.get('js/services/store-products.json')
         .success(function(data) {
           return data;
         })
         .error(function(data) {
           return data;
         });
}]);
