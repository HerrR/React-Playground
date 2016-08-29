module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
		    dist: {
		    	files: {
		    		'public/style/style.css': 'sass/style.scss'
		    	}
		    }
		},
		browserify: {
	      options: {
	        transform: [ require('grunt-react').browserify ]
	      },
	      client: {
	        src: ['jsx/templates/*.jsx'],
	        dest: 'public/scripts/app.built.js'
	      }
	    },
		watch: {
			react: {
				files: 'jsx/templates/*.jsx',
				tasks: ['browserify']
			},
			css: {
				files: '**/*.scss',
				tasks: ['sass']
			}
		}
	});
	grunt.loadNpmTasks('grunt-react');
	grunt.loadNpmTasks('grunt-browserify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.registerTask('default', ['sass' ,'browserify', 'watch']);
}