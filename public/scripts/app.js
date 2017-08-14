(function() {

  "use strict";

  angular
      .module('openpub', ['ngMaterial', 'ui.router', 'firebase'])
      .config(function($mdThemingProvider, $stateProvider, $urlRouterProvider) {
      
      $mdThemingProvider.theme('default')
        .primaryPalette('teal')
        .accentPalette('light-blue');
      
      $urlRouterProvider.otherwise('/');
      
      $stateProvider
        .state('auth', {
            url: '/auth',
            templateUrl: 'components/auth/auth.tpl.html',
            controller: 'authController as vm'
        })
        .state('openpub', {
          url: '/',
          templateUrl: 'components/openpub/openpub.tpl.html',
          controller: 'openpubController as vm'
        })
        .state('newpublist', {
          url: '/newPubList',
          templateUrl: 'components/openpub/newPublicationList/openpub.new.publication.list.tpl.html',
          controller: 'newPubListController as vm'
        })
        .state('newpub', {
          url: '/newPub/:pubListId',
          templateUrl: 'components/openpub/newPublication/openpub.new.publication.tpl.html',
          controller: 'newPubController as vm'
        })
        .state('profile', {
          url: '/profile',
          templateUrl: 'components/openpub/profile/profile.tpl.html',
          controller: 'profileController as vm'
        })
        .state('pubList', {
          url: '/pubList/:pubListId',
          templateUrl: 'components/openpub/publicationList/publication.list.html',
          controller: 'pubListController as vm'
        })
        .state('myPubList', {
          url: '/myPubList',
          templateUrl: 'components/openpub/myPubList/openpub.my.publication.list.tpl.html',
          controller: 'myPubListController as vm'
        })
        .state('pub', {
          url: '/pub/:pubID',
          templateUrl: 'components/openpub/publication/openpub.publication.tpl.html',
          controller: 'pubController as vm'
        });
      
  });
})();
angular.module('openpub').directive('ngEnter', function() {
    return function(scope, element, attrs) {
        element.bind("keydown keypress", function(event) {
            if(event.which === 13) {
                scope.$apply(function(){
                    scope.$eval(attrs.ngEnter, {'event': event});
                });

                event.preventDefault();
            }
        });
    };
});