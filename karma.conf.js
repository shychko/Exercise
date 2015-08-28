module.exports = function(config) {
	config.set({

		// base path, where am I running, so when you ask for a file I know in relation to what?
		basePath: "",

		//frameworks to use
		frameworks: ['jasmine'],

		//list of files | patterns to load in the browser
		files: [
			{pattern: 'bower_components/**/*.js', included: false},
			{pattern: 'src/**/*.js', included: false},
			{pattern: 'client/tests/*Spec.js', included: true},
			{pattern: 'client/tests/**/*Spec.js', included: true}

		],

		//list of files to exclude
		eclude: [
		],

		//test results reporter to use
		//possible values: 'dots', 'progress', ;junit', 'growl'
		reporters: ['progress'],

		//web server port
		port:9876,

		colors: true,

		logLevel: config.LOG_INFO,

		autoWatch: true,

		browsers: ['chrome_without_security'],

		customLaunchers: {
				chrome_without_security: {
					base: "Chrome",
					flags: ["--disable-web-security"]
				}
		},

		captureTimeout: 60000,

		singleRun: false

	});
};