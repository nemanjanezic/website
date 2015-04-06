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
                var hljs_nodes = document.querySelectorAll( 'pre code' );

                for( var i = 0, len = hljs_nodes.length; i < len; i++ ) {
                    var element = hljs_nodes[i];

                    hljs.highlightBlock(element);
                }
            }
        })
        .otherwise({redirectTo: '/not-found'});

    $locationProvider.html5Mode(true);
});
