(function() {

    "use strict";
    
    angular
        .module('openpub')
        .controller('pubListController', function(auth, openpubFactory, $firebaseArray, $scope, $mdSidenav, $mdDialog, $state, $mdToast, pubListCategoryService) {
        
        var vm = this;
        vm.auth = auth.ref;
        vm.user = auth.ref.$getAuth();
        vm.researchAreas = pubListCategoryService.getAllElements();

        vm.initController = function () {
            $('.loading').removeClass("hidden");
            AuthenticateUser();
        };

        vm.users = openpubFactory.getAllUsers();

        vm.users.$loaded()
        .then(function(data) {
            console.log(data);
        })
        .catch(function(err) {
            console.error(err);
        });

        vm.users.$watch(function(event) {
            console.log("user array changed");
            console.log(event);
        });

        vm.search = null;
        vm.showPreSearchBar = function() {
            return vm.search == null;
        };
        vm.initiateSearch = function() {
            vm.search = '';
        };
        vm.showSearchBar = function() {
            return vm.search != null
        };
        vm.endSearch = function() {
            return vm.search = null;
        };
        vm.submit = function() {
            console.error('Search function not yet implemented');
        };
        
        function AuthenticateUser() {
            if(vm.user == null) {
                vm.auth.$onAuthStateChanged(function(firebaseUser) {
                    if(firebaseUser == null) {
                        vm.user = null;
                    } else {
                        vm.user = firebaseUser;
                    }
                });
            }
        }

        function LoadResearchAreas() {
            vm.researchAreas = pubListCategoryService.getAllElements();
            vm.researchAreas.$loaded()
            .then(function(resultResearchAreas) {
                vm.researchAreas = resultResearchAreas;
                vm.filteredResearchAreas = vm.researchAreas;
                LoadPubs();
            })
            .catch(function(error) {
                console.log("Error:", error);
            });
        }

        function LoadPubs() {
            $('.loading').addClass("hidden");
        }
    });

})();           