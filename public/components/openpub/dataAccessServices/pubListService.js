(function() {
    
    "use strict";
    
    angular
        .module('openpub')
        .service('pubListService', function($firebaseArray, $firebaseObject) {
        
        var ref                 = firebase.database().ref().child("pubLists");
        var pubLists            = $firebaseArray(ref);

        this.CreateNewObject = function (userID, name, description, tags, userName, researchAreaID, isPublic) {
            var pubList = {};
            pubList.isPublic = false;
            pubList.date = Date.now();
            pubList.userID = userID;
            pubList.name = name;
            pubList.description = description;
            pubList.tags = tags;
            pubList.userName = userName;
            pubList.researchAreaID = researchAreaID;
            pubList.isPublic = isPublic;
            return pubList;
        }
        
        this.getAllElements = function() {
            return pubLists;
        };

        this.getElementsByUserID = function (UserID) {
            return $.grep(pubLists, function(e){ return e.UserID == UserID; });
        }

        this.AddElement = function (pubList) {
            return pubLists.$add(pubList).then(function(ref) {
                var id = ref.key;
                return pubLists[pubLists.$indexFor(id)];
            });
        };

        this.RemoveElement = function (item) {
            return pubLists.$remove(item).then(function(ref) {
                var removed = false;
                if(ref.key === item.$id) {
                    removed = true;
                }
                return removed;
            });
        };

        this.SaveElement = function (element) {
            pubLists[pubLists.$indexFor(element.$id)] = element;
            return pubLists.$save(pubLists.$indexFor(element.$id)).then(function(ref) {
                if(ref.key === pubLists[pubLists.$indexFor(element.$id)].$id){
                    return true;
                }
            });
        };

        this.findByID = function (id) {
            var requestedPubList = $firebaseObject(ref.child(id));
            return requestedPubList;
            // .$loaded().then(function() {
            //     // console.log("loaded record:", obj.$id, obj.someOtherKeyInData);

            //     // // To iterate the key/value pairs of the object, use angular.forEach()
            //     // angular.forEach(obj, function(value, key) {
            //     //     console.log(key, value);
            //     // });
            // });
        };

    });
})();