'use strict';
angular.module("app", [])
  .controller('main', function($rootScope, $scope){
    $scope.translate = function(lang){
      $rootScope.$broadcast("toggleLang", {lang : lang});
    }
  })
  .controller('child', function($rootScope, $scope){
    $rootScope.lang = "xx";
    $scope.toggleLang = function(lang){
      switch (lang){
        case "en" : $scope.text = "Hello"; break;
        case "ar" : $scope.text = "مرحبا"; break;
        case "fr" : $scope.text = "Bounjour"; break;
        default: $scope.text = "never heard of it!"; break;
      }
      return $scope.text;
    };
    
    $scope.$on("toggleLang", function(event, args){
      $rootScope.lang= args.lang;
    });
  });