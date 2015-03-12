// Inits

// Nav
var isFixed = "is-fixed";
var isActive = "is-active";
var $appNavPrimary = $("[data-nav-primary]");
var $appNavPrimaryAnchors = $("[data-nav-primary] a");
var appNavPriamaryTop = $appNavPrimary.offset().top;
var $appInDocLinks = $("[data-in-doc-link]"); //links routing inside document; not across

// Form
var isSubmitted = "is-submitted";
var $appFormSubmit = $("[data-form-submit]");
var $appFormEmail = $("[data-form-email]");
var $appFormBtn = $("[data-form-btn]");

// Functions

var rosenbergApp = rosenbergApp || {};

(function (rosenbergApp) {

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

    rosenbergApp.appSubmit = rosenbergApp.appSubmit || {};

    (function (appSubmit) {

        appSubmit.init = function() {
        	$appFormSubmit.submit(function(e){

				var emailSend = function(data) {
				  return $.ajax({
				    type: "POST",
				    url: "email.php",
				    data: data,
				    success: function() {
				    	console.log("Error")
				    },
				    error: function() {
				    	console.log("Error")
				    }
				  });
				};

        		// CS validation is simply based on HTML5; no Regex
        		e.preventDefault()
        		$(this).addClass(isSubmitted);

        		// Here should be POST method to server, using mail function instead
        		emailSend($(this).find($appFormEmail).val());

        	})
        }; 
 
    } (rosenbergApp.appSubmit));

} (rosenbergApp));

$(document).ready(function(){
	rosenbergApp.appNav.init();
	rosenbergApp.appScroll.init();
	rosenbergApp.appSubmit.init();
});

