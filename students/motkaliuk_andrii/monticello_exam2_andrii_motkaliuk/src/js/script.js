import $ from 'jquery';
import 'slick-carousel';

$('.hero-slider').slick({
    dots: true,
    vertical: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    verticalSwiping: false,
    arrows: false,
    autoplay: false,
    pauseOnHover: false,
});

const menu = $('.menu');
let isOpenMenu = false;

menu.on('transitionend', function () {
    if (!isOpenMenu) {
        menu.css({ display: '' });

    }
})

$('.menu-open-btn').on('click', function (e) {
    e.preventDefault();

    if (!isOpenMenu) {
        menu.css({ display: 'flex' });

        setTimeout(function () {
            $(this).closest('.menu-wrapper').toggleClass('_open', !isOpenMenu);

            isOpenMenu = true;
        }.bind(this), 0);
        return;
    }

    $(this).closest('.menu-wrapper').toggleClass('_open', !isOpenMenu);

    isOpenMenu = false;
});

const header = $('.header');
const headerHeight = $('.header').outerHeight(true);
const secondSectionOffset = $('.what-we-do').offset().top;
const offset = 20;
const offsetBGHeader = secondSectionOffset - headerHeight - offset;

let isHeaderBg = false;

// $(window).on('scroll', function () {
//     if ($(this).scrollTop() > offsetBGHeader && !isHeaderBg) {
//         header.addClass('bg-header');
//         isHeaderBg = true;
//     } else if ($(this).scrollTop() < offsetBGHeader && isHeaderBg) {
//         header.removeClass('bg-header');
//         isHeaderBg = false;
//     };
// });

const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.95,
};

const callback = function (entries, observer) {
    entries.forEach((entry) => {
        if (entry.boundingClientRect.top < -20 && !entry.isIntersecting && !isHeaderBg) {
            header.addClass('bg-header');
            isHeaderBg = true;
            return;
        };

        if (entry.boundingClientRect.top < -20 && entry.isIntersecting && isHeaderBg) {
            header.removeClass('bg-header');
            isHeaderBg = false;
        }
    })
};

const observer = new IntersectionObserver(callback, options);

const target = document.querySelector(".hero");

observer.observe(target);
