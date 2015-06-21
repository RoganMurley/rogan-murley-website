(function () {
    'use strict';

    var TileDirective = /*@ngInject*/ function ($rootScope) {
        return {
            require: '^tiles',
            restrict: 'E',
            scope: {},
            templateUrl: $rootScope.staticUrl('partials/components/tile.html'),
            transclude: true
        };
    };

    module.exports = TileDirective;
}());
