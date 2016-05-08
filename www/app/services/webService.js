define([
  'app',
  'values/constant'
], function (app) {
  'use strict';

  app.service('webService', [
    '$http',
    'Constant',
    function ($http, Constant) {
      var base = Constant.apiUrl;

      this.getList = function (query) {
        return $http.get(base+'deputados', {params: {q: query, format: 'json'}});
      };

      this.getDep = function (dep) {
        return $http.get(base+'deputados/'+dep.id, {params: {format: 'json'}});
      };
    }
  ]);
});
