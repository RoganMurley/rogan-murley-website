(function () {
    'use strict';

    var angular = require('angular');
    var angularUIRouter = require('angular-ui-router');

    // Bootstrap data.
    var bootstrap = document.getElementById('bootstrap');
    var STATIC_URL = bootstrap.getAttribute('data-static-url');
    var staticUrl = function (path) {
        return (STATIC_URL || '') + path;
    };

    // Angular app.
    var app = angular.module('landing', ['ui.router']);

    app.config(/*@ngInject*/ function(
        $interpolateProvider,
        $locationProvider,
        $stateProvider
    ) {
        $interpolateProvider.startSymbol('[[').endSymbol(']]');
        $locationProvider.html5Mode({
            enabled: true
        });
        $stateProvider
            .state('landing', {
                templateUrl: staticUrl('partials/landing.html'),
                url: '/',
            });
    });

    app.run( /*@ngInject*/ function (
        $rootScope,
        $state
    ) {
        $rootScope.staticUrl = staticUrl;
        $rootScope.heading = 'Rogan Murley';

        $state.transitionTo('landing');
    });
}());
