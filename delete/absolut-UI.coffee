#Inits
$appNavPrimary = $("[data-nav-primary]")

$ ->
	rosenbergApp.appNav.init() 
	rosenbergApp.appScroll.init() 
	rosenbergApp.appEmail.init()

#Functions

rosenbergApp = rosenbergApp || {}

((rosenbergApp) ->

	rosenbergApp.appNav = rosenbergApp.appNav || {}

	((appNav) ->
		
		appNav.init = ->
			$(window).scroll ->
				if $appNavPrimary.offset().top == 0
					console.log($appNavPrimary.offset().top)
				else


	) rosenbergApp.appNav

	rosenbergApp.appScroll = rosenbergApp.appScroll || {}

	((appScroll) ->

		appScroll.init = ->

			$(".nav-menu a, .link").click (e) ->
				unless $(this).attr("href") is "#"
					e.preventDefault()

					$('html, body').stop().animate
						scrollTop: $($(this).attr("href")).offset().top
					,
						duration: 1000
						easing: "easeInOutQuart"


	) rosenbergApp.appScroll

	

	rosenbergApp.appEmail = rosenbergApp.appEmail || {}

	((appEmail) ->

		appEmail.init = ->
			$formInputs = $("[data-form-control]")
			$formSubmit = $("[data-submit-form]")
			$formStatus = $("[data-submit-status]")
			$nameInput = $("#name")
			$emailInput = $("#email")
			$messageInput = $("#message")
			nameReady = false
			emailReady = false
			messageReady = false
			formSubmitted = true #testing best way
			errorClass = "form-control-error"

			$formSubmit.click (e) ->
				e.preventDefault($nameInput, $emailInput, $messageInput)
				formSubmitted = true

				$formInputs.each ->
					inputEmpty($(this).attr("id"))

				if nameReady && emailReady && messageReady
					data =
						name: $nameInput.val()
						email: $emailInput.val()
						message: $messageInput.val()

					phpSent(data)
				else
					$formStatus.addClass("negative")
					$formStatus.removeClass("positive")

			inputEmpty = (id) ->
				if id == "name"
					if $nameInput.is(":empty") and formSubmitted
						$nameInput.addClass(errorClass)	

					if $nameInput.val()
						$nameInput.removeClass(errorClass)
						nameReady = true	

				if id == "email"
					if $emailInput.is(":empty") and formSubmitted
						$emailInput.addClass(errorClass)	

					if $emailInput.val() && validateEmail($emailInput.val())
						$emailInput.removeClass(errorClass)
						emailReady = true

				if id == "message"
					if $messageInput.is(":empty") and formSubmitted
						$messageInput.addClass(errorClass)	

					if $messageInput.val()
						$messageInput.removeClass(errorClass)
						messageReady = true	

			$formInputs.each ->
				$(this).blur () ->
					inputEmpty($(this).attr("id"))
			

			validateEmail = (email) -> 
				re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
				return re.test(email)
			
			phpSent = (data) ->

				$.ajax
					type: "POST"
					url: "email.php"
					data: data,
					success: ->
						$formStatus.removeClass("negative")
						$formStatus.addClass("positive")
						$formSubmit.prop('disabled', true)

					error: ->
						$formStatus.addClass("negative")
						$formStatus.removeClass("positive")

	) rosenbergApp.appEmail


) rosenbergApp




