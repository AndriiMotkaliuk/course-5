import $ from 'jquery';
import 'slick-carousel';

$('.news-slider').slick({
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,

    prevArrow: `<button type="button" class="prev-arrow slider-arrow">
        <img src="images/scroll.svg" alt="scroll">
    </button>`,
    nextArrow: `<button type="button" class="next-arrow slider-arrow">
        <img src="images/scroll.svg" alt="scroll">
    </button>`,

    autoplay: true,
    responsive: [
        {
            breakpoint: 1360,
            settings: {
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
            }
        }
    ]
});
