$(document).ready(function () {



    var phoneNoModal = new bootstrap.Modal(document.getElementById('phoneNoModal'),)
    var callbackModal = new bootstrap.Modal(document.getElementById('callbackModal'),)

    // phoneNoModal.show();

    $('#btnShowPhone').on("click",function () {
        callbackModal.hide();
        setTimeout(()=> phoneNoModal.show(),100);
    });

    var input = document.querySelector("#phoneNo");
    window.intlTelInput(input, {
        initialCountry: "lk",
        allowDropdown:true,
    });

    $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();
        var width = $(window).width();

        console.log(width,scroll);
        if(scroll > 60 && width <768){
            $('.map-enabled>.filter-form-container').addClass('top-0');
        }else {
            $('.map-enabled>.filter-form-container').removeClass('top-0');
        }
        // if window < 768
        // Do something
    });

    // $('#budgetDropMenu').on('click',function (){
    //     e.stopPropagation();
    // });

    // $('#callbackModal').modal('show');

    // $('.filter-form-container .controls>div.col').addEventListener("click",function () {
    //     console.log('click');
    // });

    $('#totalTab').on('click',function (){
        $('#totalTabContent').show();
        $('#sqftTabContent').hide();
    });
    $('#sqftTab').on('click',function (){
        $('#totalTabContent').hide();
        $('#sqftTabContent').show();
    });

    $('.filter-form-container .controls>div.col').on("click",function (e) {
       // var id = $(this).find('button').data("id");
       // console.log("id==>",id);
    });


    let lastScroll = 0;
    window.addEventListener("scroll", () => {
        let currentScroll = window.pageYOffset;

        console.log("currentScroll==>",currentScroll);

        if ((currentScroll - lastScroll > 0) && currentScroll > 480) {
            $('.filter-form-container').removeClass('sticky-top');
        } else {
            $('.filter-form-container').addClass('sticky-top');
        }
        lastScroll = currentScroll;
    });

    $('#testpicker').selectpicker();
    $('#possesionYear').selectpicker();
    $('#bedroom_mobile').selectpicker();
    $('#possession_mobile').selectpicker();

    var myModal = new bootstrap.Modal(document.getElementById('mobModal'));

    // myModal.show();


    new Swiper('#sortSwiper', {
        loop: false,
        slidesPerView: 'auto',
        // slidesPerView: 4,
        spaceBetween: 0,
        navigation: {
            nextEl: ".sort-swiper-next",
            prevEl: ".sort-swiper-prev",
        },
    });

    new Swiper("#priceRangeSwiper", {
        slidesPerView: 'auto',
        spaceBetween: 15,
        navigation: {
            nextEl: ".price-range-swiper-button-next",
            prevEl: ".price-range-swiper-button-prev",
        },
    });

    new Swiper("#locationRangeSwiper", {
        slidesPerView: 'auto',
        spaceBetween: 15,
        navigation: {
            nextEl: ".price-range-swiper-button-next-1",
            prevEl: ".price-range-swiper-button-prev-1",
        },
    });

    new Swiper("#otherRangeSwiper", {
        slidesPerView: 'auto',
        spaceBetween: 15,
        navigation: {
            nextEl: ".price-range-swiper-button-next-2",
            prevEl: ".price-range-swiper-button-prev-2",
        },
    });

    new Swiper(".property-type-swiper", {
        slidesPerView: 'auto',
        spaceBetween: 15,
        centeredSlides: false,
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
        centeredSlides: false,
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 'auto',
                // spaceBetween: 20
            },
            576: {
                slidesPerView: 'auto',
            },
            768: {
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
        autoplay: {
            delay: 10000,
        }
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
                slidesPerView: 'auto',
                // spaceBetween: 20
            },
            576: {
                slidesPerView: 'auto',
            },
            768: {
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


    // $("#budgetRange").slider({
    //     range: true,
    //     min: 0,
    //     max: 100,
    //     step: 5,
    //     values: [0, 5],
    //     slide: function (event, ui) {
    //         // $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
    //         appendSliderFirstVal(ui.values[0]);
    //         appendSliderLastVal(ui.values[1]);
    //
    //     }
    // });

    // var val = $('#budgetRange').slider("values")[0];
    // var finalVal1 = val == 0 ? 0 : (val + 'M');

    // $("#budgetRange span.ui-slider-handle:first").append("<span>" + finalVal1 + "</span>");
    // var val2 = $('#budgetRange').slider("values")[1];
    // var finalVal2 = val2 == 0 ? 0 : val2 + 'M';
    // $("#budgetRange span.ui-slider-handle:last").append("<span>" + finalVal2 + "</span>");

    // $('#budgetStart').html(finalVal1);
    // $('#budgetEnd').html(val2 + 'M');

    // function appendSliderFirstVal(value) {
    //     var finalVal = value == 0 ? 0 : value + 'M';
    //     $("#budgetRange span.ui-slider-handle:first span").html(finalVal);
    //     $('#budgetStart').html(finalVal);
    //
    // }

    // function appendSliderLastVal(value) {
    //     var finalVal = value == 0 ? 0 : value + 'M';
    //     $("#budgetRange span.ui-slider-handle:last span").html(finalVal);
    //     $('#budgetEnd').html(finalVal);
    // }

    //budget slider labels
    // for (let i = 0; i <= 10; i++) {
    //     $("#budget-labels").append("<span class='slider-label' style='left: calc(" + (i * 10) + "% - 13px)'><i>|</i>" + i + "</span>");
    // }


    let minPrice = $('#totalMinPrice').val();
    let maxPrice = $('#totalMaxPrice').val();

    $('#budgetStart').html(minPrice);
    $('#budgetEnd').html(maxPrice);


    $('#totalMinPrice').on('change', function () {
        $('#budgetStart').html(this.value);
    });

    $('#totalMaxPrice').on('change', function () {
        $('#budgetEnd').html(this.value);
    });

    $('#sqftMinPrice').on('change', function () {
        $('#budgetStart').html(this.value);
    });

    $('#sqftMaxPrice').on('change', function () {
        $('#budgetEnd').html(this.value);
    });

    $('input[name="budgetType"]').on('change', function () {
        // var value = $(this).val();
        $("#totalMinPrice").val('0');
        $("#totalMaxPrice").val('any');

        $("#sqftMinPrice").val('0');
        $("#sqftMaxPrice").val('any');

        $('#budgetStart').html('0');
        $('#budgetEnd').html('Any');

    });

    $('input[name="budgetTypeMobile"]').on('change', function () {
        var value = $(this).val();

        $("#totalMinPriceMobile").val('0');
        $("#totalMaxPriceMobile").val('any');

        $("#sqftMinPriceMobile").val('0');
        $("#sqftMaxPriceMobile").val('any');

        if (value == 'sqft'){
            $('#totalSqftMobile').show();
            $('#totalBudgetMobile').hide();
        }else {
            $('#totalSqftMobile').hide();
            $('#totalBudgetMobile').show();
        }
    });

    // $('input[name="budgetType"]:checked').val();


    $("#areaSqftRange").slider({
        range: true,
        min: 0,
        max: 5000,
        // step:10,
        values: [0, 5000],
        slide: function (event, ui) {
            // $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
            appendSqftSliderFirstVal(ui.values[0]);
            appendSqftSliderLastVal(ui.values[1]);
        }
    });

    var sqftVal = $('#areaSqftRange').slider("values")[0];
    var sqftVal2 = $('#areaSqftRange').slider("values")[1];
    var SqftFinalVal2 = sqftVal2 == 0 ? 0 : (sqftVal2 == 5000 ? 'any' : sqftVal2);

    $("#areaSqftRange span.ui-slider-handle:first").append("<span>" + sqftVal + "</span>");
    $("#areaSqftRange span.ui-slider-handle:last").append("<span>" + SqftFinalVal2 + "</span>");


    function appendSqftSliderFirstVal(value) {
        var finalVal = value == 0 ? 0 : (value == 5000 ? 'any' : value);
        $("#areaSqftRange span.ui-slider-handle:first span").html(finalVal);
    }

    function appendSqftSliderLastVal(value) {
        var finalVal = value == 0 ? 0 : (value == 5000 ? 'any' : value);
        $("#areaSqftRange span.ui-slider-handle:last span").html(finalVal);
    }


    //budget slider labels
    for (let i = 0; i <= 20; i++) {
        var isOdd = (i % 2) !== 0;
        console.log(isOdd);
        $("#areaSqftLabels").append("<span class='slider-label' style='left: calc(" + (i * 5) + "% - 13px)'><i>|</i>" + (isOdd ? "" : (i == 20 ? "Any" : i * 250)) + "</span>");
    }


    //mobile sqft start
    $("#areaSqftRangeMobile").slider({
        range: true,
        min: 0,
        max: 5000,
        // step:10,
        values: [0, 5000],
        slide: function (event, ui) {
            // $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
            appendSqftSliderFirstValMobile(ui.values[0]);
            appendSqftSliderLastValMobile(ui.values[1]);
        }
    });

    var sqftValMobile = $('#areaSqftRangeMobile').slider("values")[0];
    var sqftVal2Mobile = $('#areaSqftRangeMobile').slider("values")[1];
    var SqftFinalVal2Mobile = sqftVal2Mobile == 0 ? 0 : (sqftVal2Mobile == 5000 ? 'any' : sqftVal2Mobile);

    $("#areaSqftRangeMobile span.ui-slider-handle:first").append("<span>" + sqftValMobile + "</span>");
    $("#areaSqftRangeMobile span.ui-slider-handle:last").append("<span>" + SqftFinalVal2Mobile + "</span>");


    function appendSqftSliderFirstValMobile(value) {
        var finalVal = value == 0 ? 0 : (value == 5000 ? 'any' : value);
        $("#areaSqftRangeMobile span.ui-slider-handle:first span").html(finalVal);
    }

    function appendSqftSliderLastValMobile(value) {
        console.log("value==>", value);

        var finalVal = value == 0 ? 0 : (value == 5000 ? 'any' : value);
        $("#areaSqftRangeMobile span.ui-slider-handle:last span").html(finalVal);
    }


    for (let i = 0; i <= 10; i++) {
        var isOdd = (i % 2) !== 0;
        $("#areaSqftLabelsMobile").append("<span class='slider-label' style='left: calc(" + (i * 10) + "% - 13px)'><i>|</i>" + (isOdd ? "" : (i == 10 ? "Any" : i * 500)) + "</span>");
    }
    //end mobile sqft


    //city filter input related
    // $('#cityFilterInput').on('keyup', function () {
    //     var value = this.value;
    //     console.log(value);
    //
    //     $("input[name='filter_location']").each(function (index, obj) {
    //         if ($(this).val().indexOf(value) != -1) {
    //             $(this).parent('.form-check').show();
    //         } else {
    //             $(this).parent('.form-check').hide();
    //         }
    //     });
    //
    // });

    //city filter input related
    // $('#cityFilterInputMobile').on('keyup',function () {
    //     var value = this.value;
    //     console.log(value);
    //
    //     $("input[name='filter_location_mobile']").each(function (index, obj) {
    //         if ($(this).val().indexOf(value) != -1) {
    //             $(this).parent('.form-check').show();
    //         } else {
    //             $(this).parent('.form-check').hide();
    //         }
    //     });
    //
    // });

    //city filter input related


    //like property
    $('.property-love').on('click', function () {
        $(this).toggleClass('active');
    });


    //reset desktop
    $('#btnResetDesktop').on("click", function () {
        $('.selectpicker').selectpicker('deselectAll');
        $('.selectpicker').selectpicker('val', '');

        // $('#budgetRange').slider('option', {values: [0, 5]});
        $('#budgetStart').html('0');
        $('#budgetEnd').html('any');


    });

    //reset desktop modal
    $('#desktopModalBtnReset').on("click", function () {
        $('#areaSqftRange').slider('option', {values: [0, 5000]});

        appendSqftSliderFirstVal(0);
        appendSqftSliderLastVal(5000);
        // $("#areaSqftRange span.ui-slider-handle:first").append("<span>" + 0 + "</span>");
        // $("#areaSqftRange span.ui-slider-handle:last").append("<span>" + 500 + "</span>");
    });


    $('#btnResetMobile').on('click', function () {
        $('.selectpicker').selectpicker('deselectAll');
        $('.selectpicker').selectpicker('val', '');

        $('#areaSqftRangeMobile').slider('option', {values: [0, 5000]});

        appendSqftSliderFirstValMobile(0);
        appendSqftSliderLastValMobile(5000);
    });


    // function solution(message, K) {
    //     var trimmedString = message.substr(0, K);
    //
    //     if (message.charAt(K - 1) == ' ' || message.charAt(K + 1) == ' ' || message.charAt(K).toString() == ' ' || message.length < K) {
    //         return trimmedString.trim();
    //     } else {
    //         trimmedString = trimmedString.substr(0, Math.min(trimmedString.length, trimmedString.lastIndexOf(" ")));
    //         return trimmedString;
    //     }
    // }
    //
    // var msg = "Codility We test coders";
    // var msg2 = "Why not";
    //
    // var output = solution(msg2, 100);
    //
    // console.log("==>", output);

    // function solution(A) {
    //
    //     const array = A.sort(function(a, b) {
    //         return b - a;
    //     });
    //
    //     var sumofArr = array.reduce((firstNum, nextNum) => firstNum + nextNum, 0);
    //
    //     let filters = 0;
    //     let newArr = [...array];
    //
    //     for (let i = 0; i<array.length; i++){
    //
    //         var sumofnewArr = newArr.reduce((firstNum, nextNum) => firstNum + nextNum, 0);
    //         var nextindex = i == array.length -1 ? i : i+1;
    //
    //         while (newArr[i] >= array[nextindex] && sumofnewArr >= (sumofArr/2)) {
    //             console.log('...................................');
    //             newArr[i] = newArr[i]/2;
    //             filters = filters + 1;
    //         }
    //     }
    //
    //     console.log('filters==>',filters);
    //     return filters;
    //
    // }
    //
    // var arr = [5, 19, 8, 1];
    //
    // solution(arr);

});
