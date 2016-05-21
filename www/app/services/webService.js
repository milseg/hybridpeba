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

      this.getList = function (query, page) {
        var pms = {};
        if(!isNaN(page)) {
          pms.page = page;
        }
        if(typeof(query) === "string" && query.length > 0) {
          pms.q = query;
        }
        var url = base+'deputados.json';
        //console.log("getList", url, pms);
        return $http.get(url, {params: pms});
      };

      this.getDep = function (dep) {
        return $http.get(base+'deputados/'+dep.id+".json");
      };
    }
  ]);
});
