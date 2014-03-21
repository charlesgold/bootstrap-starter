module.exports = function(grunt) {

  //Initializing the configuration object
    grunt.initConfig({

      // Task configuration
    less: {
        development: {
            options: {
              compress: true,  //minifying the result
            },
            files: {
              //compiling frontend.less into frontend.css
              "./app/assets/css/frontend.css":"./app/assets/less/frontend.less"
            }
        }
    },
    concat: {
      options: {
        separator: ';',
      },
      js_frontend: {
        src: [
          './vendor/jquery/jquery.js',
          './vendor/bootstrap/dist/js/bootstrap.js',
          './app/assets/js-dev/frontend.js'
        ],
        dest: './app/assets/js/frontend.js',
      }
    },
    uglify: {
      options: {
        mangle: false  // Use if you want the names of your functions and variables unchanged
      },
      frontend: {
        files: {
          './app/assets/js/frontend.js': './app/assets/js/frontend.js',
        }
      }
    },
    phpunit: {
        classes: {
        },
        options: {
        }
    },
    watch: {
        js_frontend: {
          files: [
            //watched files
            './vendor/jquery/jquery.js',
            './vendor/bootstrap/dist/js/bootstrap.js',
            './app/assets/js-dev/frontend.js'
            ],   
          tasks: ['concat:js_frontend','uglify:frontend'],     //tasks to run
          options: {
            livereload: true                        //reloads the browser
          }
        },
        less: {
          files: ['./app/assets/less/*.less'],  //watched files
          tasks: ['less'],                          //tasks to run
          options: {
            livereload: true                        //reloads the browser
          }
        }
      }
    });

  // Plugin loading
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  //grunt.loadNpmTasks('grunt-phpunit');

  // Task definition
  grunt.registerTask('default', ['watch']);

};