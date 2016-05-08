define([
  'app',
  // Load Controllers here
  'controllers/search'
], function (app) {
  'use strict';
  // definition of routes
  app.config([
    '$stateProvider',
    '$urlRouterProvider',
    function ($stateProvider, $urlRouterProvider) {
      $stateProvider
        // app states
        .state('search', {
          url: '/search',
          templateUrl: 'app/templates/search.html',
          controller: 'SearchCtrl'
        })
        .state('deplist', {
          url: '/deplist',
          templateUrl: 'app/templates/deplist.html',
          controller: 'SearchCtrl'
        })
        .state('depdetail', {
          url: '/depdetail',
          templateUrl: 'app/templates/depdetail.html',
          controller: 'SearchCtrl'
        });

      // url routes/states
      $urlRouterProvider.otherwise('search');
    }
  ]);
});
