(function() {

    "use strict";
    
    angular
        .module('openpub')
        .controller('openpubController', function(auth, openpubFactory, $firebaseArray, $scope, $mdSidenav, $mdDialog, $state, $mdToast) {
        
        var vm = this;
        vm.auth = auth.ref;
        vm.user = auth.ref.$getAuth();
        
        console.log("authObj", auth);
        console.log("vmObj", vm);

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