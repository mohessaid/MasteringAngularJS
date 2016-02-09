'use strict';
angular.module('app', [])
  .controller('main', function($scope) {
    $scope.user = {
      name: "Mohammed Essaid MEZERREG",
      address: {
        street: "Lot N 111 Route Larbaa",
        city: "Baraki",
        country: "Algeria"
      },
      friends: ["Yacine", "Nasro", "Imed", "Badro"]
    };


  })
  .directive('userInfoCard', function() {
    return {
      templateUrl: "userInfoCard.html",
      restrict: "E",
      controller: function($scope) {
        $scope.knightMe = function(user) {
          user.rank = "Faris";
        };
      }
    };
  });