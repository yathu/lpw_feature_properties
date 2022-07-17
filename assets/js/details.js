$(document).ready(function () {

    $('#contactNum').on("click",function (){
        var num = $(this).data("num");
        if(num) $(this).html(num);
    });
    $('#contactWhatsapp').on("click",function (){
        var num = $(this).data("num");
        if(num) $(this).html(num);
    });

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

    new Swiper('.other-project-swiper', {
        loop: true,
        navigation: {
            nextEl: '.loan-next',
            prevEl: '.loan-prev',
        },
        slidesPerView: 3,
        spaceBetween: 10,
    });

    new Swiper('.mapview-swiper', {
        loop: true,
        slidesPerView: "auto",
        navigation: {
            nextEl: '.mapView-next',
            prevEl: '.mapView-prev',
        },
        spaceBetween: 10,
    });


    //property rate chart

    const ctx = document.getElementById('propertyRateChart').getContext('2d');

    var gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgba(251,183,87,0.50)');
    gradient.addColorStop(1, 'rgba(255,212,78,0.00)');


    var myChart = new Chart(ctx, {
        type: "line",
        data: {
            labels: ["Jan 1", "Jan 3", "Jan 5", "Jan 7", "Jan 9", "Jan 11", "Jan 13", "Jan 15"],
            datasets: [
                {
                    label: "Price range",
                    data: [950, 1220, 1340, 1450, 1320, 1220, 1390, 1560],
                    tension: 0.3,
                    fill:true,
                    // backgroundColor: 'rgb(255, 99, 132)',
                    backgroundColor: gradient,
                    borderColor: '#ECA743',
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
        }
    });


    var swiper = new Swiper(".brochure-swiper", {
        // slidesPerView: 3,
        pagination: {
            el: ".swiper-pagination",
            type: "progressbar",
        },
        loop:false,
        navigation: {
            nextEl: ".brochure-next",
            prevEl: ".brochure-prev",
        },
    });

    var swiper = new Swiper(".banner-swiper", {
        // slidesPerView: 3,
        loop:true,
        navigation: {
            nextEl: ".banner-next",
            prevEl: ".banner-prev",
        },
    });

    var myModalEl = document.querySelector('#zoomModal')
    myModalEl.addEventListener('show.bs.modal', function (event) {
        const button = event.relatedTarget;
        const img_path = $(button).data("img");
        console.log(img_path);

        let zoomImg = $(event.target).find('img');

        $(zoomImg).attr("src",img_path);
    });

    var input = document.querySelector("#detailContactPhoneNo");
    window.intlTelInput(input, {
        initialCountry: "lk",
        allowDropdown:true,
    });

});
