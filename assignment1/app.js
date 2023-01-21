(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];

function LunchCheckController ($scope) {
  $scope.lunchItems = "";
  $scope.message = "";

  $scope.checkLunchItems = function() {
    if ($scope.lunchItems == "") {
      $scope.message = "Please enter data first";
    }
    else {
      const items = $scope.lunchItems.split(',').filter(e => e.trim() != "");

      if (items.length > 3) {
        $scope.message = "Too much!";
      } else {
        $scope.message = "Enjoy!";
      }
    }

  }
}

})();
