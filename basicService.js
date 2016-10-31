employeesApp.factory('basicService', ['$http', '$q', function ($http, $q) {

    var productResourceFactory = {};
    productResourceFactory.serviceBase = "http://localhost:3000/";

    var _deferredResourceGet = function (resourceURL) {
        var deferred = $q.defer();

        $http.get('http://localhost:3000/employees', {

        }).success(function (response) {
            deferred.resolve(response);
        }).error(function (err, status) {
            //authService.logOut();
            deferred.reject(err);
        });

        return deferred.promise;
    }

    productResourceFactory.defferedResourceGet = _deferredResourceGet;

    return productResourceFactory;
}])