$(document).ready(function () {

    var phoneNoModal = new bootstrap.Modal(document.getElementById('phoneNoModal'),)
    var callbackModal = new bootstrap.Modal(document.getElementById('callbackModal'),)

    // phoneNoModal.show();

    $('#btnShowPhone').on("click", function () {

        $('#callbackBtnClose').trigger("click");
        setTimeout(() => phoneNoModal.show(), 0);
    });

    $("#callbackModal").on('shown.bs.modal', function (event) {
        var property = $(event.relatedTarget).data("prperty")
        console.log("property==>", property);
    });

    var input = document.querySelector("#phoneNo");
    window.intlTelInput(input, {
        initialCountry: "lk",
        allowDropdown: true,
    });

    $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();
        var width = $(window).width();

        // console.log(width,scroll);
        if (scroll > 60 && width < 768) {
            $('.map-enabled>.filter-form-container').addClass('top-0');
        } else {
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

    $('#totalTab').on('click', function () {
        $('#totalTabContent').show();
        $('#sqftTabContent').hide();
    });
    $('#sqftTab').on('click', function () {
        $('#totalTabContent').hide();
        $('#sqftTabContent').show();
    });

    $('.filter-form-container .controls>div.col').on("click", function (e) {
        // var id = $(this).find('button').data("id");
        // console.log("id==>",id);
    });


    let lastScroll = 0;
    window.addEventListener("scroll", () => {
        let currentScroll = window.pageYOffset;

        // console.log("currentScroll==>",currentScroll);

        if ((currentScroll - lastScroll > 0) && currentScroll > 480) {
            $('.filter-form-tag').removeClass('sticky-top');
        } else {
            $('.filter-form-tag').addClass('sticky-top');
        }
        lastScroll = currentScroll;
    });

    $('#testpicker').selectpicker();
    $('#possesionYear').selectpicker();
    $('#bedroom_mobile').selectpicker();
    $('#possession_mobile').selectpicker();


    $('#possessionPlus').selectpicker();
    $('input[type=radio][name=possessionInputMobile]').change(function () {
        console.log(this.value);
        $('#possessionPlus').selectpicker('deselectAll');
        $('#possessionPlus').selectpicker('val', '');

        $('.possessionPlus').find("button.dropdown-toggle").removeClass('btn-custom-primary');
        $('.possessionPlus').find("button.dropdown-toggle").addClass('btn-light');
    });

    $("#possessionPlus").change(function () {
        $('input[name="possessionInputMobile"]').prop('checked', false);
        $('.possessionPlus').find("button.dropdown-toggle").addClass('btn-custom-primary');
        $('.possessionPlus').find("button.dropdown-toggle").removeClass('btn-light');
    });


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

        disableMaxPrice(this.value);
    });

    function disableMaxPrice(value) {
        const minValue = parseInt(value);

        console.log("minValue==>", minValue);

        $("#totalMaxPrice > option").each(function () {
            if (this.value == "any") return;

            const optionValue = parseInt(this.value);

            if (optionValue < minValue) {
                $(this).attr("disabled", true);
            } else {
                $(this).attr("disabled", false);
            }
        });

    }

    $('#totalMaxPrice').on('change', function () {
        $('#budgetEnd').html(this.value);
        disableMinPrice(this.value);
    });

    function disableMinPrice(value) {
        const maxValue = parseInt(value);

        console.log("maxValue==>", maxValue);

        $("#totalMinPrice > option").each(function () {
            if (this.value == "any") return;

            const optionValue = parseInt(this.value);

            if (optionValue > maxValue) {
                $(this).attr("disabled", true);
            } else {
                $(this).attr("disabled", false);
            }
        });

    }

    $('#sqftMinPrice').on('change', function () {
        $('#budgetStart').html(this.value);

        disableSqftMaxPrice(this.value);
    });

    function disableSqftMaxPrice(value) {
        const minValue = parseInt(value);

        console.log("minSqftValue==>", minValue);

        $("#sqftMaxPrice > option").each(function () {
            if (this.value == "any") return;

            const optionValue = parseInt(this.value);

            if (optionValue < minValue) {
                $(this).attr("disabled", true);
            } else {
                $(this).attr("disabled", false);
            }
        });

    }


    $('#sqftMaxPrice').on('change', function () {
        $('#budgetEnd').html(this.value);
        disableSqftMinPrice(this.value);
    });

    function disableSqftMinPrice(value) {
        const maxValue = parseInt(value);

        console.log("sqftmaxValue==>", maxValue);

        $("#sqftMinPrice > option").each(function () {
            if (this.value == "any") return;

            const optionValue = parseInt(this.value);

            if (optionValue > maxValue) {
                $(this).attr("disabled", true);
            } else {
                $(this).attr("disabled", false);
            }
        });

    }

    $('input[name="budgetType"]').on('change', function () {
        var value = $(this).val();

        // $("#totalMinPrice").val('0');
        // $("#totalMaxPrice").val('any');
        //
        // $("#sqftMinPrice").val('0');
        // $("#sqftMaxPrice").val('any');
        //
        // $('#budgetStart').html('0');
        // $('#budgetEnd').html('Any');


        if (value === 'sqft') {

            var min = $("#sqftMinPrice").val();
            var max = $("#sqftMaxPrice").val();

            $('#budgetStart').html(min);
            $('#budgetEnd').html(max);

        } else {

            var min = $("#totalMinPrice").val();
            var max = $("#totalMaxPrice").val();

            $('#budgetStart').html(min);
            $('#budgetEnd').html(max);
        }

        // disableMaxPrice(0);
        // disableMinPrice(100);
        //
        // disableSqftMinPrice(100000);
        // disableSqftMaxPrice(0);

    });

    $('#totalMinPriceMobile').on('change', function () {
        disableMaxPriceMobile(this.value);
    });

    function disableMaxPriceMobile(value) {
        const minValue = parseInt(value);

        console.log("minValue==>", minValue);

        $("#totalMaxPriceMobile > option").each(function () {
            if (this.value == "any") return;

            const optionValue = parseInt(this.value);

            if (optionValue < minValue) {
                $(this).attr("disabled", true);
            } else {
                $(this).attr("disabled", false);
            }
        });

    }

    $('#totalMaxPriceMobile').on('change', function () {
        disableMinPriceMobile(this.value);
    });

    function disableMinPriceMobile(value) {
        const maxValue = parseInt(value);

        console.log("maxValue==>", maxValue);

        $("#totalMinPriceMobile > option").each(function () {
            if (this.value == "any") return;

            const optionValue = parseInt(this.value);

            if (optionValue > maxValue) {
                $(this).attr("disabled", true);
            } else {
                $(this).attr("disabled", false);
            }
        });

    }


    $('#sqftMinPriceMobile').on('change', function () {
        disableSqftMaxPriceMobile(this.value);
    });

    function disableSqftMaxPriceMobile(value) {
        const minValue = parseInt(value);

        console.log("minSqftValuemob==>", minValue);

        $("#sqftMaxPriceMobile > option").each(function () {
            if (this.value == "any") return;

            const optionValue = parseInt(this.value);

            if (optionValue < minValue) {
                $(this).attr("disabled", true);
            } else {
                $(this).attr("disabled", false);
            }
        });

    }


    $('#sqftMaxPriceMobile').on('change', function () {
        disableSqftMinPriceMobile(this.value);
    });

    function disableSqftMinPriceMobile(value) {
        const maxValue = parseInt(value);

        console.log("sqftmaxValue==>", maxValue);

        $("#sqftMinPriceMobile > option").each(function () {
            if (this.value == "any") return;

            const optionValue = parseInt(this.value);

            if (optionValue > maxValue) {
                $(this).attr("disabled", true);
            } else {
                $(this).attr("disabled", false);
            }
        });

    }


    $('input[name="budgetTypeMobile"]').on('change', function () {
        var value = $(this).val();

        $("#totalMinPriceMobile").val('0');
        $("#totalMaxPriceMobile").val('any');

        $("#sqftMinPriceMobile").val('0');
        $("#sqftMaxPriceMobile").val('any');

        if (value == 'sqft') {
            $('#totalSqftMobile').show();
            $('#totalBudgetMobile').hide();
        } else {
            $('#totalSqftMobile').hide();
            $('#totalBudgetMobile').show();
        }

        disableMaxPriceMobile(0);
        disableMinPriceMobile(100);

        disableSqftMaxPriceMobile(0);
        disableSqftMinPriceMobile(100000);

    });

    // $('input[name="budgetType"]:checked').val();


    $("#areaSqftRange").slider({
        range: true,
        min: 0,
        max: 6000,
        step: 250,
        values: [0, 6000],
        slide: function (event, ui) {
            // $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
            appendSqftSliderFirstVal(ui.values[0]);
            appendSqftSliderLastVal(ui.values[1]);

            $('#areaSqftRangeValues').val(ui.values[0] + "," + ui.values[1]);
        }
    });

    var sqftVal = $('#areaSqftRange').slider("values")[0];
    var sqftVal2 = $('#areaSqftRange').slider("values")[1];
    var SqftFinalVal2 = sqftVal2 == 0 ? 0 : (sqftVal2 == 6000 ? 'any' : sqftVal2);

    $('#areaSqftRangeValues').val(sqftVal + "," + sqftVal2);


    $("#areaSqftRange span.ui-slider-handle:first").append("<span>" + sqftVal + "</span>");
    $("#areaSqftRange span.ui-slider-handle:last").append("<span>" + SqftFinalVal2 + "</span>");


    function appendSqftSliderFirstVal(value) {
        var finalVal = value == 0 ? 0 : (value == 6000 ? 'any' : value);
        $("#areaSqftRange span.ui-slider-handle:first span").html(finalVal);
    }

    function appendSqftSliderLastVal(value) {
        var finalVal = value == 0 ? 0 : (value == 6000 ? 'any' : value);
        $("#areaSqftRange span.ui-slider-handle:last span").html(finalVal);
    }


    //budget slider labels
    for (let i = 0; i <= 23; i++) {
        var isOdd = (i % 2) !== 0;
        // console.log(isOdd);
        $("#areaSqftLabels").append("<span class='slider-label' style='left: calc(" + (i * 4.16) + "% - 13px)'><i>|</i>" + (isOdd ? "" : (i == 23 ? "Any" : i * 250)) + "</span>");
    }


    //mobile sqft start
    $("#areaSqftRangeMobile").slider({
        range: true,
        min: 0,
        max: 6000,
        // step:10,
        values: [0, 6000],
        slide: function (event, ui) {
            // $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
            appendSqftSliderFirstValMobile(ui.values[0]);
            appendSqftSliderLastValMobile(ui.values[1]);

            $('#areaSqftRangeValuesMobile').val(ui.values[0] + "," + ui.values[1]);

        }
    });

    var sqftValMobile = $('#areaSqftRangeMobile').slider("values")[0];
    var sqftVal2Mobile = $('#areaSqftRangeMobile').slider("values")[1];
    var SqftFinalVal2Mobile = sqftVal2Mobile == 0 ? 0 : (sqftVal2Mobile == 6000 ? 'any' : sqftVal2Mobile);

    $("#areaSqftRangeMobile span.ui-slider-handle:first").append("<span>" + sqftValMobile + "</span>");
    $("#areaSqftRangeMobile span.ui-slider-handle:last").append("<span>" + SqftFinalVal2Mobile + "</span>");

    $('#areaSqftRangeValuesMobile').val(sqftValMobile + "," + sqftVal2Mobile);


    function appendSqftSliderFirstValMobile(value) {
        var finalVal = value == 0 ? 0 : (value == 6000 ? 'any' : value);
        $("#areaSqftRangeMobile span.ui-slider-handle:first span").html(finalVal);
    }

    function appendSqftSliderLastValMobile(value) {
        // console.log("value==>", value);

        var finalVal = value == 0 ? 0 : (value == 6000 ? 'any' : value);
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
        $('#areaSqftRange').slider('option', {values: [0, 6000]});

        appendSqftSliderFirstVal(0);
        appendSqftSliderLastVal(6000);

        setTimeout(() => {
            $('#areaSqftRangeValues').val(0 + "," + 6000);
        }, 500);

        // $("#areaSqftRange span.ui-slider-handle:first").append("<span>" + 0 + "</span>");
        // $("#areaSqftRange span.ui-slider-handle:last").append("<span>" + 500 + "</span>");
    });


    $('#btnResetMobile').on('click', function () {
        $('.selectpicker').selectpicker('deselectAll');
        $('.selectpicker').selectpicker('val', '');

        $('#areaSqftRangeMobile').slider('option', {values: [0, 6000]});

        appendSqftSliderFirstValMobile(0);
        appendSqftSliderLastValMobile(6000);

        setTimeout(() => {
            $('#areaSqftRangeValuesMobile').val(0 + "," + 6000);
        }, 500);


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

    //if translation select changes navigate

    $('#translation_mobile').change(function () {
        var url = $(this).val();
        console.log(url);
        window.location.href = url;
    });

    $("#callSuc").on("click", function () {
        callAlert("success", "successfully sent data :)", '');
    });

    $("#callerror").on("click", function () {
        callAlert("error", "Error sent data :)", '');
    });

    function callAlert(type, message, CloseModal) {

        $('#commonAlertModal').modal('show'); //show the modal first

        if (type === "success") {
            $("#commonAlertModal .success").removeClass('d-none');
            $("#commonAlertModal .error").addClass('d-none');
        } else {
            $("#commonAlertModal .success").addClass('d-none');
            $("#commonAlertModal .error").removeClass('d-none');
        }

        $("#commonAlertModal p").html(message);

        if (CloseModal) {
            $('#' + CloseModal).modal('hide');
        }

    }

});
