'use strict';
angular.module('app', ['service1'])
    .controller('MainCrtl',['sayings', function($sayings){
        var main = this;
        main.name = "";
        main.plus = $sayings.bam;
    }]);