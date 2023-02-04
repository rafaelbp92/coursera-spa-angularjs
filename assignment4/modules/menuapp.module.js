// (function () {
// 'use strict';
//     angular.module('MenuApp', ['data', 'ui.router'])
//     .constant('ApiCategoriesBasePath', "https://coursera-jhu-default-rtdb.firebaseio.com/menu_items.json")
//     .constant('ApiItemsBasePath', "https://coursera-jhu-default-rtdb.firebaseio.com/menu_items/{categoryShortName}.json");
// })();


(function() {
    'use strict';

    angular.module('MenuApp', ['data', 'ui.router']).constant('ApiBasePath', "https://coursera-jhu-default-rtdb.firebaseio.com");
})();
