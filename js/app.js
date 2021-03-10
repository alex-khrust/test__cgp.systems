document.addEventListener('DOMContentLoaded', () => {

	// menu hamburger
	$('.header .hamburger').click(function () {
		$(this).toggleClass('cross');
		$('.header__mobile').toggleClass('open');
		$('body').toggleClass('locked');
	});
	$('.overlay, .cross').click(function () {
		$('.header .hamburger').removeClass('cross');
		$('.header__mobile').removeClass('open');
		$('.popup__login').removeClass('open');
		$('body').removeClass('locked');
	});


	//dropdown
	$('.header .dropdown a, .sub__menu a').click(function () {
		$('.sub__menu').toggleClass('open');
	});

	$(document).mouseup(function (e) {
		if (!$('.sub__menu').is(e.target)
			&& $('.sub__menu').has(e.target).length === 0) {
			$('.sub__menu').removeClass('open');
			$('body').removeClass('locked');
		}
	});


	// scrolls
	$('.start-trial-btn').click(function () {
		$('html, body').animate({
			scrollTop: $('.trial').offset().top - 60
		}, 1000);
		$('.trial__form input').first().focus();
	});

	$('.discover-btn').click(function () {
		$('html, body').animate({
			scrollTop: $('main section').last().offset().top + 40
		}, 1000);
	});


	//popup
	$('.login-open').click(function () {
		$('.popup__login').addClass('open');
		$('body').addClass('locked');
	});
	$(document).mouseup(function (e) {
		if (!$('.popup__content').is(e.target)
			&& $('.popup__content').has(e.target).length === 0) {
			$('.popup__login').removeClass('open');
			$('body').removeClass('locked');
		}
	});

})
