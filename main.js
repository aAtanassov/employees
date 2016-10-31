employeesApp.controller('main', ['$scope', 'basicService', function ($scope, basicService) {
    $scope.test = { name: 'Hello' };

    $scope.structure = { array: [] };

    var getData = function () {
        basicService.defferedResourceGet().then(function (data) {
            $scope.structure.array = data;
        })
    };

    //$scope.structure.array = getData();
    getData();

}])