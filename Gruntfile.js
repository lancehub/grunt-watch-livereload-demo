module.exports = function (grunt) {
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.initConfig({
    watch: {
      options: {
        livereload: 35700,
      },
      files: ['**/*'],
    },
    connect: {
      options: {
        port: 9000,
        hostname: '0.0.0.0',
        livereload: 35700,
        base: 'files'
      },
      livereload: {}
    },
  });
  grunt.registerTask('serve', function (target) {
    grunt.task.run([
      'connect:livereload',
      'watch'
    ]);
  });
  grunt.registerTask('default', ['serve']);
}