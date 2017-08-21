(function() {

    "use strict";
    
    angular
        .module('openpub')
        .controller('pubController', function(auth, openpubFactory, $firebaseArray, $scope, $mdSidenav, $mdDialog, $state, $mdToast, $stateParams, $location, pubService, pubListCategoryService) {
        
        var vm = this;
        vm.auth = auth.ref;
        vm.user = auth.ref.$getAuth();
        vm.researchAreas = [];
        vm.filteredResearchAreas = [];
        vm.publication = null;

        vm.initController = function () {
            $('.loading').removeClass("hidden");
            // var newCategory = pubListCategoryService.CreateNewObject("Artificial Intelligence");
            // pubListCategoryService.AddElement(newCategory)
            //     .then(function(createdCodelabPage) {
            //         alert();
            //     });
            AuthenticateUser();
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

        vm.GoTOEditPub = function () {
            $location.path('/editPub/' + vm.publication.$id);
        };

        function AuthenticateUser() {
            if(vm.user == null) {
                vm.auth.$onAuthStateChanged(function(firebaseUser) {
                    if(firebaseUser == null) {
                        // $location.path('/auth');
                        if($stateParams.pubID == null) {
                            $location.path('/')
                        } else {
                            LoadPublication();
                        }
                    } else {
                        vm.user = firebaseUser;
                        if($stateParams.pubID == null) {
                            $location.path('/')
                        } else {
                            LoadPublication();
                        }
                    }
                });
            } else {
                LoadPublication();
            }
        }

        function LoadPublication() {
            vm.publication = pubService.findByID($stateParams.pubID);
            vm.publication.$loaded().then(function() {
                $('.loading').addClass("hidden");
            });
        }

        function LoadPubLists() {
            $('.loading').addClass("hidden");
        }
    });

})();           