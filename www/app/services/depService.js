define([
  'app',
  'services/webService'
], function (app) {
  'use strict';

  app.service('depService', [
    'webService',
    '$q',
    function (webService, $q) {
      this.loadDeps = function (query) {
        var deffer = $q.defer();
        webService.getList(query).then(function (response) {
          deffer.resolve(response.data);
        }, function (err) {
          deffer.reject(err);
        });
        return deffer.promise;
      };

      this.getDep = function (dep) {
        var deffer = $q.defer();
        webService.getDep(dep).then(function (response) {
          deffer.resolve(response.data);
        }, function (err) {
          deffer.reject(err);
        });
        return deffer.promise;
      };
    }
  ]);
});
