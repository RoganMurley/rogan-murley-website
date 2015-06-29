/*jshint node:true */
module.exports = function(grunt, options) {
    'use strict';

    return {
        build: {
            options: {
                diff: true,
                map: false,
                processors: [
                    require('pixrem')(), // add fallbacks for rem units
                    require('autoprefixer-core')({browsers: 'last 2 versions'}), // add vendor prefixes
                    require('cssnano')() // minify the result
                ]
            },
            files: [{
                '<%= build.root %>/css/main.css': 'frontend/build/css/main.css'
            }]
        }
    };
};
