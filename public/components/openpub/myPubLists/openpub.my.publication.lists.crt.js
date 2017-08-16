(function() {

    "use strict";
    
    angular
        .module('openpub')
        .controller('myPubListsController', function(auth, openpubFactory, $firebaseArray, $scope, $mdSidenav, $mdDialog, $state, $mdToast, $location, pubListCategoryService, pubListService) {
        
        var vm = this;
        vm.auth = auth.ref;
        vm.user = auth.ref.$getAuth();
        vm.researchAreas = [];
        vm.filteredResearchAreas = [];
        vm.allPubLists = null;
        vm.filteredPubLists = null;
        vm.loadPubListFlag = false;
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
            $location.path('/myPubList/' + pubList.$id);
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

        vm.filterByResearchArea = function(ra) {
            if(ra == null) {
                vm.filteredPubLists = vm.allPubLists;
                vm.selectedResearchAreaName = "All Publication Lists";
            } else {
                vm.filteredPubLists = $.grep(vm.allPubLists, function(e){ return e.researchAreaID == ra.$id; });
                vm.selectedResearchAreaName = ra.Name;
            }
        };

        vm.updatePublic = function (pubList) {
            pubListService.SaveElement(pubList)
            .then(function(saved) {
                if(saved) {
                    //Success
                }
            });
        };

        function filterUsingSearch() {
            var filteredByName = $.grep(vm.allPubLists, function(e){ return e.name.toLowerCase().includes(vm.search.toLowerCase()); });
            vm.filteredPubLists = filteredByName;
            vm.selectedResearchAreaName = "Search Results";
        }

        function AuthenticateUser() {
            if(vm.user == null) {
                vm.auth.$onAuthStateChanged(function(firebaseUser) {
                    if(firebaseUser == null) {
                        vm.user = null;
                        $location.path('/auth');
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
            vm.researchAreas = pubListCategoryService.getAllElements();
            vm.researchAreas.$loaded()
            .then(function(resultResearchAreas) {
                vm.researchAreas = resultResearchAreas;
                // vm.filteredResearchAreas = vm.researchAreas;
                LoadPubLists();
            })
            .catch(function(error) {
                console.log("Error:", error);
            });
        }

        function LoadPubLists() {
            if(vm.filteredPubLists == null){
                vm.filteredPubLists = pubListService.getElementsByUserID(vm.user.uid);
                var allPubLists = pubListService.getAllElements();
                allPubLists.$loaded()
                .then(function(result) {
                    vm.allPubLists = result;
                    vm.filteredPubLists = $.grep(vm.allPubLists, function(e){ return e.userID == vm.user.uid; })
                    FilterResearchAreas();
                    $('.loading').addClass("hidden");
                })
                .catch(function(error) {
                    console.log("Error:", error);
                });
            } else {
                FilterResearchAreas();
                $('.loading').addClass("hidden");
            }
        }

        function FilterResearchAreas() {
            angular.forEach(vm.researchAreas, function(value, key) {
                var pubListForRA = $.grep(vm.filteredPubLists, function(e){ return e.researchAreaID == value.$id; })
                if(pubListForRA.length > 0) {
                    vm.filteredResearchAreas.push(value);
                }
            });
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