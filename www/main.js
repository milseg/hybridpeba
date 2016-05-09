var require = {
  baseUrl: 'app',
  paths: {
    'ionic': '../lib/ionic/js/ionic.bundle.min',
    'ionic-table': '../lib/ionic-table/ionic-table',
    'angular-cordova': '../lib/cordova/ng-cordova',
    'local-storage': '../lib/angular/angular-local-storage.min',
    'jquery': '../lib/jquery/jquery.min'
  },
  // if you are using jquery you have to add a shim for ionic and add jquery as deps
  shim: {
     'ionic': {deps: ['jquery']},
     'angular-cordova': {exports: 'ngCordova', deps: ['ionic']},
     'local-storage': {exports: 'LocalStorageModule', deps: ['ionic']},
     'ionic-table': {deps: ['ionic', 'jquery']}
  },
  // sometimes you need to set the loading priority especially
   priority: [
     'jquery',
     'ionic'
   ]
};
