// The main app definition
// --> where you should load other module depdendencies
define([
  'ionic',
  'angular-cordova',
  'local-storage',
  'ionic-table'
], function () {
  'use strict';

  // the app with its used plugins
  var app = angular.module('app', [
    'ionic',
    'ionic-table',
    'LocalStorageModule',
    'ngCordova',

  ]);
  // return the app so you can require it in other components
  return app;
});
