
function getBabelifyItem(src, dest, ext) {
    var item = { src: src, dest: dest }
    var opts = { debug: false, transform: [ 'babelify' ] }
    if (ext) {
        opts.extensions = [ ext ]
    }
    item.options = opts
    return item
}

module.exports = function(grunt) {

    grunt.initConfig({

        browserify: {
            dev: {
                files: [
                    getBabelifyItem('src/client/app.js', 'public/js/build.js', '.jsx')
                ]
            }
        },

        uglify: {
            options: {
                mangle: true,
                compress: true
            },
            my_target: {
                files: {
                    'public/js/build.js': [ 'public/js/build.js' ]
                }
            }
        },

        babel: {
            options: {
              sourceMap: false,
              modules: 'common'
            },
            dist: {
              files: [{
                expand: true,
                cwd: 'src/server',
                src: ['**/*.js'],
                dest: 'src/server',
                ext:'.js'
              }]
            }
        }

    });

    grunt.loadNpmTasks('grunt-babel');
    grunt.loadNpmTasks('grunt-browserify');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('build', [ 'browserify' ]);
    grunt.registerTask('heroku', [ 'babel', 'browserify', 'uglify' ]);

};
