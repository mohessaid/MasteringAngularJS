'use strict';
angular.module('app', [])
    .controller('main', function($scope){
        $scope.langDir = "left";
        $scope.switchDir = function(){
            $scope.langDir = $scope.langDir === "left"? "right" : "left";
        }
        $scope.keepDir = function(){
            $scope.langDir = $scope.langDir;
        }
    })
    .directive('side', function(){
        return {
            restrict: "A",
            link: function($scope, iElem, iAttrs){
                console.log("I'am in link");
                iAttrs.$observe("side", function(value){
                    console.log(iElem);
                    console.log(newVal + "y");
                    iElem.$addClass(newVal + "y");
                    
                });
            }
        };
    });
    