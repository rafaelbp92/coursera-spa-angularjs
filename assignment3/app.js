(function () {
    'use strict';
    angular.module('NarrowItDownApp', [])
    .controller('NarrowItDownController', NarrowItDownController)
    .service('MenuSearchService', MenuSearchService)
    .constant('ApiBasePath', "https://coursera-jhu-default-rtdb.firebaseio.com/menu_items.json")
    .directive('foundItems', FoundItemsDirective);

    function FoundItemsDirective() {
        var ddo = {
          templateUrl: 'foundItems.html',
          scope: {
            items: '<',
            onRemove: '&'
          },
          controller: function () {
            var list = this;
          },
          controllerAs: 'list',
          bindToController: true
        };
      
        return ddo;
      }
      

    NarrowItDownController .$inject = ['MenuSearchService'];
    function NarrowItDownController (MenuSearchService) {
        var narrowitdown = this;

        narrowitdown.searchTerm = '';
        narrowitdown.resultIsEmpty = false;
        narrowitdown.foundItems = [];

        narrowitdown.getMatchedMenuItems = function () {
            if (narrowitdown.searchTerm == '' || narrowitdown.searchTerm == undefined) {
                narrowitdown.resultIsEmpty = true;
                narrowitdown.foundItems = [];
            } else {
                narrowitdown.resultIsEmpty = false;
                
                var serviceResult = MenuSearchService.getMatchedMenuItems(narrowitdown.searchTerm);

                serviceResult.then(function (foundItems) {
                    narrowitdown.resultIsEmpty = foundItems.length == 0 ? true : false;

                    narrowitdown.foundItems = foundItems;
                  })
                  .catch(function (error) {
                    console.log(error);
                  })

             
            }
        };

        narrowitdown.removeItem = function (itemIndex) {
            narrowitdown.foundItems.splice(itemIndex, 1);
        };
    }


    MenuSearchService.$inject = ['$http', 'ApiBasePath'];
    function MenuSearchService($http, ApiBasePath) {
        var service = this;

        service.getMatchedMenuItems = function (searchTerm) {
            return $http({
            method: "GET",
            url: (ApiBasePath)
            }).then(function (result) {
                var foundItems = [];

                Object.keys(result.data).forEach(category => {
                    result.data[category].menu_items.forEach(item => {
                        if (item.description.includes(searchTerm)) {
                            foundItems.push(item);
                        }
                    });                    
                });
                
                return foundItems;
            });
        };
    }
})();