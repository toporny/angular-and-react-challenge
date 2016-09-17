module.exports = function (grunt) {

grunt.initConfig({
	env: grunt.option('env') || 'dev',

	copy: {
	  main: {
		files: [
			// includes files within path
			{expand: false, src: ['bower_components/bootstrap/dist/css/bootstrap.css'], dest: 'build/css/bootstrap.css', filter: 'isFile'},
			{expand: false, src: ['bower_components/angular/angular.js'], dest: 'build/js/angular.js', filter: 'isFile'},
			{expand: false, src: ['bower_components/angular-animate/angular-animate.js'], dest: 'build/js/angular-animate.js', filter: 'isFile'},
			{expand: false, src: ['bower_components/angular-sanitize.js/angular-sanitize.js'], dest: 'build/js/angular-sanitize.js', filter: 'isFile'},
			{expand: false, src: ['bower_components/react/react-dom.js'], dest: 'build/js/react-dom.js', filter: 'isFile'},
			{expand: false, src: ['bower_components/ngReact/ngReact.js'], dest: 'build/js/ngReact.js', filter: 'isFile'},
			{expand: false, src: ['public_html/index.html'], dest: 'build/index.html', filter: 'isFile'},
			{expand: true, cwd: 'public_html/js/', src: ['*.min.js'], dest: 'build/js'},
		],
	  },
	},
	concat: {
		// concat task configuration goes here.
	},
	uglify: {
		// uglify task configuration goes here.
	},
});



grunt.loadNpmTasks('grunt-contrib-copy');

grunt.registerTask('default', ['copy']);
grunt.registerTask('dev', ['copy']);
grunt.registerTask('prod', ['copy']);

};

