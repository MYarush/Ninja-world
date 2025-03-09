
(function($) { "use strict";
	var app = function () {
		var body = undefined;
		var menu = undefined;
		var menuItems = undefined;
		var init = function init() {
			body = document.querySelector('body');
			menu = document.querySelector('.menu-icon');
			menuItems = document.querySelectorAll('.nav__list-item');
			applyListeners();
		};
		var applyListeners = function applyListeners() {
			menu.addEventListener('click', function () {
				return toggleClass(body, 'nav-active');
			});
		};
		var toggleClass = function toggleClass(element, stringClass) {
			if (element.classList.contains(stringClass)) element.classList.remove(stringClass);else element.classList.add(stringClass);
		};
		init();
	}();	
})(jQuery); 

const swiper = new Swiper('.swiper', {
    slidesPerView: 4,
    slidesPerGroup: 1,
    slidesRow: 1,
    centeredSlides: true,
    autoHeight: true,
    grabCursor: true,
    loop: true,
    effect: 'coverflow',
    coverflowEffect: {
        rotate: 0,
        scale: 1,
        stretch: 0,
        depth: 220,
        modifier: 1,
        slideShadows: true,
    },
    navigation: {
        nextEl: ".custom-next",
        prevEl: ".custom-prev",
    },
    breakpoints: {
        320: {
            slidesPerView: 2,
        },
        480: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        640: {
            slidesPerView: 4,
        }
      }
  });