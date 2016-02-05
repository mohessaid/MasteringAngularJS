'use strict';
angular.module('app', [])
  .controller('MainController', function($scope){
    $scope.var1 = true;
    $scope.var2 = false;
    $scope.var1Toggle = function var1Toggle(){
      $scope.var1 = !$scope.var1;
    };
    $scope.var2Toggle = function var2Toggle(){
      $scope.var2 = !$scope.var2;
    };
  });