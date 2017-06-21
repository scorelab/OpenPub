(function() {
    
    "use strict";
    
    angular
        .module('openpub')
        .factory('openpubFactory', function($firebaseArray) {
        
        var openpubFactory = {};
        var userRef         = firebase.database().ref().child("users");
        var users           = $firebaseArray(userRef);

        openpubFactory.getAllUsers = function() {
            return users;
        }

        return openpubFactory;
    });
})();