/*jshint node:true */
module.exports = function(grunt, options) {
    'use strict';

    return {
        options: {
            jshintrc: '.jshintrc',
            reporter: require('jshint-stylish'),
            force: true
        },
        all: {
            src: [
                'Gruntfile.js',
                '<%= src.root %>/js/**/*.js',
                '!<%= src.root %>/js/ga.js'
            ]
        }
    };
};
