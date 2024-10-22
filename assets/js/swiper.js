
var swiper = new Swiper(".swiper-container-testimonial", {
	spaceBetween: 80,
	slidesPerView: 2.4,
	centeredSlides: !0,
	roundLengths: !0,
	loop: !0,
	loopAdditionalSlides: 30,
	pagination: {
		el: ".swiper-pagination",
		clickable: !0,
	},
	navigation: {
		nextEl: ".swiper-button-next",
		prevEl: ".swiper-button-prev"
	},
	breakpoints: {
		1367: {
			spaceBetween: 80,
			slidesPerView: 2.1
		},
		991: {
			spaceBetween: 80,
			slidesPerView: 2.1
		},
		768: {
			slidesPerView: 1.2,
			spaceBetween: 80
		},
		479: {
			slidesPerView: 1.2,
			spaceBetween: 80
		},
		320: {
			slidesPerView: 1.2,
			spaceBetween: 80
		}
	}
});

swiper = "";
! function () {
	"use strict"
}();

function myFunction() {
	swiperleavel1 = new Swiper("#new-homeSlider", {
		effect: "fade",
		speed: 600,
		simulateTouch: !1,
		autoplay: {
			delay: 2800,
			disableOnInteraction: !1
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: !0,
			renderBullet: function (e, r) {
				return '<span class="' + r + '">' + (e + 1) + "</span>"
			}
		}
	}), swiper = new Swiper("#new-homeSlider2", {
		effect: "fade",
		speed: 600,
		simulateTouch: !1,
		autoplay: {
			delay: 2800,
			disableOnInteraction: !1
		},
		pagination: {
			el: ".swiper-pagination",
			clickable: !0,
			renderBullet: function (e, r) {
				return '<span class="' + r + '">0' + (e + 1) + "</span>"
			}
		}
	})
}
myFunction();
var counterss = 0;
jQuery(window).scroll(function () {
	if (jQuery(".new-work").length) {
		var e = jQuery(".new-work").offset().top - 200;
		jQuery(window).scrollTop() >= e && 0 == counterss && (swiperleavel1.destroy(), myFunction(), counterss++)
	}
});
jQuery(".newsClose").click(function () {
	jQuery(".news-slider ").remove();
});
	jQuery(".playbook-header a.close").click(function(){
	jQuery(".playbook-header").remove();
	}); 



