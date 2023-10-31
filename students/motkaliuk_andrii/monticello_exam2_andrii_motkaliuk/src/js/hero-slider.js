import $ from 'jquery';
import 'slick-carousel';

$('.hero-slider').slick({
    dots: true,
    vertical: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    verticalSwiping: false,
    arrows: false,
    autoplay: true,
    pauseOnHover: false,
});
