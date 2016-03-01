'use strict';
angular.module('app', [])
    .controller('main', function($scope){
        $scope.editable = false;
        $scope.edit = function(){
            $scope.editable = !$scope.editable;
        }
    })
    .directive('editable', function(){
        return {
            restrict: "A",
            scope: true,
            link: function($scope, iElem, iAttrs){
                $scope.$watch("editable", function(newVal, oldVal){
                   if (newVal !== oldVal) {
                       console.log("It's surrely different!");
                       if (newVal){
                           console.log("It's true also");
                           console.log("iElem.html : ", iElem.html());
                           console.log(iElem);
                           iElem.data("oldContent", iElem.html());
                           console.log(iElem.data("oldContent"));
                           iElem.html('<input type="text" value="'+ iElem.data("oldContent") + '" />');
                       } else {
                           console.log("I am false");
                           console.log(iElem.find("input").val());
                           iElem.data("newVal", iElem.find("input").val());
                           iElem.html(iElem.data("newVal"));
                       }
                   }
                });
            }
        };
    });
    