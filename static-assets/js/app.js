!function(){var e=0,a={baseUrl:"static-assets/js/",urlArgs:"t="+(new Date).getTime(),paths:{app:"app"}};e&&(a.baseUrl="development/js/",a.urlArgs=""),requirejs.config(a),requirejs(["app/main","app/selector","app/preloader","app/events","app/pages","app/nav"],function(e,a,p,s,r,t){var e=new e(a,p,s,r,t);e.init()})}();
