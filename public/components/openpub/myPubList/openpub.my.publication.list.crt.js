(function() {

    "use strict";
    
    angular
        .module('openpub')
        .controller('myPubListController', function(auth, openpubFactory, $firebaseArray, $scope, $mdSidenav, $mdDialog, $state, $mdToast, $stateParams, $location, pubService, pubListCategoryService, pubListService) {
        
        var vm = this;
        vm.auth = auth.ref;
        vm.user = auth.ref.$getAuth();
        vm.researchAreas = pubListCategoryService.getAllElements();
        vm.currentPubList = null;
        vm.allPubs = null;
        vm.tags = [];
        vm.pubs = null;
        vm.pubLoadedFlag = false;

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
            filterUsingSearch();
        };
        vm.addNewPub = function () {
            $location.path('/newPub/' + vm.currentPubList.$id);
        };
        vm.goToPub = function (pub) {
            $location.path('/pub/' + pub.$id);
        };

        vm.getStringDate = function (d) {
            var date = new Date(d);
            var monthNames = [
                "January", "February", "March",
                "April", "May", "June", "July",
                "August", "September", "October",
                "November", "December"
            ];

            var day = date.getDate();
            var monthIndex = date.getMonth();
            var year = date.getFullYear();

            return day + ' ' + monthNames[monthIndex] + ' ' + year;
        };

        vm.updatePublic = function (pub) {
            pubService.SaveElement(pub)
            .then(function(saved) {
                if(saved) {
                    //Success
                }
            });
        };

        function filterUsingSearch() {
            var filteredByName = $.grep(vm.allPubs, function(e){ return e.name.toLowerCase().includes(vm.search.toLowerCase()); });
            vm.pubs = [];
            angular.forEach(filteredByName, function(value, key) {
                vm.pubs.push(value);
            });
            vm.selectedResearchAreaName = "Search Results";
        }
        
        function AuthenticateUser() {
            if(vm.user == null) {
                vm.auth.$onAuthStateChanged(function(firebaseUser) {
                    if(firebaseUser == null) {
                        vm.user = null;
                        if($stateParams.pubListId == null) {
                            $location.path('/')
                        } else {
                            LoadComponents();
                        }
                    } else {
                        vm.user = firebaseUser;
                        if($stateParams.pubListId == null) {
                            $location.path('/')
                        } else {
                            LoadComponents();
                        }
                    }
                });
            } else {
                LoadComponents();
            }
        }

        function LoadComponents() {
            vm.currentPubList = pubListService.findByID($stateParams.pubListId);
            vm.tags = vm.currentPubList.tags;
            vm.currentPubList.$loaded().then(function() {
                vm.tags = vm.currentPubList.tags;
                LoadPubs();
            });
            // if(vm.currentPubList == null){
            //     vm.tags = vm.currentPubList.tags;
            //     vm.currentPubList = pubListService.findByID($stateParams.pubListId);
            // }
            // vm.researchAreas = pubListCategoryService.getAllElements();
            // vm.researchAreas.$loaded()
            // .then(function(resultResearchAreas) {
            //     vm.researchAreas = resultResearchAreas;
            //     vm.filteredResearchAreas = vm.researchAreas;
            //     LoadPubs();
            // })
            // .catch(function(error) {
            //     console.log("Error:", error);
            // });
        }

        function LoadPubs() {
            vm.pubs = pubService.findPubs(vm.currentPubList.$id);
             if(vm.pubs == null || vm.pubLoadedFlag == false){
                var allPubs = pubService.getAllElements();
                allPubs.$loaded()
                .then(function(result) {
                    vm.pubLoadedFlag = true;
                    allPubs = result;
                    vm.pubs = $.grep(allPubs, function(e){ return e.pubListId == vm.currentPubList.$id; })
                    vm.allPubs = vm.pubs;
                    $('.loading').addClass("hidden");
                })
                .catch(function(error) {
                    console.log("Error:", error);
                });
            } else {
                $('.loading').addClass("hidden");
            }
        }
    });

})();           