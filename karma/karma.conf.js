'use strict';

module.exports = config => {
    config.set({
        basePath: '',
        autoWatch: true,
        browsers: ['Chrome', 'PhantomJS'],
        files: [
            '../node_modules/es6-shim/es6-shim.min.js',
            'karma.entry.js'
        ],
        frameworks: ['jasmine'],
        logLevel: config.LOG_INFO,
        phantomJsLauncher: {
            exitOnResourceError: true
        },
        port: 3001,
        preprocessors: {
            'karma.entry.js': ['webpack', 'sourcemap']
        },
        reporters: ['dots'],
        singleRun: true,
        webpack: require('../webpack.test.js'),
        webpackServer: {
            noInfo: true
        }
    });
};