'use strict';

/* App Module */

var exerciseApp = angular.module('exerciseApp', [
    'ngRoute',     
    'exerciseControllers'
    
]);


exerciseApp.config(['$routeProvider', '$locationProvider',
    function($routeProvider, $locationProvider) {
        $routeProvider.
                when('/', {
                    templateUrl: 'partials/home.html',
                    controller: 'MainCtrl'
                }).when('/exercise1', {
                    templateUrl: 'partials/exercise1.html',
                    controller: 'Exercise1Ctrl'
                }).otherwise({ redirectTo: '/' });

        $locationProvider.html5Mode(false).hashPrefix('!');
    }]);



