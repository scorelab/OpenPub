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
        .state('newopenpub', {
          url: '/new',
          templateUrl: 'components/openpub/new/openpub.new.tpl.html',
          controller: 'newopenpubController as vm'
        });
      
  });
})();