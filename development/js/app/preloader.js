define(['./selector'], function (Selector) {
	'use strict';

	var Preloader = function (Selector) {
		this.selector = Selector;
		this.totalImagesLoaded = 0;
		this.imagesToLoad = [
			'loading.gif',
			'arrow.png',
			'contact-logos.png',
			'intro-background.jpg',
			'logo-intro-bar.png',
			'logo-intro-mobile.png',
			'logo-transparent.png',
			'logo-white.png',
			'projects-background.jpg',
			'projects-title.png',
			'saltgreen-logo-114.png',
			'saltgreen-logo-160.png',
			'saltgreen-logo-57.png',
			'saltgreen-logo-72.png',
			'small-left-hand-logo.png',
			'welcome-background.jpg',
			'welcome-title.png',
			'what-we-do-background.jpg',
			'what-we-do-mobile-background.jpg',
			'what-we-do-title.png'
		];
		this.imagesLoadedList = [];
		this.totalImages = this.imagesToLoad.length;
		this.seconds = 1000;
		this.finished = function () { };
	};

	Preloader.prototype.resetDivDisplay = function () {
		this.selector.find('#loading-overlay').style.display = 'none';
	};

	Preloader.prototype.hidePreloader = function (callback) {
		var divs = this.selector.find('.not-loaded');
		var preloader = this;
		var resetDivDisplay = function() {
			preloader.resetDivDisplay();
		};
		var div;

		for (var i = 0; i < divs.length; i++) {
			div = divs[i];
			div.className = 'loaded';

			this.selector.w.setTimeout(resetDivDisplay, this.seconds);

			callback();
			this.seconds = this.seconds + 1000;
		}
	};

	Preloader.prototype.preloadImages = function (callback) {

		var _notifyImageLoaded = function (callback) {
			this.totalImagesLoaded++;

			if (this.totalImagesLoaded === this.totalImages) {
				this.hidePreloader(callback);
			}
		};

		for (var i = 0; i < this.totalImages; i++) {
			this.imagesLoadedList[i] = new Image();
			this.imagesLoadedList[i].src = 'static-assets/img/' + this.imagesToLoad[i];
			this.imagesLoadedList[i].onload = _notifyImageLoaded.call(this, callback);
		}
	};

	return Preloader;
});
