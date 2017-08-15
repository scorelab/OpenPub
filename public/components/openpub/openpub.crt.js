(function() {

    "use strict";
    
    angular
        .module('openpub')
        .controller('openpubController', function(auth, openpubFactory, $firebaseArray, $scope, $mdSidenav, $mdDialog, $state, $mdToast, $location, pubListCategoryService, pubListService) {
        
        var vm = this;
        vm.auth = auth.ref;
        vm.user = auth.ref.$getAuth();
        vm.researchAreas = null;
        vm.filteredResearchAreas = null;
        vm.allPubLists = null;
        vm.filteredPubLists = null;
        vm.selectedResearchAreaName = "All Publication Lists";

        vm.initController = function () {
            $('.loading').removeClass("hidden");
            // var newCategory = pubListCategoryService.CreateNewObject("Artificial Intelligence");
            // pubListCategoryService.AddElement(newCategory)
            //     .then(function(createdCodelabPage) {
            //         alert();
            //     });
            AuthenticateUser();
        }

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

        vm.navigateToPubList = function(pubList) {
            $location.path('/pubList/' + pubList.$id);
        };

        vm.filterByResearchArea = function(ra) {
            if(ra == null) {
                vm.filteredPubLists = [];
                angular.forEach(vm.allPubLists, function(value, key) {
                    if(value.isPublic) {
                        vm.filteredPubLists.push(value);
                    }
                });
                vm.selectedResearchAreaName = "All Publication Lists";
            } else {
                var filteredByArea = $.grep(vm.allPubLists, function(e){ return e.researchAreaID == ra.$id; });
                vm.filteredPubLists = [];
                angular.forEach(filteredByArea, function(value, key) {
                    if(value.isPublic) {
                        vm.filteredPubLists.push(value);
                    }
                });
                vm.selectedResearchAreaName = ra.Name;
            }
        };

        function filterUsingSearch() {
            var filteredByName = $.grep(vm.allPubLists, function(e){ return e.name.toLowerCase().includes(vm.search.toLowerCase()); });
            vm.filteredPubLists = [];
            angular.forEach(filteredByName, function(value, key) {
                if(value.isPublic) {
                    vm.filteredPubLists.push(value);
                }
            });
            vm.selectedResearchAreaName = "Search Results";
        }

        function AuthenticateUser() {
            if(vm.user == null) {
                vm.auth.$onAuthStateChanged(function(firebaseUser) {
                    if(firebaseUser == null) {
                        vm.user = null;
                    } else {
                        vm.user = firebaseUser;
                    }
                    LoadResearchAreas();
                });
            } else {
                LoadResearchAreas();
            }
        }

        function LoadResearchAreas() {
            if(vm.researchAreas == null){
                vm.researchAreas = pubListCategoryService.getAllElements();
                vm.researchAreas.$loaded()
                .then(function(resultResearchAreas) {
                    vm.researchAreas = resultResearchAreas;
                    vm.filteredResearchAreas = vm.researchAreas;
                    LoadPubLists();
                })
                .catch(function(error) {
                    console.log("Error:", error);
                });
            }
            else {
                LoadPubLists();
            }
        }

        function LoadPubLists() {
            if(vm.filteredPubLists == null) {
                vm.allPubLists = pubListService.getAllElements();
                vm.allPubLists.$loaded()
                .then(function(resultPubLists) {
                    vm.allPubLists = resultPubLists;
                    vm.filteredPubLists = [];
                    angular.forEach(vm.allPubLists, function(value, key) {
                        if(value.isPublic) {
                            vm.filteredPubLists.push(value);
                        }
                    });
                    $('.loading').addClass("hidden");
                })
                .catch(function(error) {
                    console.log("Error:", error);
                });
            } else {
                vm.filteredCodelabs = vm.codelabs;
                $('.loading').addClass("hidden");
            }
        }
        // vm.test = function () {
        //     // alert();
        //     // var ref             = firebase.database().ref().child("users");
        //     // var users           = $firebaseArray(ref);
        //     // angular.forEach(users, function(value, key){
        //     //     console.log(key + ': ' + value);
        //     // });
        //     console.log(vm.users);
        // }
        // var users = firebase.database().ref().child("users");

        // vm.addUser = function() {
        //     // $add on a synchronized array is like Array.push() except it saves to the database!
        //     $scope.messages.$add({
        //         from: $scope.user,
        //         content: $scope.message,
        //         timestamp: firebase.database.ServerValue.TIMESTAMP
        //     });

        //     $scope.message = "";
        // };
        
    });

})();           