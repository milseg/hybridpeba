var require = {
  baseUrl: 'app',
  paths: {
    'ionic': '../lib/ionic/js/ionic.bundle.min',
    'angular-cordova': '../lib/cordova/ng-cordova',
    'local-storage': '../lib/angular/angular-local-storage',

    // jquery: '../lib/jquery/jquery.min.js'
  },
  // if you are using jquery you have to add a shim for ionic and add jquery as deps
  shim: {
     'local-storage': {deps: ['ionic', 'angular-cordova']},
     'angular-cordova': {deps: ['ionic']}
  }
  // sometimes you need to set the loading priority especially
   /*priority: [
     'ionic',
     'angular-cordova',
     'local-storage'
   ]*/
};
