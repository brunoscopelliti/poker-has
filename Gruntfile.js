module.exports = function (grunt) {

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-watch');
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

        watch: {
            options: {
                livereload: 35729
            },
            js: {
                files: ['./lib/*.js', './lib/**/*.js', './tests/index.js'],
                tasks: ['browserify:test']
            }
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

    grunt.registerTask('dev', ['watch:js']);

    grunt.registerTask('default', ['browserify:test', 'connect:test']);

};
