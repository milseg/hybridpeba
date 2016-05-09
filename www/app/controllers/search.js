define([
  'app',
  'services/depService',
  'local-storage'
], function (app) {
  'use strict';

  app.controller('SearchCtrl', [
    '$scope',
    '$rootScope',
    '$state',
    'depService',
    'localStorageService',
    function ($scope, $rootScope, $state, depService, localStorageService) {
      $scope.dig = function (search) {
        depService.loadDeps(search).then(function (data) {
          if(localStorageService.isSupported) {
            localStorageService.set('deputados', data);
          } else {
            console.log("localStorage not supported");
          }

          $scope.deputados = data;
          $state.go('deplist');
        }, function (err) {
          console.log("Erro", err);
        });
      };

      $scope.info = function (dep) {
        $scope.deputado = dep;
        depService.getDep(dep).then(function (data) {
          $scope.deputado.gastos = data;
          localStorageService.set('deputado', $scope.deputado);
          $state.go('depdetail');
        }, function (err) {
          console.log("Erro", err);
        });

      };

      if(!$scope.deputados) {
        $scope.deputados = localStorageService.get('deputados');
      }

      if(!$scope.deputado) {
        $scope.deputado = localStorageService.get('deputado');
      }
    }
  ]);
});
