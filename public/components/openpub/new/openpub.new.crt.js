(function() {

    "use strict";
    
    angular
        .module('openpub')
        .controller('newopenpubController', function(auth, $scope, $mdSidenav, $mdDialog, $state, $mdToast, $location) {
        
        var vm = this;
        vm.auth = auth.ref;
        vm.user = auth.ref.$getAuth();
        
        vm.htmlVariable = "";

        vm.authenticateUser = authenticateUser;
        vm.researchAreas = ["Machine learning","Image Processing", "Distributed systems", "Artificial Intelligence"];
        vm.readonly = false;
        vm.removable = true;
        vm.tags = [];
        vm.newOpenpub = {};
        vm.newOpenpub.user = "achinthya94";
        function authenticateUser(){
            // if(vm.user == null){
            //     $location.path('/auth')
            // }
        }
        
    });

})();           