$(document).ready(function () {

    new Swiper(".detailsMenuSwiper", {
        slidesPerView: "auto",
        spaceBetween: 20,
    });

    $('.showAbout').on("click",()=>{
        $('.about-container>div').toggleClass('hide-text');
    });

});
