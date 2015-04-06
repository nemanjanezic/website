'use strict';

angular.module('link', []).
    directive('activeLink', ['$location', function(location) {
        return {
            restrict: 'A',
            link: function($scope, element, attrs, controller) {
                var path = attrs.href;
                var clazz = attrs.activeLink;

                $scope.location = location;
                $scope.$watch('location.path()', function(newPath) {
                    if (path === newPath) {
                        element.addClass(clazz);
                    } else {
                        element.removeClass(clazz);
                    }
                });
            }
        };
    }]);

var app = angular.module('app', [
    'ngRoute',
    'ngResource',
    'link'
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
        .when('/about', {
            templateUrl : 'pages/about.html'
        })
        .when('/learn', {
            templateUrl : 'pages/learn.html'
        })
        .when('/not-found', {
            templateUrl : 'pages/not-found.html'
        })
        .otherwise({redirectTo: '/not-found'});

    $locationProvider.html5Mode(true);
});
