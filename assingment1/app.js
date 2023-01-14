(function () {
'use strict';

angular.module('LunchChecker', [])
.controller('LunchCheckerController', LunchCheckerController);

function LunchCheckerController ($scope) {
  $scope.lunchItems = "";
  $scope.message = "";

  $scope.checkLunchItems = function() {
    if ($scope.lunchItems == "") {
      $scope.message = "Please enter data first";
    }
    else {
      var items = $scope.lunchItems.split(',');

      if (items.length > 3) {
        $scope.message = "Too much!";
      } else {
        $scope.message = "Enjoy!";
      }
    }

  }
}

})();
