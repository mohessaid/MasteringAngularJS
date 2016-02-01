'use strict';
angular.module('service1', [])
    .factory('sayings', function(){
        var sayings = ["You look beautiful today!", "How are you?", "You look angry!", "What's new?"];
        var bam = function(name){
            return sayings[name.length % sayings.length];
        };
        
        return {
          sayings : sayings,
          bam : bam
        };
    });