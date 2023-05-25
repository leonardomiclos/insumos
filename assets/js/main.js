
(function ($) {
	"use strict";

	$(document).ready(function () {


		/* ==================================================
			# Wow Init
		 ===============================================*/
		var wow = new WOW({
			boxClass: 'wow', // animated element css class (default is wow)
			animateClass: 'animated', // animation css class (default is animated)
			offset: 0, // distance to the element when triggering the animation (default is 0)
			mobile: true, // trigger animations on mobile devices (default is true)
			live: true // act on asynchronously loaded content (default is true)
		});
		wow.init();


		/* ==================================================
			# Tooltip Init
		===============================================*/
		$('[data-toggle="tooltip"]').tooltip();


		/* ==================================================
			# Youtube Video Init
		 ===============================================*/
		$('.player').mb_YTPlayer();


		/* ==================================================
			# Slide Animated Button
		===============================================*/
		var $slideLink = $(".text-slide"),
			slideLinkText = $slideLink.find("span")[0];

		$slideLink.on("mouseenter", linkOver);

		function linkOver() {
			TweenLite.to(slideLinkText, 0.3, {
				y: -25,
				ease: Cubic.easeIn,
				onComplete: function () {
					TweenLite.fromTo(slideLinkText, 0.3, {
						y: 25
					}, {
						y: 0,
						ease: Cubic.easeOut
					})
				}
			});
		}


		/* ==================================================
			# Scrolla active
		===============================================*/
		$('.animate').scrolla();


		/* ==================================================
			# imagesLoaded active
		===============================================*/
		$('#gallery-masonary,.blog-masonry').imagesLoaded(function () {

			/* Filter menu */
			$('.mix-item-menu').on('click', 'button', function () {
				var filterValue = $(this).attr('data-filter');
				$grid.isotope({
					filter: filterValue
				});
			});

			/* filter menu active class  */
			$('.mix-item-menu button').on('click', function (event) {
				$(this).siblings('.active').removeClass('active');
				$(this).addClass('active');
				event.preventDefault();
			});

			/* Filter active */
			var $grid = $('#gallery-masonary').isotope({
				itemSelector: '.gallery-item',
				percentPosition: true,
				masonry: {
					columnWidth: '.gallery-item',
				}
			});

			/* Filter active */
			$('.blog-masonry').isotope({
				itemSelector: '.blog-item',
				percentPosition: true,
				masonry: {
					columnWidth: '.blog-item',
				}
			});

		});


		/* ==================================================
			# Fun Factor Init
		===============================================*/
		$('.timer').countTo();
		$('.fun-fact').appear(function () {
			$('.timer').countTo();
		}, {
			accY: -100
		});


		/* ==================================================
			# Magnific popup init
		 ===============================================*/
		$(".popup-link").magnificPopup({
			type: 'image',
			// other options
		});

		$(".popup-gallery").magnificPopup({
			type: 'image',
			gallery: {
				enabled: true
			},
			// other options
		});

		$(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
			type: "iframe",
			mainClass: "mfp-fade",
			removalDelay: 160,
			preloader: false,
			fixedContentPos: false
		});

		$('.magnific-mix-gallery').each(function () {
			var $container = $(this);
			var $imageLinks = $container.find('.item');

			var items = [];
			$imageLinks.each(function () {
				var $item = $(this);
				var type = 'image';
				if ($item.hasClass('magnific-iframe')) {
					type = 'iframe';
				}
				var magItem = {
					src: $item.attr('href'),
					type: type
				};
				magItem.title = $item.data('title');
				items.push(magItem);
			});

			$imageLinks.magnificPopup({
				mainClass: 'mfp-fade',
				items: items,
				gallery: {
					enabled: true,
					tPrev: $(this).data('prev-text'),
					tNext: $(this).data('next-text')
				},
				type: 'image',
				callbacks: {
					beforeOpen: function () {
						var index = $imageLinks.index(this.st.el);
						if (-1 !== index) {
							this.goTo(index);
						}
					}
				}
			});
		});


		/* ==================================================
			_Progressbar Init
		 ===============================================*/
		function animateElements() {
			$('.progressbar').each(function () {
				var elementPos = $(this).offset().top;
				var topOfWindow = $(window).scrollTop();
				var percent = $(this).find('.circle').attr('data-percent');
				var animate = $(this).data('animate');
				if (elementPos < topOfWindow + $(window).height() - 30 && !animate) {
					$(this).data('animate', true);
					$(this).find('.circle').circleProgress({
						// startAngle: -Math.PI / 2,
						value: percent / 100,
						size: 90,
						thickness: 3,
						lineCap: 'round',
						emptyFill: '#f1f1f1',
						fill: {
							gradient: ['#6222cc', '#a200be ']
						}
					}).on('circle-animation-progress', function (event, progress, stepValue) {
						$(this).find('strong').text((stepValue * 100).toFixed(0) + "%");
					}).stop();
				}
			});
		}

		animateElements();
		$(window).scroll(animateElements);



		/* ==================================================
			# Banner Carousel
		 ===============================================*/
		const bannerFade = new Swiper(".banner-fade", {
			// Optional parameters
			direction: "horizontal",
			loop: true,
			autoplay: true,
			effect: "fade",
			fadeEffect: {
				crossFade: true
			},
			speed: 3000,
			autoplay: {
				delay: 5000,
				disableOnInteraction: false,
			},

			// If we need pagination
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
			},

			// Navigation arrows
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev"
			}

			// And if we need scrollbar
			/*scrollbar: {
			el: '.swiper-scrollbar',
		  },*/
		});


		/* ==================================================
			# Services Carousel
		 ===============================================*/
		const ServicesStyleOne = new Swiper(".services-style-one-carousel", {
			// Optional parameters
			loop: true,
			slidesPerView: 1,
			spaceBetween: 30,
			speed: 1000,
			autoplay: {
				delay: 15000,
				disableOnInteraction: false,
			},
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
			// Navigation arrows
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev"
			},
			breakpoints: {
				390:{
					slidesPerView: 2,
				},
				768: {
					slidesPerView: 2,
				},
				992: {
					slidesPerView: 3,
				},
				1199: {
					slidesPerView: 4,
				}
			},
		});

		/* ==================================================
	# product Carousel
 ===============================================*/
		const ProductsStyleOne = new Swiper(".services-style-one-carousel-2", {
			// Optional parameters
			loop: true,
			slidesPerView: 1,
			spaceBetween: 40,
			autoplay: {
				delay: 5000,
				disableOnInteraction: false,
			},
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
			// Navigation arrows
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev"
			},
			breakpoints: {
				390:{
					slidesPerView: 2,
				},
				768: {
					slidesPerView: 2,
				},
				992: {
					slidesPerView: 3,
				},
				1199: {
					slidesPerView: 6,
				}
			},
		});


		/* ==================================================
			# Testimonials Carousel
		 ===============================================*/
		const testimonialCarousel = new Swiper(".testimonial-carousel", {
			// Optional parameters
			direction: "horizontal",
			loop: true,
			autoplay: true,

			// And if we need scrollbar
			/*scrollbar: {
			el: '.swiper-scrollbar',
		  },*/
		});


		/* ==================================================
			# Banner Carousel
		 ===============================================*/
		const bannerStyleTwo = new Swiper(".banner-style-two-carousel", {
			// Optional parameters
			direction: "horizontal",
			loop: true,
			autoplay: true,
			effect: "fade",
			fadeEffect: {
				crossFade: true
			},
			speed: 8000,
			autoplay: {
				delay: 8000,
				disableOnInteraction: false,
			},

			// If we need pagination
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
			},

			// Navigation arrows
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev"
			}

			// And if we need scrollbar
			/*scrollbar: {
			el: '.swiper-scrollbar',
		  },*/
		});


		/* ==================================================
			# Project Carousel
		 ===============================================*/
		const swiperStageRight = new Swiper(".carousel-stage-right", {
			// Optional parameters
			loop: true,
			freeMode: true,
			grabCursor: true,
			slidesPerView: 1,
			spaceBetween: 15,
			pagination: {
				el: ".swiper-pagination",
				clickable: true,
			},
			// Navigation arrows
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev"
			},
			breakpoints: {
				390:{
					slidesPerView: 2,
				},
				768: {
					slidesPerView: 2,
				},
				1300: {
					slidesPerView: 2.5,
				},
			},
		});


		/* ==================================================
			# Banner Carousel
		 ===============================================*/
		const bannerStyleThree = new Swiper(".banner-style-three-carousel", {
			// Optional parameters
			direction: "horizontal",
			loop: true,
			autoplay: false,
			effect: "fade",
			fadeEffect: {
				crossFade: true
			},
			speed: 3000,
			autoplay: {
				delay: 5000,
				disableOnInteraction: false,
			},

			// If we need pagination
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
			},

			// Navigation arrows
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev"
			}

			// And if we need scrollbar
			/*scrollbar: {
			el: '.swiper-scrollbar',
		  },*/
		});



		/* ==================================================
			# Banner Carousel
		 ===============================================*/
		const bannerSlide = new Swiper(".banner-slide", {
			// Optional parameters
			direction: "horizontal",
			loop: true,
			grabCursor: true,
			autoplay: true,
			speed: 2000,
			autoplay: {
				delay: 5000,
				disableOnInteraction: false,
			},

			// If we need pagination
			pagination: {
				el: '.swiper-pagination',
				type: 'bullets',
				clickable: true,
			},

			// Navigation arrows
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev"
			}

			// And if we need scrollbar
			/*scrollbar: {
			el: '.swiper-scrollbar',
		  },*/
		});


		/* ==================================================
			# Brand Carousel
		 ===============================================*/
		const brand6col = new Swiper(".brand5col", {
			// Optional parameters
			loop: true,
			slidesPerView: 2,
			spaceBetween: 30,
			autoplay: false,
			breakpoints: {
				768: {
					slidesPerView: 3,
					spaceBetween: 40,
				},
				992: {
					slidesPerView: 4,
					spaceBetween: 60,
				},
				1199: {
					slidesPerView: 5,
					spaceBetween: 60,
				}
			},
		});

		/* ==================================================
			# Offer Product Carousel
		 ===============================================*/
		const productOffer = new Swiper(".product-offer-carousel", {
			// Optional parameters
			direction: "horizontal",
			loop: true,
			autoplay: true,
			effect: "fade",
			fadeEffect: {
				crossFade: true
			},


			// If we need pagination
			pagination: {
				el: '.product-offer-carousel-pagination',
				type: 'bullets',
				clickable: true,
			},

			// Navigation arrows
			navigation: {
				nextEl: ".product-offer-carousel-next",
				prevEl: ".product-offer-carousel-prev"
			}

			// And if we need scrollbar
			/*scrollbar: {
			el: '.swiper-scrollbar',
		  },*/
		});


		/* ==================================================
			# Product Gallery Carousel
		 ===============================================*/
		const productGallery = new Swiper(".product-gallery-carousel", {
			// Optional parameters
			loop: true,
			slidesPerView: 2,
			spaceBetween: 30,
			autoplay: true,
			breakpoints: {
				390:{
					slidesPerView: 2,
				},
				768: {
					slidesPerView: 3,
				},
				992: {
					slidesPerView: 3,
				},
				1200: {
					slidesPerView: 4,
				},
			},
		});

		/* ==================================================
	# Images Gallery Carousel
 ===============================================*/
		const imagesGallery = new Swiper(".container", {
			// Optional parameters
			slidesPerView: 'auto',
			centeredSlides: true,
			spaceBetween: 30,
			loop: true,
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			navigation: {
				nextEl: '.swiper-button-next',
				prevEl: '.swiper-button-prev',
			},
			breakpoints: {
				390:{
					slidesPerView: 2,
				},
				480: {
					slidesPerView: 1,
				},
				768: {
					slidesPerView: 2,
				},
				992: {
					slidesPerView: 3,
				},
				1200: {
					slidesPerView: 2,
				},
			},
		});


		/* ==================================================
			# Related Product Carousel
		 ===============================================*/
		const relatedProduct = new Swiper(".related-product-carousel", {
			// Optional parameters
			loop: true,
			slidesPerView: 1,
			spaceBetween: 30,
			autoplay: true,
			breakpoints: {
				390:{
					slidesPerView: 2,
				},
				768: {
					slidesPerView: 3,
				},
				992: {
					slidesPerView: 3,
				},
				1200: {
					slidesPerView: 4,
				},
			},
		});

	}); // end document ready function


	/* ==================================================
		Preloader Init
	===============================================*/
	$(window).on('load', function () {
		// Animate loader off screen
		$(".se-pre-con").fadeOut("slow");;
	});

	const produto = document.querySelectorAll('.produto');
	containers.forEach(container => {
		const img = container.querySelector('img');
		container.addEventListener('mouseenter', () => {
			img.classList.add('zoom');
		});
		container.addEventListener('mouseleave', () => {
			img.classList.remove('zoom');
		});
	});

	const relatedProduct = new Swiper(".related-product-carousel", {
		// Optional parameters
		loop: true,
		slidesPerView: 1,
		spaceBetween: 30,
		autoplay: true,
		breakpoints: {
			390:{
				slidesPerView: 2,
			},
			768: {
				slidesPerView: 3,
			},
			992: {
				slidesPerView: 3,
			},
			1200: {
				slidesPerView: 4,
			},
		},
	});



	$(function () {



		"use strict";

		var wind = $(window);




		/* ----------------------------------------------------------------
						[ Navbar ( scrollIt ) ]
		-----------------------------------------------------------------*/

		$.scrollIt({
			upKey: 38,                // key code to navigate to the next section
			downKey: 40,              // key code to navigate to the previous section
			easing: 'swing',          // the easing function for animation
			scrollTime: 600,          // how long (in ms) the animation takes
			activeClass: 'active',    // class given to the active nav element
			onPageChange: null,       // function(pageIndex) that is called when page is changed
			topOffset: -70            // offste (in px) for fixed top navigation
		});
	});

})(jQuery); // End jQuery

function scrollToDiv() {
	var div = document.getElementById("contact-area");
	div.scrollIntoView({ behavior: "smooth" });
}

function scrollToDivWork() {
	var div = document.getElementById("workWithUs");
	div.scrollIntoView({ behavior: "smooth" });
}

function consultarPorLocalizacao() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(obterCoordenadas, exibirErro);
    } else {
        console.log('Geolocalização não é suportada pelo seu navegador.');
    }
}

function obterCoordenadas(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    consultarClima(latitude, longitude, 'Localização Automática');
}

function consultarTempo() {
    const apiKey = '72390b920ba2457d879b5dfa59a2d6db'; // Sua chave de API do OpenWeatherMap
    const cidade = document.getElementById('cidade').value; // Obtém o valor inserido no campo de entrada

    // URL da API do OpenWeatherMap
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&lang=pt`;

    // Fazendo a solicitação GET usando o método fetch
    fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Falha na solicitação. Código de status: ' + response.status);
        })
        .then(data => {
            // Processar os dados retornados pela API
            exibirDadosTempo(data);
        })
        .catch(error => {
            console.log('Erro:', error.message);
        });
}

function consultarTempo() {
    const apiKey = '72390b920ba2457d879b5dfa59a2d6db'; // Sua chave de API do OpenWeatherMap
    const cidade = document.getElementById('cidade').value; // Obtém o valor inserido no campo de entrada

    // URL da API do OpenWeatherMap
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&lang=pt`;

    // Fazendo a solicitação GET usando o método fetch
    fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Falha na solicitação. Código de status: ' + response.status);
        })
        .then(data => {
            // Processar os dados retornados pela API
            exibirDadosTempoManual(data);
        })
        .catch(error => {
            console.log('Erro:', error.message);
        });
}

function exibirDadosTempoManual(data) {
    const nomeCidade = data.name;
    const temperaturaKelvin = data.main.temp;
    const temperaturaCelsius = temperaturaKelvin - 273.15;
    const descricao = data.weather[0].description;
    const icone = data.weather[0].icon;


    const resultado = `Cidade: ${nomeCidade}<br>
                 Temperatura: ${temperaturaCelsius.toFixed(2)} °C<br>
                 <img src="http://openweathermap.org/img/wn/${icone}.png" alt="Ícone do Tempo"> Descrição: ${descricao}
                 `;


    document.getElementById('resultado-manual').innerHTML = resultado;
}

// ----------------------------------- APARTIR DAQUI CONSULTA AUTOMÁTICA -------------------------------------------------------------------------


function consultarPorLocalizacao() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(obterCoordenadas, exibirErro);
    } else {
        console.log('Geolocalização não é suportada pelo seu navegador.');
    }
}


function obterCoordenadas(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    consultarClima(latitude, longitude, 'Localização Automática');
    const divResultado = document.getElementById('div-resultado');
    divResultado.innerHTML = '<div id="resultado"></div>';
    consultarClima(latitude, longitude, 'Localização Automática', 'resultado');
    document.getElementById('botao-automatico').style.display = 'none';
}


function consultarClima(latitude, longitude, origem) {
    const apiKey = '72390b920ba2457d879b5dfa59a2d6db'; // Sua chave de API do OpenWeatherMap
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&lang=pt `;

    fetch(url)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Falha na solicitação. Código de status: ' + response.status);
        })
        .then(data => {
            exibirDadosTempo(data, origem);
        })
        .catch(error => {
            console.log('Erro:', error.message);
        });
}


function exibirDadosTempo(data, origem) {
    const nomeCidade = data.name;
    const temperaturaKelvin = data.main.temp;
    const temperaturaCelsius = temperaturaKelvin - 273.15;
    const descricao = data.weather[0].description;
    const icone = data.weather[0].icon;
    const timestamp = data.dt;
    const dataHora = moment.unix(timestamp).locale('pt-br');
    const dataFormatada = dataHora.format('D MMMM'); // Formato de dia e mês por extenso em português

    const primeiraLetraMaiuscula = dataFormatada.charAt(0).toUpperCase();
    const restanteDoMes = dataFormatada.slice(1);
    
    const dataFormatadaCapitalizada = primeiraLetraMaiuscula + restanteDoMes;

	// ${dataFormatadaCapitalizada}<br></br>

    const resultado = `
                   ${nomeCidade}, BR
                   ${temperaturaCelsius.toFixed(0)} °C
                   ${descricao}
                   `;


    document.getElementById('resultado').innerHTML = resultado;
}

function exibirErro(error) {
    console.log('Erro ao obter localização:', error.message);
}


(function (d, s, id) {
	if (d.getElementById(id)) {
		if (window.__TOMORROW__) {
			window.__TOMORROW__.renderWidget();
		}
		return;
	}
	const fjs = d.getElementsByTagName(s)[0];
	const js = d.createElement(s);
	js.id = id;
	js.src = "https://www.tomorrow.io/v1/widget/sdk/sdk.bundle.min.js";

	fjs.parentNode.insertBefore(js, fjs);
})(document, 'script', 'tomorrow-sdk');


$(function () {
    $('[data-toggle="popover"]').popover();
});


  




