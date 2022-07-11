$(document).ready(function () {

    new Swiper(".detailsMenuSwiper", {
        slidesPerView: "auto",
        spaceBetween: 20,
    });

    $('.showAbout').on("click",()=>{
        $('.about-container>div').toggleClass('hide-text');
    });

    $('.showFeatures').on("click",()=>{
        $('.features-container').toggleClass('show-less');
    });

    new Swiper('.payment-plan-swiper', {
        loop: true,
        navigation: {
            nextEl: '.payment-next',
            prevEl: '.payment-prev',
        },
        slidesPerView: 4,
        spaceBetween: 10,
    });

    new Swiper('.loan-swiper', {
        loop: true,
        navigation: {
            nextEl: '.loan-next',
            prevEl: '.loan-prev',
        },
        slidesPerView: 4,
        spaceBetween: 10,
    });

});
