define(["./selector"],function(n){var o=n.selector,e=n.w,g=0,t=function(){},l=["loading.gif","intro-background.jpg","projects-background.jpg","welcome-background.jpg","wwd-background.jpg","wwd-mobile-background.jpg","arrow.png","logo-intro-bar.png","logo-intro-mobile.png","logo-transparent.png","logo-white.png","projects-title.png","saltgreen-logo-57.png","saltgreen-logo-72.png","saltgreen-logo-114.png","saltgreen-logo-160.png","small-left-hand-logo.png","welcome-title.png","wwd-title.png"],r=[],a=(l.length-1,o(".not-loaded")),i=function(){o("#loading-overlay").style.display="none"},p=function(){for(var n=1e3,o=0;o<a.length;o++){var g=a[o];g.className="loaded",e.setTimeout(i,n),t(),n+=1e3}},c=function(){g++,g===l.length&&p()},d=function(n){t=n;for(var o=0;o<l.length;o++)r[o]=new Image,r[o].src="static-assets/img/"+l[o],r[o].onload=c};return{init:d,hidePreloader:p}});