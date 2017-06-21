(function() {
    
    "use strict";
    
    angular
        .module('openpub')
        .factory('auth', function($firebaseAuth) {
        
        return {
            ref: $firebaseAuth(),
            user: $firebaseAuth().$getAuth()
        }
    });
})();