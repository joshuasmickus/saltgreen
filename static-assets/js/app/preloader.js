define(["./selector"],function(){var t=function(t){this.selector=t,this.totalImagesLoaded=0,this.imagesToLoad=["loading.gif","intro-background.jpg","projects-background.jpg","welcome-background.jpg","wwd-background.jpg","wwd-mobile-background.jpg","arrow.png","logo-intro-bar.png","logo-intro-mobile.png","logo-transparent.png","logo-white.png","projects-title.png","saltgreen-logo-57.png","saltgreen-logo-72.png","saltgreen-logo-114.png","saltgreen-logo-160.png","small-left-hand-logo.png","welcome-title.png","wwd-title.png"],this.imagesLoadedList=[],this.totalImages=this.imagesToLoad.length,this.seconds=1e3,this.finished=function(){}};return t.prototype.resetDivDisplay=function(){this.selector.find("#loading-overlay").style.display="none"},t.prototype.hidePreloader=function(t){for(var e,o=this.selector.find(".not-loaded"),s=this,i=function(){s.resetDivDisplay()},a=0;a<o.length;a++)e=o[a],e.className="loaded",this.selector.w.setTimeout(i,this.seconds),t(),this.seconds=this.seconds+1e3},t.prototype.preloadImages=function(t){for(var e=function(t){this.totalImagesLoaded++,this.totalImagesLoaded===this.totalImages&&this.hidePreloader(t)},o=0;o<this.totalImages;o++)this.imagesLoadedList[o]=new Image,this.imagesLoadedList[o].src="static-assets/img/"+this.imagesToLoad[o],this.imagesLoadedList[o].onload=e.call(this,t)},t});