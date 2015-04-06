'use strict';

var app = angular.module('app', [
    'ngRoute',
    'ngResource'
]);

hljs.initHighlightingOnLoad();

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
        .when('/', {
            templateUrl : 'pages/home.html'
        })
        .when('/get-started', {
            templateUrl : 'pages/get-started.html',
            controller: function($scope) {
                $('.hljs').each(function(i, block) {
                    window.hljs.highlightBlock(block);
                });
            }
        })
        .otherwise({redirectTo: '/not-found'});

    $locationProvider.html5Mode(true);
});
