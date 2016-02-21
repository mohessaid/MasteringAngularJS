'use strict';
angular.module('app', [])
    .controller('main', function($scope){
        $scope.side = "left";
        $scope.switchSide = function(){
            $scope.side = $scope.side == "left"? "right" : "left";
            console.log($scope.side);
        };
    })
    .directive('watching', function(){
        return{
            restrict: "E",
            templateUrl: "watching.html",
            link: function(scope, elem, attr){
                scope.$observe(attr['side'], function(newVal, oldVal){
                    if (newVal !== oldVal){
                        $log("I am watching!");
                    }
                });
            }
        };
    });