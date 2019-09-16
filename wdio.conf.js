exports.config = {

	runner: 'local',
	path: '/',
	specs: [
		'./test/specs/*.js'
	],
	exclude: [

	],
	maxInstances: 1,
	capabilities: [{
		maxInstances: 1,
		browserName: 'chrome',
	}],
	// Level of logging verbosity: trace | debug | info | warn | error | silent
	logLevel: 'error',
	bail: 0,
	baseUrl: 'https://beta.caspar-health.com/en/#/user/sign_in',
	waitforTimeout: 10000,
	connectionRetryTimeout: 90000,
	connectionRetryCount: 3,
	framework: 'mocha',
	reporters: ['allure', 'spec'],
  reporterOptions: {
    allure: {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: false
		}
	},
	mochaOpts: {
		ui: 'bdd',
		timeout: 60000
	},
	services: [
		['chromedriver']
	],
	before: function () {
		let chai = require('chai');
		global.chai = chai;
		chai.use(require('chai-string'));
		global.expect = chai.expect;
	},
	afterTest(test) {
    if (test.passed === false) {
      takeScreenshot('./logs/screenshot/', 'screenshot_fail.png')
    }
  }
}