'use strict';

var app = angular.module('app', [
    'ngRoute',
    'ngResource'
]);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl : 'pages/home.html'
        })
        .when('/get-started', {
            templateUrl : 'pages/get-started.html'
        })
        .otherwise({redirectTo: '/not-found'});

    $locationProvider.html5Mode(true);
});