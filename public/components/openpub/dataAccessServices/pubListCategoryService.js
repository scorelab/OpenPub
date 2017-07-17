(function() {
    
    "use strict";
    
    angular
        .module('openpub')
        .service('pubListCategoryService', function($firebaseArray, $firebaseObject) {
        
        var mainRef             = firebase.database().ref().child("pubListCategories");
        var pubListCategories   = $firebaseArray(mainRef);

        this.category           = null;

        function RetrieveElements () {
            if(pubListCategories == null){
                mainRef                 = firebase.database().ref().child("pubListCategories");
                pubListCategories       = $firebaseArray(mainRef);
            }
        }

        this.CreateNewObject = function (name) {
            var category = {};
            category.Name = name;
            return category;
        }

        this.getAllElements = function () {
            RetrieveElements();
            return pubListCategories;
        };

        this.AddElement = function(category) {
            return pubListCategories.$add(category).then(function(ref) {
                var id = ref.key;
                return pubListCategories[pubListCategories.$indexFor(id)];
            });
        };
    });
})();