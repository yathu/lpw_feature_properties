$(document).ready(function (){

    new Swiper(".priceRangeSwiper", {
        slidesPerView: 'auto',
        spaceBetween: 15,
        navigation: {
            nextEl: ".price-range-swiper-button-next",
            prevEl: ".price-range-swiper-button-prev",
        },
    });

    new Swiper(".property-type-swiper", {
        slidesPerView: 'auto',
        spaceBetween: 15,
        navigation: {
            nextEl: ".property-type-swiper-button-next",
            prevEl: ".property-type-swiper-button-prev",
        },
    });

    new Swiper(".city-project-swiper", {
        slidesPerView: 'auto',
        spaceBetween: 15,
        navigation: {
            nextEl: ".city-swiper-button-next",
            prevEl: ".city-swiper-button-prev",
        },
    });

    new Swiper(".tour-swiper", {
        slidesPerView: 1,
        spaceBetween: 15,
        pagination: {
            el: ".tour-swiper-pagination",
            clickable: true,
        },
    });

    new Swiper(".tool-swiper", {
        slidesPerView: 'auto',
        spaceBetween: 15,
        navigation: {
            nextEl: ".tool-swiper-button-next",
            prevEl: ".tool-swiper-button-prev",
        },
    });

});
