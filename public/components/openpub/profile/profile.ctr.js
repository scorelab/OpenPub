(function() {

    "use strict";
    
    angular
        .module('openpub')
        .controller('profileController', function(auth, $scope, $mdSidenav, $mdDialog, $state, $mdToast, $location, pubListService) {
        
        var vm = this;
        vm.auth = auth.ref;
        vm.user = auth.ref.$getAuth();
        vm.myPubLists = [];

        vm.initializeController = initializeController;

        vm.navigateToPubList = function(pubList) {
            $location.path('/new/' + pubList.$id);
        };

        function initializeController() {
            authenticateUser();
            vm.myPubLists = pubListService.getElementsByUserID(vm.user.uid);
        }

        function authenticateUser(){
            console.log(vm.myPubLists);
            if(vm.user == null){
                vm.auth.$onAuthStateChanged(function(firebaseUser) {
                    if(firebaseUser == null) {
                        $location.path('/auth');
                    } else {
                        vm.user = firebaseUser;
                        vm.myPubLists = pubListService.getAllElements();
                    }
                });
            }
        }
    });

})();           