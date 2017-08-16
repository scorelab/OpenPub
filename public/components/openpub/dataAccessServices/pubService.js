(function() {
    
    "use strict";
    
    angular
        .module('openpub')
        .service('pubService', function($firebaseArray, $firebaseObject) {
        
        var mainRef         = firebase.database().ref().child("pubs");
        var pubs            = $firebaseArray(mainRef);

        this.CreateNewObject = function (name, description, authers, pubListId, url, userName, userID, isPublic, tags, researchAreaID, peerReviewed, venue) {
            var pub = {};
            pub.name = name;
            pub.description = description;
            pub.authers = authers;
            pub.tags = tags;
            pub.pubListId = pubListId;
            pub.url = url;
            pub.date = Date.now();
            pub.userName = userName;
            pub.UserID = userID;
            pub.isPublic = isPublic;
            pub.researchAreaID = researchAreaID;
            pub.peerReviewed = peerReviewed;
            pub.venue = venue;
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
                if(ref.key === pubs[pubs.$indexFor(element.$id)].$id){
                    return true;
                }
            });
        };

        this.findByID = function (id) {
            var requestedPub = $firebaseObject(mainRef.child(id));
            return requestedPub;
        }
    });
})();