// Inits

// Nav
var isFixed = "is-fixed";
var isActive = "is-active";
var $appNavPrimary = $("[data-nav-primary]");
var $appNavPrimaryAnchors = $("[data-nav-primary] a");
var appNavPriamaryTop = $appNavPrimary.offset().top;
var $appInDocLinks = $("[data-in-doc-link]"); //links routing inside document; not across

var $appSections = $("[data-section]");

// Form
var isSubmitted = "is-submitted";
var isFailed = "is-failed";
var $appFormSubmit = $("[data-form-submit]");
var $appFormEmail = $("[data-form-email]");

// Functions

var rosenbergApp = rosenbergApp || {};

(function (rosenbergApp) {

	rosenbergApp.appNav = rosenbergApp.appNav || {};

	(function (appNav) {

		appNav.init = function() {

			//$appNavPrimaryAnchors.click(function(){
			//	$appNavPrimaryAnchors.removeClass("active");
			//	$(this).addClass("active");
			//});

			$(window).scroll(function(){
				if(appNavPriamaryTop - $(window).scrollTop() < 0){
					$appNavPrimary.addClass(isFixed);
				}
				else if(appNavPriamaryTop - $(window).scrollTop() > 0){
					$appNavPrimary.removeClass(isFixed);
				}
			});
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
					//url: "email.php",
					data: data,
					success: function() {
						console.log("Success");
					},
					error: function() {
						console.log("Error");
					}
				  });
				};

				var validate = function(emailString) {
					var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
					return re.test(emailString);
				};

				e.preventDefault();
				var emailString = $(this).find($appFormEmail).val();

				if(validate(emailString)){
					/// Simulating on mail function
					emailSend(emailString);
					$appFormSubmit.addClass(isSubmitted);
					$(this).removeClass(isFailed);
					console.log("200");
					console.log(emailString);
				}
				else
				{
					$(this).addClass(isFailed);
					console.log("500");
				}
				
			});
		}; 
 
	} (rosenbergApp.appSubmit));

	rosenbergApp.appActiveSection = rosenbergApp.appActiveSection || {};

	(function(appActiveSection){
		appActiveSection.init = function(){
			$(window).scroll(function() {
				var scrollFromTop = $(window).scrollTop();

				$appSections.each(function(index) {
					if ($(this).position().top <= scrollFromTop + 10 ) {

						if($(document).height() - $(window).height() <= scrollFromTop + 30){
							index++; //end of document
						}

						$("nav ul a.is-active").removeClass(isActive);
		                $("nav ul a").eq(index).addClass(isActive);
					}
				});

			});
		};

	}(rosenbergApp.appActiveSection));

	rosenbergApp.appDrag = rosenbergApp.appDrag || {};

	(function(appDrag){
		appDrag.init = function(){
			new Dragdealer('jsDrag', {
			  steps: 3,
			  speed: 0.2,
			  loose: true
			});
		};

	}(rosenbergApp.appDrag));

} (rosenbergApp));

$(document).ready(function(){
	rosenbergApp.appNav.init();
	rosenbergApp.appScroll.init();
	rosenbergApp.appSubmit.init();
	rosenbergApp.appActiveSection.init();
	rosenbergApp.appDrag.init();
});

