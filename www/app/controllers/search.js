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
      var searchContext; //current search query
      var p; //current page

      var getCurrentPage = function () {
        if(!p) {
          p = localStorageService.get('page');
        }
        return p;
      };

      var getSearchContext = function () {
        if(!searchContext) {
          searchContext = localStorageService.get('searchContext');
        }
        return searchContext;
      };

      var incPage = function () {
        p++;
        localStorageService.set('page', p);
      };



      var initContext = function (search) {
        searchContext = search;
        p = 1;
        localStorageService.set('searchContext', search);
        localStorageService.set('page', p);
        if($rootScope.deputados) {
          $rootScope.deputados.length = 0;
        } else {
          $rootScope.deputados = [];
        }

        localStorageService.set('hasMore', true);
      };

      var loadDeps = function (search, page) {
        depService.loadDeps(search, page).then(function (data) {
          if(data.length === 0) {
            $scope.hasMore = false;
            $scope.$broadcast('scroll.infiniteScrollComplete');
            $state.go('deplist');
            return;
          }
          //pre-condition: $rootScope.deputados is an array
          $rootScope.deputados.pushArrayMembers(data);

          if(localStorageService.isSupported) {
            localStorageService.set('deputados', $rootScope.deputados);
          } else {
            console.log("localStorage not supported");
          }
          $scope.$broadcast('scroll.infiniteScrollComplete');
          $state.go('deplist');
        }, function (err) {
          console.log("Erro", err);
          //alert(""+err);
        });
      };
      /*
      * get deputados info according to search
      */
      $scope.dig = function (search) {
        if(!search) {
          search = "";
        }
        initContext(search);
        loadDeps(search, 1);
      };

      $scope.hasMoreDeps = function () {
        if($scope.hasMore === undefined) {
          $scope.hasMore = localStorageService.get('hasMore');
        }
        //console.log("hasMOre", $scope.hasMore);
        return $scope.hasMore;
      };

      $scope.loadMore = function () {
        //console.log("load more");
        incPage();
        loadDeps(getSearchContext(), getCurrentPage());
        return;
      };

      /*
      * get deputado info
      */
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
      //it is needed when testing in a browser
      if(!$rootScope.deputados) {
        $rootScope.deputados = localStorageService.get('deputados');
      }

      if(!$scope.deputado) {
        $scope.deputado = localStorageService.get('deputado');
      }
    }
  ]);
});
