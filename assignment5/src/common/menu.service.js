(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };


  service.getMenuItems = function (category) {
    return $http.get(ApiPath + '/menu_items/' + category + '.json').then(function (response) {
      return response.data;
    });
  };

  service.getAllMenuItems = function () {
    return $http.get(ApiPath + '/menu_items.json').then(function (response) {
      var keys = Object.keys(response.data);
      var items = [];

      keys.forEach(key => {
        var menuItems = response.data[key].menu_items;
        menuItems.forEach(item => {
          item.category = key;
        });
        items = items.concat(menuItems);
      });

      return items;
    });
  };

}



})();
