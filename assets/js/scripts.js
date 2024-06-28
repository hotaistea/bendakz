//раскрывашка для текста в блоках VK
function addNoteActive(e) {
    let textElement = e.previousElementSibling;
    if (textElement) {
        textElement.classList.add('_js-note-active');
    }
    e.remove();
}

jQuery(document).ready(function () {

    // мобильное меню
    $('.menu-humb').on('click', function () {
        $(this).toggleClass('active');
        $('.menu-mob').toggleClass('active');
        $('.header__wrap').toggleClass('menu_active');

    });

    //главный баннер
    var swiperBanner = new Swiper(".banner-slider", {
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        }
    });

    //слайдер записей из вк
    //   var swiperVkNotes = new Swiper(".vk-notes__slider", {
    //     slidesPerView: "auto",
    //     spaceBetween: 16,
    //     breakpoints: {
    //       // 576: {
    //       //   slidesPerView: 1,
    //       // },
    //       // when window width is >= 768px
    //       768: {
    //         slidesPerView: "auto",
    //         spaceBetween: 25
    //       }
    //     }
    //   });

    //слайдер новостей на главной
    var swiperNews = new Swiper(".carusel-news__slider", {
        slidesPerView: "auto",
        spaceBetween: 10,
        breakpoints: {
            // when window width is >= 991px
            991: {
                spaceBetween: 25
            }
        }
    });

    //слайдер моделей мобильный
    var swiperModelsMob = new Swiper(".models-slider-mob", {
        slidesPerView: "auto",
        spaceBetween: 14
    });

    //слайдер фото продукта
    var swiperProduct = new Swiper(".product-slider", {
        slidesPerView: 1,
        spaceBetween: 10,
        breakpoints: {
            576: {
                slidesPerView: 2,
            },
            // when window width is >= 991px
            991: {
                slidesPerView: 3,
            }
        }
    });
    // слайдер блока Особеннщсти
    var swiper = new Swiper(".mySwiper", {
        loop: true,
        slidesPerView: 1,
        allowTouchMove: false,
        effect: "fade",
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
    });
    var swiper2 = new Swiper(".mySwiper2", {
        loop: true,
        effect: "fade",
        navigation: {
            nextEl: ".it-button-next-1",
            prevEl: ".it-button-prev-1",
        },
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        thumbs: {
            swiper: swiper,
        },
    });

    // галерея картинок продукта
    $('.popup-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        zoom: {
            enabled: true,
            duration: 300 // продолжительность анимации
        },
        tLoading: 'Загрузка изображения #%curr%...',
        gallery: {
            enabled: true,
            navigateByImgClick: true,
            preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
        }
    });

    //слайдер других продуктов в карточке товара
    var swiperProductOther = new Swiper(".product-other__slider", {
        slidesPerView: 1,
        spaceBetween: 10,
        breakpoints: {
            576: {
                slidesPerView: 3,
            },
            // when window width is >= 991px
            991: {
                slidesPerView: 5,
                spaceBetween: 25,
            }
        }
    });



    // видео
    $(".product-video__bg").on('click', function () {
        var videoElem = $(this).siblings('.product-video');
        console.log(videoElem);
        $(this).hide();
        $(videoElem).attr('controls', true);
        $(videoElem).get(0).play();
        //$(videoElem).play()
    });

    // аккордеон для параметров в характеристиках
    $('.parameter-title--js').on('click', function () {
        var parents = $(this).closest('.parameter-wrap--js');
        parents.children('.parameter-block--js').slideToggle();
        parents.toggleClass('active');

    });

    // аккордеон - активный первый таб и закрытие при нажатии на другие табы
    var firstTab = $('.accord-wrap--js').eq(0);
    firstTab.addClass('active');
    firstTab.children('.accord-block--js').slideDown();
    $('.accord-title--js').on('click', function () {
        var parents = $(this).closest('.accord-wrap--js');
        parents.children('.accord-block--js').slideToggle();
        parents.toggleClass('active');
        $('.accord-wrap--js').not(parents).removeClass('active');
        $('.accord-wrap--js').not(parents).children('.accord-block--js').slideUp();
    });
    $('.accord-wrap--js').not(firstTab).removeClass('active');
    $('.accord-wrap--js').not(firstTab).children('.accord-block--js').slideUp();


    // табы (цвета)
    $(".tabs-item--js").on('click', function () {
        var itemThumbs = $(this).attr('data-thumb'),
            imgThumbs = $(".tabs__block--js[data-thumb= '" + itemThumbs + "']");
        $(this).addClass('active').siblings().removeClass('active');
        imgThumbs.addClass('active').siblings().removeClass('active');
    });

    /// mask
    $(function () {
        $(".input-phone").mask("+7 (999) 999 - 99 - 99");
    });

    // хедер при скролле
    $(window).on("scroll", function () {
        var scrolled = $(this).scrollTop();
        if (scrolled > 80) {
            $(".header__wrap").addClass("header_active");
        }
        if (scrolled <= 80) {
            $(".header__wrap").removeClass("header_active");
        }
    });


    //показ сообщений после отправки форм
    document.addEventListener('fetchit:success', (e) => {
        $('.form-messages__ok').fadeIn();
        setTimeout(() => {
            $('#modal-callback').removeClass('open-modal');
            $("body").removeClass('open-fix');
            $('.form-messages__ok').fadeOut();
        }, 5000)

    });

    //Плавно прокручивает страницу до id-ка карты



    $(".geosales-placemark").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({
            scrollTop: top
            // scrollTop: top -  ($('.header__wrap').height() + 50)
        }, 1000);
        return false;
    });



    $(".in").on("input", function () {
        $(this).val($(this).val().replace(/[^a-zA-ZА-Яа-яЁё]/g, ''));
    });

});




// кнопка Наверх
const btnUp = {
    el: document.querySelector('.btn-up'),
    show() {
        this.el.classList.remove('btn-up_hide');
    },
    hide() {
        this.el.classList.add('btn-up_hide');
    },
    addEventListener() {
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY || document.documentElement.scrollTop;
            // если страница прокручена больше чем на 10px, то делаем кнопку видимой, иначе скрываем
            scrollY > 10 ? this.show() : this.hide();
        });
        document.querySelector('.btn-up').onclick = () => {
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        }
    }
}

btnUp.addEventListener();