// Inits
var isFixed = "is-fixed";
var isActive = "is-active";
var $appNavPrimary = $("[data-nav-primary]");
var $appNavPrimaryAnchors = $("[data-nav-primary] a");
var appNavPriamaryTop = $appNavPrimary.offset().top;
var $appInDocLinks = $("[data-in-doc-link]"); //links routing inside document; not across

var rosenbergApp = rosenbergApp || {};

(function (rosenbergApp) {

    rosenbergApp.appNav = rosenbergApp.appNav || {};


    rosenbergApp.appNav = rosenbergApp.appNav || {};

    (function (appNav) {

        appNav.init = function() {

        	$appNavPrimaryAnchors.click(function(){
        		$appNavPrimaryAnchors.removeClass("active");
        		$(this).addClass("active");
        	});

			$(window).scroll(function(){
				if(appNavPriamaryTop - $(window).scrollTop() < 0){
					$appNavPrimary.addClass(isFixed);
				}
				else if(appNavPriamaryTop - $(window).scrollTop() > 0){
					$appNavPrimary.removeClass(isFixed);
				}
			})
        }; 
 
    } (rosenbergApp.appNav));

    rosenbergApp.appScroll = rosenbergApp.appScroll || {};

    (function (appScroll) {

        appScroll.init = function() {
			$appNavPrimaryAnchors.add($appInDocLinks).click(function(e) {
			  if ($(this).attr("href") !== "#") {
			    e.preventDefault();
			    return $('html, body').stop().animate({
			      scrollTop: $($(this).attr("href")).offset().top
			    }, 600);
			  }
			});
        }; 
 
    } (rosenbergApp.appScroll));

} (rosenbergApp));

$(document).ready(function(){
	rosenbergApp.appNav.init();
	rosenbergApp.appScroll.init();
});

