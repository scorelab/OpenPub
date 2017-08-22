(function() {

    "use strict";
    
    angular
        .module('openpub')
        .controller('editPubController', function(auth, $scope, $mdSidenav, $mdDialog, $state, $mdToast, $location, $stateParams, pubService, pubListCategoryService) {
        
        var vm = this;
        vm.auth = auth.ref;
        vm.user = auth.ref.$getAuth();
        vm.publication = null;
        
        vm.htmlVariable = "";
        vm.readonly = false;
        vm.removable = true;
        vm.authenticateUser = authenticateUser;
        vm.researchAreas = pubListCategoryService.getAllElements();
        vm.name = "";
        vm.description = "";
        vm.authers = [];
        vm.tags = [];
        vm.pubListId = $stateParams.pubListID;
        vm.url = "";
        vm.isPublic = false;
        vm.researchArea = null;
        vm.peerReviewed = false;
        vm.venue = "";
        vm.clickedFirstTime = false;

        vm.UpdateElement = function () {
            vm.clickedFirstTime = true;
            if(vm.publication.name != null && vm.publication.description != null && vm.researchArea != null && vm.publication.authers.length != 0 && vm.publication.url != null && vm.publication.venue != null){
            vm.publication.researchAreaID = vm.researchArea.$id;
            pubService.SaveElement(vm.publication)
            .then(function(saved) {
                if(saved) {
                    $location.path('/pub/' + $stateParams.pubID);
                }
            });
            }
        };

        vm.CancelBtnClicked = function () {
            $location.path('/pub/' + $stateParams.pubID);
        };

        function ValidatePub(firebaseUser) {
            if(firebaseUser == null) {
                $location.path('/auth');
            } else {
                vm.user = firebaseUser;
                vm.researchAreas = pubListCategoryService.getAllElements();
                var ras = $.grep(vm.researchAreas, function(e){ return e.$id == vm.publication.researchAreaID; });
                vm.researchArea = ras[0];
                if($stateParams.pubID == null || vm.publication == null || vm.publication.UserID != vm.user.uid) {
                    $location.path('/myPubList')
                }
                $('.loading').addClass("hidden");
            }
        }

        function LoadPublication(firebaseUser) {
            vm.publication = pubService.findByID($stateParams.pubID);
            
            vm.publication.$loaded().then(function() {
                ValidatePub(firebaseUser);
            });
        }

        function authenticateUser(){
            if(vm.user == null){
                vm.auth.$onAuthStateChanged(function(firebaseUser) {
                    LoadPublication(firebaseUser);
                });
            } else {
                LoadPublication(vm.user);
            }
        }
        
    });

})();           