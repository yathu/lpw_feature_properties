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


    $("#budgetRange").slider({
        range: true,
        min: 0,
        max: 100,
        // step:10,
        values: [25, 75],
        slide: function (event, ui) {
            $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
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


    //city filter input related
    $('#cityFilterInput').on('keyup',function (){
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
