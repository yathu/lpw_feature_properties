$(document).ready(function () {

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
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 2,
                // spaceBetween: 20
            },
            768:{
                slidesPerView: 'auto',
            }
            // // when window width is >= 480px
            // 480: {
            //     slidesPerView: 3,
            //     spaceBetween: 30
            // },
            // // when window width is >= 640px
            // 640: {
            //     slidesPerView: 4,
            //     spaceBetween: 40
            // }
        }
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
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 2,
                // spaceBetween: 20
            },
            768:{
                slidesPerView: 'auto',
            }
            // // when window width is >= 480px
            // 480: {
            //     slidesPerView: 3,
            //     spaceBetween: 30
            // },
            // // when window width is >= 640px
            // 640: {
            //     slidesPerView: 4,
            //     spaceBetween: 40
            // }
        }
    });


    $("#budgetRange").slider({
        range: true,
        min: 0,
        max: 100,
        // step:10,
        values: [25, 75],
        slide: function (event, ui) {
            // $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
            appendSliderFirstVal(ui.values[0]);
            appendSliderLastVal(ui.values[1]);
        }
    });

    var val = $('#budgetRange').slider("values")[0];
    $("#budgetRange span.ui-slider-handle:first").append("<span>" + val + "</span>");
    var val2 = $('#budgetRange').slider("values")[1];
    var finalVal2 = val2 == 0 ? 0 : val2 + 'M';
    $("#budgetRange span.ui-slider-handle:last").append("<span>" + finalVal2 + "</span>");


    function appendSliderFirstVal(value) {
        var finalVal = value == 0 ? 0 : value + 'M';
        $("#budgetRange span.ui-slider-handle:first span").html(finalVal);
    }

    function appendSliderLastVal(value) {
        var finalVal = value == 0 ? 0 : value + 'M';
        $("#budgetRange span.ui-slider-handle:last span").html(finalVal);
    }

    //budget slider labels
    for (let i = 0; i <= 10; i++) {
        $("#budget-labels").append("<span class='slider-label' style='left: calc(" + (i * 10) + "% - 13px)'><i>|</i>" + i + "</span>");
    }


    $("#areaSqftRange").slider({
        range: true,
        min: 0,
        max: 5000,
        // step:10,
        values: [500, 3000],
        slide: function (event, ui) {
            // $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
            appendSqftSliderFirstVal(ui.values[0]);
            appendSqftSliderLastVal(ui.values[1]);
        }
    });

    var sqftVal = $('#areaSqftRange').slider("values")[0];
    var sqftVal2 = $('#areaSqftRange').slider("values")[1];
    var SqftFinalVal2 = sqftVal2 == 0 ? 0 : sqftVal2 + 'M';

    $("#areaSqftRange span.ui-slider-handle:first").append("<span>" + sqftVal + "</span>");
    $("#areaSqftRange span.ui-slider-handle:last").append("<span>" + SqftFinalVal2 + "</span>");


    function appendSqftSliderFirstVal(value) {
        var finalVal = value == 0 ? 0 : value + 'M';
        $("#areaSqftRange span.ui-slider-handle:first span").html(finalVal);
    }

    function appendSqftSliderLastVal(value) {
        var finalVal = value == 0 ? 0 : value + 'M';
        $("#areaSqftRange span.ui-slider-handle:last span").html(finalVal);
    }

    //budget slider labels
    for (let i = 0; i <= 20; i++) {
        var isOdd = (i % 2) !== 0;
        console.log(isOdd);
        $("#areaSqftLabels").append("<span class='slider-label' style='left: calc(" + (i * 5) + "% - 13px)'><i>|</i>" + (isOdd ? "" : (i * 250)) + "</span>");
    }


    //city filter input related
    $('#cityFilterInput').on('keyup', function () {
        var value = this.value;
        console.log(value);

        $("input[name='filter_location']").each(function (index, obj) {
            if ($(this).val().indexOf(value) != -1) {
                $(this).parent('.form-check').show();
            } else {
                $(this).parent('.form-check').hide();
            }
        });

    });

    //city filter input related

});
