(function() {

  "use strict";

  angular
      .module('openpub', ['ngMaterial', 'ui.router', 'firebase'])
      .config(function($mdThemingProvider, $stateProvider, $urlRouterProvider) {
      
      $mdThemingProvider.theme('default')
        .primaryPalette('green')
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
          url: '/newPub',
          templateUrl: 'components/openpub/newPublication/openpub.new.publication.tpl.html',
          controller: 'newPubController as vm'
        });
      
  });
})();