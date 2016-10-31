var employeesApp = angular.module('employeesApp', ['ngResource', 'ngRoute', 'ui.bootstrap'])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/',
            {
                templateUrl: 'index.html',
                controller: 'mainController'
            })
 
    });