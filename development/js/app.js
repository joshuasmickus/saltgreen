(function () {
	'use strict';
	var isDevelopment = false;
	var requireConfig = {
		baseUrl: 'static-assets/js/',
		urlArgs: 't=' + (new Date()).getTime(),
		paths: {
			app: 'app'
		}
	};

	if (isDevelopment) {
		requireConfig.baseUrl = 'development/js/';
		requireConfig.urlArgs = '';
	}

	requirejs.config(requireConfig);

	requirejs([
		'app/main',
		'app/selector',
		'app/preloader',
		'app/events',
		'app/pages',
		'app/nav'
	], function (Main, Selector, Preloader, Events, Pages, Nav) {
		var main = new Main(Selector, Preloader, Events, Pages, Nav);
		main.init();
	});

	})();
