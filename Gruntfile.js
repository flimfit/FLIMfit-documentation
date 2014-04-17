module.exports = function(grunt) {

  // load all grunt tasks
  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    open : {
      dev: {
        path: 'http://localhost:1919'
      }
    },

    connect: {
      server: {
        options: {
          port: 1919,
          base: 'build',
          livereload: true
        }
      }
    },

    exec: {
      build_sphinx: {
        cmd: 'sphinx-build source build'
      }
    },
    clean: {
      build: ["build"],
    },

    watch: {
      /* Changes in theme dir rebuild sphinx */
      sphinx: {
        files: ['**/*.rst', '**/*.py'],
        tasks: ['clean:build','exec:build_sphinx']
      },
      /* live-reload the FLIMfit-documentation if sphinx re-builds */
      livereload: {
        files: ['build/**/*'],
        options: { livereload: true }
      }
    }

  });

  grunt.loadNpmTasks('grunt-exec');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-open');

  grunt.registerTask('default', ['clean:build','exec:build_sphinx','connect','open','watch']);
  grunt.registerTask('build', ['clean:build','exec:build_sphinx']);
}
