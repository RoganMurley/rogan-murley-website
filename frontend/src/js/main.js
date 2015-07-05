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
            }).state('blogPost', {
                templateUrl: staticUrl('partials/blog_post.html'),
                url: '/post',
            });
    });

    app.directive('tiles', require('./components/tilesDirective.js'));
    app.directive('tile', require('./components/tileDirective.js'));

    app.run( /*@ngInject*/ function (
        $rootScope,
        $state
    ) {
        $rootScope.staticUrl = staticUrl;

        var i;
        $rootScope.projects = [];

        $rootScope.projects.push({
            image: 'images/stocks.jpg',
            imageAlt: 'Phillipine stock market',
            name: "Why SVG and <base> don't mix",
        });

        for (i = 0; i < 8; i++) {
            $rootScope.projects.push({
                image: 'images/sunset.jpg',
                imageAlt: 'Pink sunset over water',
                name: 'Exciting Project ' + i,
            });
        }

        $state.transitionTo('landing');
    });
}());
