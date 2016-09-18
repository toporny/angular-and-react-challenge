module.exports = function (grunt) {

grunt.initConfig({
	env: grunt.option('env') || 'dev',
	concat: {
		options: {
			separator: ';',
		},
		dist: {
			src: [
					'bower_components/angular/angular.min.js',
					'bower_components/angular-animate/angular-animate.min.js',
					'bower_components/angular-sanitize/angular-sanitize.min.js',
					'bower_components/react/react.min.js',
					'bower_components/react/react-dom.min.js',
					'bower_components/ngReact/ngReact.min.js',
					'bower_components/ui-bootstrap-tpls/index.js'
					],
			dest: 'public_html/js/libs.js',
		},
	}
});



grunt.loadNpmTasks('grunt-contrib-copy');
grunt.loadNpmTasks('grunt-contrib-concat');

grunt.registerTask('default', ['concat']);

};

