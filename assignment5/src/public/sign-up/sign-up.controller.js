(function () {
    "use strict";

    angular.module('public')
    .controller('SignUpController', SignUpController);

    SignUpController.$inject = ['menuItems', 'UserService'];
    function SignUpController(menuItems, UserService) {
      var $ctrl = this;
      $ctrl.user = {};
      $ctrl.invalidFavoriteItem = false;
      $ctrl.savedUserSuccess = false;
      $ctrl.menuItems = menuItems;

      $ctrl.signUpUser = function() {
        //Validate favorite items
        var item = $ctrl.menuItems.find(x => x.short_name === $ctrl.favoriteItemSearch);

        if (item === undefined) {
            $ctrl.invalidFavoriteItem = true;
            return;
        } else {
            $ctrl.invalidFavoriteItem = false;
            $ctrl.user.favoriteitem = item;
            UserService.setUser($ctrl.user);
            $ctrl.savedUserSuccess = true;
        }
      };
    }

})();