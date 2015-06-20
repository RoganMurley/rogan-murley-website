module.exports = function(grunt) {
    'use strict';
    var path = require('path');

    require('load-grunt-config')(grunt, {
        init: true,
        data: {
            src: {
                root: 'frontend/src'
            },
            dev: {
                root: 'frontend/dev'
            },
            build: {
                root: 'frontend/build'
            },
            project: {
                root: path.resolve()
            },
            appVersion: grunt.option('app-version')
        },
        loadGruntTasks: {
            pattern: 'grunt-*',
            config: require('./package.json'),
            scope: 'devDependencies'
        }
    });
};
