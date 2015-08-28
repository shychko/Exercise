'use strict';

/* Controllers */

var exerciseControllers = angular.module('exerciseControllers', []);



exerciseControllers.controller('MainCtrl', ['$scope', '$location', '$http',
    function MainCtrl($scope, $location, $http) {
        $scope.message = "This is the HOME View";
    }]);

exerciseControllers.controller('Exercise1Ctrl', ['$scope', '$location', '$http',
    function ShowCtrl($scope, $location, $http) {
        $scope.message = "This is the Exercise1 View";
    }]);