(function() {

    "use strict";
    
    angular
        .module('openpub')
        .controller('newPubListController', function(auth, $scope, $mdSidenav, $mdDialog, $state, $mdToast, $location, pubListCategoryService, pubListService) {
        
        var vm = this;
        vm.auth = auth.ref;
        vm.user = auth.ref.$getAuth();
        
        vm.htmlVariable = "";

        vm.authenticateUser = authenticateUser;
        vm.researchAreas = pubListCategoryService.getAllElements();
        vm.readonly = false;
        vm.removable = true;
        vm.tags = [];
        vm.listName = null;
        vm.listDescription = null;
        vm.researchArea = null;
        vm.isPublic = false;

        vm.CreateElement = function () {
            if(vm.listName != null && vm.listDescription != null && vm.researchArea != null){
                var newPubList = pubListService.CreateNewObject(vm.user.uid, vm.listName, vm.listDescription, vm.tags, vm.user.displayName, vm.researchArea.$id, vm.isPublic);
                pubListService.AddElement(newPubList)
                .then(function(createdList) {
                    newPubList = createdList;
                    $location.path('/pubList/' + createdList.$id);
                });
            }
        };

        function authenticateUser(){
            if(vm.user == null){
                vm.auth.$onAuthStateChanged(function(firebaseUser) {
                    if(firebaseUser == null) {
                        $location.path('/auth');
                    } else {
                        vm.user = firebaseUser;
                        vm.researchAreas = pubListCategoryService.getAllElements();
                    }
                });
            }
        }

        
    });

})();           