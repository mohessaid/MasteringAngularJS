'use strict';
angular.module('app', [])
  /**
   * @Category controoler
   * @Name main
  */
  .controller('main', function($scope) {
    $scope.user1 = {
      name: "Mohammed Essaid MEZERREG",
      address: {
        street: "Lot N 111 Route Larbaa",
        city: "Baraki",
        country: "Algeria"
      },
      friends: ["Yacine", "Nasro", "Imed", "Badro"]
    };
    $scope.user2 = {
      name: "Kjii Kieo",
      address: {
        street: "Rue 39 Koie",
        city: "Koij",
        country: "Skdi"
      },
      friends: ["RE", "DZz", "Efs", "Emsd"]
    };



  })
  /**
   * @Category directive
   * @name userInfoCard
   * @type element
   * @scope isolated Scope
   * @Description : This directive is acting as user info card
   * it has an isolated scope so you must pass user info to it.
  */
  .directive('userInfoCard', function() {
    return {
      templateUrl: "userInfoCard.html",
      restrict: "E",
      scope: {
        user: '=person',
        initialCollapsed: '@collapsed'
      },
      controller: function($scope) {
        $scope.collapsed = ($scope.initialCollapsed == 'true');
        $scope.knightMe = function(user) {
          user.rank = "Faris";
        };

        $scope.collapse = function() {
          $scope.collapsed = !$scope.collapsed;
        };
        $scope.removeFriend = function(friend){
          var indx = $scope.user.friends.indexOf(friend);
          if (indx > -1){
            $scope.user.friends.splice(indx, 1);
          }
        };
      }
    };
  })
  .directive('removeFriend', function(){
    return {
      restrict: "E",
      templateUrl: "removeFriend.html",
      scope: {
        notifyParent : "&method"
      },
      controller: function($scope){
        $scope.removing = false;
        $scope.startRemove = function(){
          $scope.removing = true;
        };
        $scope.cancelRemove = function(){
          $scope.removing = false;
        };
        $scope.confirmRemove = function(){
          $scope.notifyParent();
        };
      }
    };
  })
  /**
   * @Category directive
   * @name userInfoCard
   * @type element
   * @scope inherited
   * @Description : This directive is acting as an address in
   * user info card :) sick. It has something special, just try
   * to click on the address in the result :). Then click one
   * more time.
  */
  .directive('address', function() {
    return {
      templateUrl: "address.html",
      restrict: "E",
      scope: true,
      controller: function($scope) {
        $scope.collapsed = false;
        $scope.collapseAddress = function() {
          $scope.collapsed = true;
        };
        $scope.expandAddress = function() {
          $scope.collapsed = false;
        }
      }
    };
  });