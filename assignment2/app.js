(function () {
    'use strict';
    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController )
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    // Manage the To buy list
    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var toBuy = this;

        toBuy.items = ShoppingListCheckOffService.getToBuyItems();

        toBuy.checkAlreadyBought = function (item, itemIndex) {
            ShoppingListCheckOffService.addItemToAlreadyBought(item, itemIndex);
        };
        
    }

    //Already the Already bought list
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var alreadyBought = this;

        alreadyBought.items = ShoppingListCheckOffService.getAlreadyBoughtItems();
    }

    //Service to manage both to buy and already bought lists
    function ShoppingListCheckOffService() {
        var service = this;
      
        // List of shopping items to buy
        var toBuyList = [
            { name: "cookies", quantity: 10 },
            { name: "candies", quantity: 4 },
            { name: "coffee packs", quantity: 20 },
            { name: "tea packs", quantity: 20 },
            { name: "sugar packs", quantity: 15 }
        ];

        // List of shopping items already bought
        var alreadyBoughtList = [];
      
        service.addItemToAlreadyBought = function (item, itemIndex) {
          if (item != undefined) {
            alreadyBoughtList.push(item);
            toBuyList.splice(itemIndex, 1);
          }
        };
      
        // Get the to buy items
        service.getToBuyItems = function () {
          return toBuyList;
        };

        // Get the already bought items
        service.getAlreadyBoughtItems = function () {
            return alreadyBoughtList;
          };
      }

})();