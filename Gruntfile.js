module.exports = function(grunt) {
	'use strict';

	grunt.loadNpmTasks('grunt-contrib-connect');

	grunt.initConfig({

		// The actual grunt server settings
		connect: {
			options: {
				port: 5000,
				keepalive: true
			},
			dev: {
				options: {
					base: 'client'
				}
			}
		}

	});

	grunt.registerTask('default', ['connect:dev']);

};