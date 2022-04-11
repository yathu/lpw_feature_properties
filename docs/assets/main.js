$(document).ready(function (){

    console.log("ssssss==>");
    alert(1);
    var swiper = new Swiper(".priceRangeSwiper", {
        slidesPerView: 3,
        spaceBetween: 30,
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });

});
