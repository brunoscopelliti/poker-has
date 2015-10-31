module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-browserify');

    grunt.initConfig({

        connect: {
            options: {
                base: './tests/',
                hostname: '127.0.0.1',
                keepalive: true,
                open: true,
                port: 8081,
                protocol: 'http'
            },
            test: {}
        },

        browserify: {
            test: {
                options: {
                    debug: true
                },
                files: {
                    'tests/bundle.js': ['tests/index.js']
                }
            }
        }

    });

    grunt.registerTask('default', ['browserify:test', 'connect:test']);

};
