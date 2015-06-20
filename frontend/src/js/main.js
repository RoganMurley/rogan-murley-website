(function () {
    'use strict';

    var angular = require('angular');

    // Bootstrap data.
    var bootstrap = document.getElementById('bootstrap');
    var STATIC_URL = bootstrap.getAttribute('data-static-url');
    var staticUrl = function (path) {
        return (STATIC_URL || '') + path;
    };

    // Angular app.
    var app = angular.module('landing', []);

    app.config(/*@ngInject*/ function($interpolateProvider) {
        $interpolateProvider.startSymbol('[[').endSymbol(']]');
    });

    app.run( /*@ngInject*/ function ($rootScope) {
        $rootScope.staticUrl = staticUrl;
        $rootScope.greeting = 'Hello!';
    });
}());
