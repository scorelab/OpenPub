(function() {
    
    "use strict";
    
    angular
        .module('openpub')
        .service('pubService', function($firebaseArray, $firebaseObject) {
        
        var mainRef         = firebase.database().ref().child("pubs");
        var pubs            = $firebaseArray(mainRef);

        this.CreateNewObject = function (name, description, authers, pubListId, url, tags) {
            var pub = {};
            pub.name = name;
            pub.description = description;
            pub.authers = authers;
            pub.pubListId = pubListId;
            pub.url = url;
            pub.categoryID = categoryID;
            pub.date = date;
            pub.userName = userName;
            pub.UserID = userID;
            pub.Status = status;
            return pub;
        }

        this.getAllElements = function () {
            return pubs;
        };

        this.AddElement = function (pub) {
            return pubs.$add(pub).then(function(ref) {
                var id = ref.key;
                return pubs[pubs.$indexFor(id)];
            });
        };

        this.findPubs = function (pubListId) {
            var requestedPubs = [];
            angular.forEach(requestedPubs, function(value, key){
                if(value.pubListId === pubListId) {
                    requestedPubs.push(value);
                }
            });
            return requestedPubs;
        };

        this.SaveElement = function (element) {
            pubs[pubs.$indexFor(element.$id)] = element;
            return pubs.$save(pubs.$indexFor(element.$id)).then(function(ref) {
                if(ref.key === pubs[2].$id){
                    return true;
                }
            });
        };

        this.findByID = function (id) {
            
        }
    });
})();