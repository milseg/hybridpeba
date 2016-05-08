define([
  'app',
  'services/depService'
], function (app) {
  'use strict';

  app.controller('SearchCtrl', [
    '$scope',
    '$rootScope',
    '$state',
  //  'localStorageService',
    'depService',
    function ($scope, $rootScope, $state, depService) {
      $scope.dig = function (search) {
        depService.loadDeps(search).then(function (data) {
          //$scope.deputados = data;
          //localStorageService.set('deputados', data);
          $rootScope.deputados = data;
          console.log("Deputados: ", data);
          $state.go('deplist');
        }, function (err) {
          console.log("Erro", err);
        });
      };

      $scope.info = function (dep) {
        $rootScope.deputado = dep;
        depService.getDep(dep).then(function (data) {
          $rootScope.deputado.gastos = data;
        }, function (err) {
          console.log("Erro", err);
        });
        $state.go('depdetail');
      };

      if(!$scope.deputados) {
      //  $scope.deputados = localStorageService.get('deputados');
      }
    }
  ]);
});
