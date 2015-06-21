(function () {
    'use strict';

    var TilesDirective = /*@ngInject*/ function ($rootScope) {
        return {
            restrict: 'E',
            scope: {},
            templateUrl: $rootScope.staticUrl('partials/components/tiles.html'),
            transclude: true
        };
    };

    module.exports = TilesDirective;
}());
