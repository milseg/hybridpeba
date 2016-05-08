// The main app definition
// --> where you should load other module depdendencies
define([
  'ionic',
  'angular-cordova',
  'local-storage'
], function () {
  'use strict';

  // the app with its used plugins
  var app = angular.module('app', [
    'ionic',
    'ngCordova',
    'LocalStorageModule'
  ]);
  // return the app so you can require it in other components
  return app;
});
