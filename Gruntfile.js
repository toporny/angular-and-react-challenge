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
	},
	copy: {
	  main: {
		files: [
			// includes files within path
			{expand: false, src: ['bower_components/bootstrap/dist/css/bootstrap.css'], dest: 'public_html/css/bootstrap.css', filter: 'isFile'}
		],
	  },
	},
    

});



grunt.loadNpmTasks('grunt-contrib-copy');
grunt.loadNpmTasks('grunt-contrib-concat');

grunt.registerTask('default', ['concat', 'copy']);

};

