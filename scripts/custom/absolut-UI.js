// Inits
var isFixed = $("isFixed");
var $appNavPrimary = $("[data-nav-primary]");

var rosenbergApp = rosenbergApp || {};

(function (rosenbergApp) {

    rosenbergApp.appNav = rosenbergApp.appNav || {};

    (function (appNav) {

        appNav.init = function() {

			$(window).scroll(function(){
				if($appNavPrimary.offset().top - $(window).scrollTop() < 0){
					$appNavPrimary.addClass(isFixed);
				}
			})
        }; 
 
    } (rosenbergApp.appNav));

} (rosenbergApp));

$(document).ready(function(){
	rosenbergApp.appNav.init();
});

