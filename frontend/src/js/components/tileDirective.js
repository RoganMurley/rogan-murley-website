(function () {
    'use strict';

    var TileDirective = /*@ngInject*/ function ($rootScope) {
        return {
            bindToController: true,
            controller: /*@ngInject*/ function ($rootScope) {
                this.imageURL = $rootScope.staticUrl(this.image);
            },
            controllerAs: 'ctrl',
            require: '^tiles',
            restrict: 'E',
            scope: {
                image: '@',
                imageAlt: '@'
            },
            templateUrl: $rootScope.staticUrl('partials/components/tile.html'),
            transclude: true
        };
    };

    module.exports = TileDirective;
}());
