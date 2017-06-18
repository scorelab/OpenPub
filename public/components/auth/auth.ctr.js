(function() {

    "use strict";
    
    angular
        .module('openpub')
        .controller('authController', function(auth, $state, $mdToast) {
        
        var vm = this;
        
        vm.signin = signin;
        
        function signin(){
            vm.auth = null;
            vm.error = null;
            vm.user = null;
            
            auth.ref.$signInWithPopup("google").then(function(auth) {
                vm.auth = auth;
                vm.user = auth.user;
                console.log("Signed in as:", auth);
                showToast(vm.user.displayName+" Signed!!!")
                $state.go('openpub');
            }).catch(function(error) {
                vm.error = error;
                console.error("Authentication failed:", error);
            });
        }
        
        function showToast(message) {
            $mdToast.show(
                $mdToast.simple()
                .content(message)
                .hideDelay(3000)
            );
        }
        console.log("authController");
        
    });

})();