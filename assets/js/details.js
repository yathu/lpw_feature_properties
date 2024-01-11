$(document).ready(() => {
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
    isMobileView = vw < 768;

    $('.spec-grid').masonry({
        // options
        itemSelector: '.spec-grid-item',
    });

    $('.menuContainer .swiper-slide').on("click", function (e) {
        e.preventDefault();
        var id = $(this).attr('href');
        var some_element = $(id);
        $('html,body').animate({scrollTop: some_element.offset().top - 80});
    });

    $('.copyUrl').on("click", function () {
        navigator.clipboard.writeText(window.location.href);
        $(this).children('span').html('Copied');
    });

    document.querySelector('.nativeShare')
        .addEventListener('click', event => {
            if (navigator.share) {

                var title = $('#propertyTitle').text();

                navigator.share({
                    title: title,
                    url: window.location.href
                }).then(() => {
                    console.log('Thanks for sharing!');
                }).catch(err => {
                    console.log(
                        "Error while using Web share API:");
                    console.log(err);
                });
            } else {
                console.log("browser not supported...");
            }
        })

    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'LKR',
        currencyDisplay: "symbol",
        minimumFractionDigits: 0,
        // These options are needed to round to whole numbers if that's what you want.
        //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
    });

    $('.dropdown-toggle').dropdown();

    // $('.banner-img-container #love').on("click", function () {
    //     $(this).toggleClass('active');
    // });

    // $('#contactNum').on("click", function () {
    //     $('#showEnquireNum').trigger('click');
    // });

    jQuery.validator.setDefaults({
        onfocusout: function (e) {
            this.element(e);
        },
        onkeyup: false,

        highlight: function (element) {
            // jQuery(element).closest('.form-control').addClass('is-invalid');
        },
        unhighlight: function (element) {
            // jQuery(element).closest('.form-control').removeClass('is-invalid');
            // jQuery(element).closest('.form-control').addClass('is-valid');
        },

        errorElement: 'div',
        errorClass: 'invalid-feedback',
        errorPlacement: function (error, element) {
            if (element.parent('.input-group-prepend').length) {
                $(element).siblings(".invalid-feedback").append(error);
                //error.insertAfter(element.parent());
            } else {
                error.insertAfter(element);
            }
        },
    });

    var form = $("#loanForm");
    form.validate({
        // errorPlacement: function errorPlacement(error, element) { element.before(error); },
        rules: {
            purpose: {
                required: true,
            },
            fullname: {
                required: true,
            },
            living_place: {
                required: true,
            },
            loanPhone: {
                required: true,
                number: true,
            },
            loanEmail: {
                required: true,
            },
        }
    });

    var detailsPopupForm = $("#details_popup_form");
    detailsPopupForm.validate({
        // errorPlacement: function errorPlacement(error, element) { element.before(error); },
        rules: {
            initName: {
                required: true,
            },
            initPhoneNo: {
                required: true,
                number: true,
            },
            initEmail1: {
                required: true,
                email: true
            },
            termsCheck: {
                required: true,
            },
        },
        highlight: function (element) {
            $(element).removeClass('is-valid').addClass('is-invalid');
        },
        unhighlight: function (element) {
            $(element).removeClass('is-invalid').addClass('is-valid');
        },
    });

    var shareDetailForm = $("#shareDetailForm");
    shareDetailForm.validate(
        {
            rules: {
                shareName: {
                    required: true,
                },
                shareEmail: {
                    required: true,
                    email: true
                },
                sharePhone: {
                    required: true,
                    number: true,
                }
            }
        }
    );

    var enqForm = $("#enqForm");
    enqForm.validate({
        // errorPlacement: function errorPlacement(error, element) { element.before(error); },
        rules: {
            inqName: {
                required: true,
            },
            inqContact: {
                required: true,
                number: true,
            },
            inqEmail: {
                required: true,
                email: true
            },
            enqTerms: {
                // required: true,
            },
        },
        highlight: function (element) {
            $(element).removeClass('is-valid').addClass('is-invalid');
        },
        unhighlight: function (element) {
            $(element).removeClass('is-invalid').addClass('is-valid');
        },
    });


    form.children("div").steps({
        headerTag: "h3",
        bodyTag: "section",
        titleTemplate: '<span class="number">#index#</span>',
        transitionEffect: "slideLeft",
        onStepChanging: function (event, currentIndex, newIndex) {
            form.validate().settings.ignore = ":disabled,:hidden";
            return form.valid();
        },
        onFinishing: function (event, currentIndex) {
            form.validate().settings.ignore = ":disabled";
            return form.valid();
        },
        onFinished: function (event, currentIndex) {
            //submit the form
            // alert("Submitted!");
            $("#loanPopup .modal-content").addClass('success-content');
        }
    });

    const loanModal = document.getElementById('loanPopup');
    loanModal.addEventListener('hidden.bs.modal', event => {
        $("#loanPopup .modal-content").removeClass('success-content');
    })

    //$("#loanPopup .modal-content").addClass('success-content');

    // $('#contactNum').on("click", function () {
    //     // console.log(1);
    //
    //     var parent = $(this).parents('.btn-row');
    //
    //     $(this).parents('.btn-row').find('.btn').each(function () {
    //         // console.log(2);
    //         // console.log($(this));
    //
    //
    //         var num = $(this).data("num");
    //         if (num) $(this).find('span').html(num);
    //
    //
    //         $(this).removeClass('d-none');
    //         $(this).addClass('d-flex');
    //     });
    // });

    // $('#contactWhatsapp').on("click",function (){
    //     var num = $(this).data("num");
    //     if(num) $(this).find('span').html(num);
    // });

    $('.floorViewOption').change(function () {

        var name = $(this).attr('name');
        var value = $('input[name=' + name + ']:checked').val();

        console.log(value);

        if (value == '3d') {
            $(this).closest('.image-container').find(".img-2d").addClass('d-none');
            $(this).closest('.image-container').find(".img-3d").removeClass('d-none');
        } else {
            $(this).closest('.image-container').find(".img-2d").removeClass('d-none');
            $(this).closest('.image-container').find(".img-3d").addClass('d-none');
        }
    });

    var detailsMenuSwiper = new Swiper(".detailsMenuSwiper", {
        slidesPerView: "auto",
        spaceBetween: 20,
        // loop:true,
    });

    $('.showAbout').on("click", () => {
        $('.about-container>div').toggleClass('hide-text');
    });

    $('.showFeatures').on("click", () => {
        $('.features-container').toggleClass('show-less');
    });

    $('#videos-nav-tab button').on("click", function (index, el) {
        var thisBtn = $(this)[0];

        $('#videos-nav-tab button').each((index, el) => {
            if (el !== thisBtn) {
                $(el).removeClass('active');
            }
        })
    });

    $("#nextStepItems >.item-col").each(function (index, element) {
        // console.log("index=>",index);
        console.log("index=>", index);

        if (index > 3) {
            if ($(window).width() < 768) {
                $(this).addClass('hide');
            }
        }
    });

    $("#viewNextStep").on("click", function () {
        $('#nextStepItems > .item-col').removeClass('hide');

        $('.viewMoreNext').hide();
    });

    new Swiper('.payment-plan-swiper', {
        loop: false,
        navigation: {
            nextEl: '.payment-next',
            prevEl: '.payment-prev',
        },
        slidesPerView: 4,
        spaceBetween: 10,
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 3.5,
            },
            576: {
                slidesPerView: 4.5,
            },
            768: {
                slidesPerView: 5,
            },
            992: {
                slidesPerView: 5,
            }
        }
    });

    new Swiper('.land-payment-plan-swiper', {
        loop: true,
        navigation: {
            nextEl: '.land-payment1-next',
            prevEl: '.land-payment1-prev',
        },
        slidesPerView: 4,
        spaceBetween: 10,
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 3.5,
            },
            576: {
                slidesPerView: 4.5,
            },
            768: {
                slidesPerView: 5,
            },
            992: {
                slidesPerView: 5,
            }
        }
    });

    new Swiper('.land-payment-plan-swiper2', {
        loop: true,
        navigation: {
            nextEl: '.land-payment2-next',
            prevEl: '.land-payment2-prev',
        },
        slidesPerView: 4,
        spaceBetween: 10,
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 3.5,
            },
            576: {
                slidesPerView: 4.5,
            },
            768: {
                slidesPerView: 5,
            },
            992: {
                slidesPerView: 5,
            }
        }
    });

    new Swiper('.land-payment-plan-swiper3', {
        loop: true,
        navigation: {
            nextEl: '.land-payment3-next',
            prevEl: '.land-payment3-prev',
        },
        slidesPerView: 4,
        spaceBetween: 10,
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 3.5,
            },
            576: {
                slidesPerView: 4.5,
            },
            768: {
                slidesPerView: 5,
            },
            992: {
                slidesPerView: 5,
            }
        }
    });

    new Swiper('.videos-menu-swiper', {
        loop: false,
        navigation: {
            nextEl: '.video-prev',
            prevEl: '.video-next',
        },
        slidesPerView: 4,
        spaceBetween: 10,
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 3.5,
            },
            576: {
                slidesPerView: 4.5,
            },
            768: {
                slidesPerView: 5,
            },
            992: {
                slidesPerView: 5,
            }
        }
    });


    new Swiper('.loan-swiper', {
        loop: false,
        navigation: {
            nextEl: '.loan-next',
            prevEl: '.loan-prev',
        },
        slidesPerView: "auto",
        spaceBetween: 10,
        // breakpoints: {
        //     // when window width is >= 320px
        //     320: {
        //         slidesPerView: 2.5,
        //     },
        //     576: {
        //         slidesPerView: 3.5,
        //     },
        //     768: {
        //         slidesPerView: 4.5,
        //     },
        //     992: {
        //         slidesPerView: 4.5,
        //     }
        // }
    });

    new Swiper('.videos-menu-swiper', {
        loop: false,
        slidesPerView: "auto",
        spaceBetween: 10,
        navigation: {
            nextEl: '.video-next',
            prevEl: '.video-prev',
        },
    });

    const similarSwiper = new Swiper('.other-project-swiper', {
        loop: false,
        navigation: {
            nextEl: '.other-project-next',
            prevEl: '.other-project-prev',
        },
        slidesPerView: 3,
        spaceBetween: 15,
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1.5,
            },
            576: {
                slidesPerView: 2.5,
            },
            768: {
                slidesPerView: 2.5,
            },
            992: {
                slidesPerView: 2.5,
            },
            1200: {
                slidesPerView: 3.5,
            }
        }
    });


    $('.similar-filter-btn').on("click", function () {
        const filterPrice = $(this).data("simmler-filter");

        $('.other-project-swiper').find('.swiper-slide-item').each((i, el) => {

            const priceData = $(el).data("price");

            if (filterPrice == priceData) {
                //show
                $(el).removeClass('d-none');
                $(el).addClass('swiper-slide');
            } else {
                //hide
                $(el).addClass('d-none');
                $(el).removeClass('swiper-slide');
            }

            similarSwiper.updateSlides();

        })
    });

    // new Swiper('.mapview-swiper', {
    //     loop: false,
    //     slidesPerView: 4.5,
    //     navigation: {
    //         nextEl: '.mapView-next',
    //         prevEl: '.mapView-prev',
    //     },
    //     spaceBetween: 10,
    //     breakpoints: {
    //         // when window width is >= 320px
    //         320: {
    //             slidesPerView: 2.5,
    //         },
    //         375: {
    //             slidesPerView: 3.2,
    //         },
    //         450: {
    //             slidesPerView: 3.5,
    //         },
    //         485: {
    //             slidesPerView: 4.2,
    //         },
    //         576: {
    //             slidesPerView: 4.5,
    //         },
    //         768: {
    //             slidesPerView: 5.5,
    //         },
    //         992: {
    //             slidesPerView: 5.5,
    //         },
    //         1200: {
    //             slidesPerView: 6.5,
    //         },
    //         1440: {
    //             slidesPerView: 7.5,
    //         }
    //     }
    // });

    new Swiper('.locality-swiper', {
        loop: true,
        slidesPerView: 'auto',
        navigation: {
            nextEl: '.locality-next',
            prevEl: '.locality-prev',
        },
        spaceBetween: 15,
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1.2,
            },
            576: {
                slidesPerView: 1.3,
            },
            768: {
                slidesPerView: 2.3,
            },
            992: {
                slidesPerView: 2.2,
            },
            1200: {
                slidesPerView: 2.3,
            },
        }
    });

    new Swiper('.insight-swiper', {
        loop: true,
        slidesPerView: 'auto',
        navigation: {
            nextEl: '.highlight-next',
            prevEl: '.highlight-prev',
        },
        spaceBetween: 15,
        breakpoints: {
            320: {
                slidesPerView: 1.2,
            },
            576: {
                slidesPerView: 2.2,
            },
            768: {
                slidesPerView: 2.5,
            },
            992: {
                slidesPerView: 2.4,
            },
            1200: {
                slidesPerView: 3,
            },
            1440: {
                slidesPerView: 3,
            }
        }
    });

    new Swiper('.feature-project-swiper', {
        loop: true,
        slidesPerView: 'auto',
        navigation: {
            nextEl: '.featured-next',
            prevEl: '.featured-prev',
        },
        spaceBetween: 15,
        breakpoints: {
            320: {
                slidesPerView: 1.1,
            },
            425: {
                slidesPerView: 1.3,
            },
            576: {
                slidesPerView: 1.3,
            },
            768: {
                slidesPerView: 2.2,
            },
            992: {
                slidesPerView: 2.2,
            },
            1200: {
                slidesPerView: 2.5,
            },
            1440: {
                slidesPerView: 2.8,
            }
        }
    });


    // property rate chart

    var ctx = document.getElementById('propertyRateChart').getContext('2d');

    var gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgba(251,183,87,0.50)');
    gradient.addColorStop(1, 'rgba(255,212,78,0.00)');

    var buyData = {
        labels: ["Jan 1", "Jan 3", "Jan 5", "Jan 7", "Jan 9", "Jan 11", "Jan 13", "Jan 15"],
        data: [200, 1220, 1340, 1450, 1320, 1220, 1390, 1560]
    };

    var rentData = {
        labels: ["Jan 1", "Jan 2", "Jan 4", "Jan 7", "Jan 10", "Jan 11", "Jan 13", "Jan 16"],
        data: [600, 1120, 750, 1050, 1320, 1220, 1390, 1560]
    };

    var buySqftData = {
        labels: ["Jan 1", "Jan 3", "Jan 5", "Jan 7", "Jan 9", "Jan 11", "Jan 13", "Jan 15"],
        data: [400, 1220, 1340, 300, 1320, 1220, 1390, 1560]
    };

    var rentSqftData = {
        labels: ["Jan 1", "Jan 3", "Jan 5", "Jan 7", "Jan 9", "Jan 11", "Jan 13", "Jan 15"],
        data: [800, 300, 1340, 1300, 1320, 400, 1390, 200]
    };

    var myChart = new Chart(ctx, {
        type: "line",
        data: {
            labels: buyData.labels,
            datasets: [
                {
                    label: "Price range",
                    data: buyData.data,
                    tension: 0.3,
                    fill: true,
                    // backgroundColor: 'rgb(255, 99, 132)',
                    backgroundColor: gradient,
                    borderColor: '#ECA743',
                },
            ],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    grid: {
                        display: false
                    }
                },
                y: {
                    grid: {
                        display: false
                    }
                }
            }
        }
    });


    $('input[name=chartType]').change(function () {
        var value = $('input[name=chartType]:checked').val();
        const priceOption = $('input[name="price_option"]:checked').val();

        var data;

        if (value == 'rent') {
            data = rentData;

            if (priceOption == 'sqftPrice') {
                data = rentSqftData;
            }
        } else if (priceOption == 'sqftPrice') {
            data = buySqftData;
        } else {
            data = buyData;
        }

        // myChart.data.datasets = data.data;
        // myChart.data.labels = data.labels;


        myChart.data.labels = data.labels;

        myChart.data.datasets.pop();
        myChart.data.datasets.push({
            label: "Price range",
            data: data.data,
            tension: 0.3,
            fill: true,
            backgroundColor: gradient,
            borderColor: '#ECA743',
        });


        myChart.update();

    });


    $('input[name=price_option]').change(function () {
        var value = $('input[name=chartType]:checked').val();
        const priceOption = $('input[name="price_option"]:checked').val();

        var data;

        if (value == 'buy') {

            if (priceOption == 'sqftPrice') {
                data = buySqftData;
            } else {
                data = buyData;
            }

        } else {

            if (priceOption == 'sqftPrice') {
                data = rentSqftData;
            } else {
                data = rentData;
            }

        }

        // if(priceOption == 'sqftPrice'){
        // }


        myChart.data.labels = data.labels;

        myChart.data.datasets.pop();
        myChart.data.datasets.push({
            label: "Price range",
            data: data.data,
            tension: 0.3,
            fill: true,
            backgroundColor: gradient,
            borderColor: '#ECA743',
        });


        myChart.update();

    });


    // var swiper = new Swiper(".brochure-swiper", {
    //     // slidesPerView: 3,
    //     pagination: {
    //         el: ".swiper-pagination",
    //         type: "progressbar",
    //     },
    //     loop:false,
    //     navigation: {
    //         nextEl: ".brochure-next",
    //         prevEl: ".brochure-prev",
    //     },
    // });

    var bannerSwiper = new Swiper(".banner-swiper", {
        loop: false,
        navigation: {
            nextEl: ".banner-next",
            prevEl: ".banner-prev",
        },
        slidesPerView: 1,
        spaceBetween: 0,
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 1,
            },
            992: {
                // slidesPerView: 2,
            },
        },
    });

    myVideoPlayer = videojs.getPlayer('myVideo');

    const ytVideo = $('#youtubeVideo');

    bannerSwiper.on("slideChange", () => {
        ytVideo[0].src = ytVideo[0].src;
        myVideoPlayer.pause();
    });

    var bannerModal = document.querySelector('#bannerModal');
    //
    bannerModal.addEventListener('show.bs.modal', function (event) {
        console.log(event.relatedTarget);
        const element = event.relatedTarget;

        var index = $(element).data("index") || 0;

        console.log("index", index);

        bannerSwiper.slideTo(index);

    });

    bannerModal.addEventListener('hide.bs.modal', () => {
        ytVideo[0].src = ytVideo[0].src;
        myVideoPlayer.pause();
    });


    var myModalEl = document.querySelector('#zoomModal')
    myModalEl.addEventListener('show.bs.modal', function (event) {
        const button = event.relatedTarget;
        let img_path = '';

//        console.log(event.relatedTarget);

        const checked = $(button).closest('.image-container').find('.floor-img').each((i, obj) => {

            var isHide = $(obj).hasClass('d-none');

            if (!isHide) {
                img_path = $(obj).attr('src');
            }
            console.log("isHide==>", isHide);
        });

//         console.log("checked==>",checked);
//
//        if (checked) {
//            img_path = $(button).data("3d-img");
//        }

        // console.log(img_path);

        let zoomImg = $(event.target).find('img');

        $(zoomImg).attr("src", img_path);
    });

    var input = document.querySelector("#detailContactPhoneNo");
    window.intlTelInput(input, {
        initialCountry: "lk",
        allowDropdown: true,
    });

    // var requestCallPhone = document.querySelector("#requestCallPhone");
    // window.intlTelInput(requestCallPhone, {
    //     initialCountry: "lk",
    //     allowDropdown: true,
    // });

    var initPhoneNo = document.querySelector("#initPhoneNo");
    window.intlTelInput(initPhoneNo, {
        initialCountry: "lk",
        allowDropdown: true,
    });

    // var contactFrmPhoneNo = document.querySelector("#contactNo");
    // window.intlTelInput(contactFrmPhoneNo, {
    //     initialCountry: "lk",
    //     allowDropdown: true,
    // });

    var inqContact = document.querySelector("#inqContact");
    window.intlTelInput(inqContact, {
        initialCountry: "lk",
        allowDropdown: true,
    });

    //inqContact

    var sharePhone = document.querySelector("#sharePhone");
    window.intlTelInput(sharePhone, {
        initialCountry: "lk",
        allowDropdown: true,
    });

    // var bannercontactNo = document.querySelector("#bannercontactNo");
    // window.intlTelInput(bannercontactNo, {
    //     initialCountry: "lk",
    //     allowDropdown: true,
    // });

    var DetailsPhoneNoModal = new bootstrap.Modal(document.getElementById('DetailsPhoneNoModal'),)
    var detailsInitPopup = new bootstrap.Modal(document.getElementById('detailsPopup'),);

    var WhatsAppModal = new bootstrap.Modal(document.getElementById('DetailsWhatsAppModal'),);


    var dePhoneModal = document.getElementById('DetailsPhoneNoModal');
    dePhoneModal.addEventListener('hidden.bs.modal', event => {
        $('body').css('overflow', 'auto');
    });


    // var commonAlertModal = document.getElementById('commonAlertModal');
    // commonAlertModal.addEventListener('hidden.bs.modal', event => {
    //     $('body').removeClass('modal-open');
    //     $('.modal-backdrop').remove();
    //     $("body").removeAttr("style");
    // });
    //
    // var myModalEl = document.getElementById('commonAlertModal',{});
    // var modal = bootstrap.Modal.getInstance(myModalEl)
    // modal.hide();

    $('#btnShowPhone').on("click", function () {

        $('#detailsCallbackBtnClose').trigger("click");
        setTimeout(() => DetailsPhoneNoModal.show(), 0);
    });

    // setTimeout(() => {
    //     detailsInitPopup.show();
    // }, 30000);

    $('#showSpecification').on("click", function () {
        $('#specContent').toggleClass('show-less');
    });


    $('#showTeam').on("click", function () {
        $('#teamShowMoreContent').toggleClass('show-less');
    });

    // $('#showEnquireNum').on("click", function () {
    //     $('.phone-info').removeClass('hide');
    //     $('#contactCard').removeClass('d-none');
    //     $(this).hide();
    //     $('.show-box').addClass('hide-show-box');
    // });

    $('#viewAgent').on('click', function () {
        showShareDetail();
    });

    //show phones after popup submited

    $('#btnShowPhoneDetailModal').on("click", function () {

        if (shareDetailForm.valid()) {

            if (isMobileView) {
                if(isWhatsApp){
                    showWhatsAppModal();

                } else {
                    showPhoneNoModal();
                }

            } else {
                $('#phoneInfo').removeClass('hide');
                $('#viewAgent').removeClass('d-md-inline-flex');
                $('#viewAgent').addClass('d-none');
            }
        }

    });

    $('#btnShowPhoneDetailNow').on("click",function () {
        shareDetailModal.hide();

        if (isMobileView) {
            if(isWhatsApp){
                showWhatsAppModal();

            } else {
                showPhoneNoModal();
            }

        } else {
            $('#phoneInfo').removeClass('hide');
            $('#viewAgent').removeClass('d-md-inline-flex');
            $('#viewAgent').addClass('d-none');
        }

    });

    $('#agentNum').on('click', function () {
        setTimeout(() => {
            showShareDetail();
        }, 1000)
    });

    const shareModalEl = document.getElementById('shareDetailModal');
    var shareDetailModal = new bootstrap.Modal(shareModalEl, {
        keyboard: false
    });


    const showShareDetail = () => setTimeout(() => {
        shareDetailModal.show();
    }, 500);


    var lastScrollTop = 0;
    $(window).scroll(function (event) {
        var st = $(this).scrollTop();
        if (st > lastScrollTop) {
            // downscroll code
        } else {

            if (localStorage.getItem("popupShowed") === null) {
                detailsInitPopup.show();
                window.localStorage.setItem('popupShowed', true);
            }
        }
        lastScrollTop = st;
    });

    //menu activate when scroll


    onScroll();
    $(document).on("scroll", onScroll);

    function onScroll(event) {
        var scrollPos = $(document).scrollTop();
        const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
        const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)

        // console.log("scrollPos==>", scrollPos);

        if ($(window).scrollTop() + $(window).height() == $(document).height()) {
            // var totalSlides =  detailsMenuSwiper.slides.length - 2;
            var totalSlides = $('.detailsMenuSwiper a:not(.swiper-slide-duplicate)').length;

            $('.detailsMenuSwiper a').each(function (index, element) {
                // console.log(element);
                $(element).removeClass('active');
            });
            $('.detailsMenuSwiper a:last-child').addClass('active');

        }

        $('.detailsMenuSwiper a').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));

            console.log("refElement==>",refElement);

            var elementHeight = refElement.height();
            var elementPosition = refElement.position().top;

            // console.log(vh,vw);

            if (vw >= 576) {
                elementPosition -= (vh / 4);
            } else {
                elementPosition -= 120;
            }


            if (elementPosition <= scrollPos && elementPosition + elementHeight > scrollPos) {

                // var nextIndex = currLink.attr("aria-label").trim().charAt(0);
                var nextIndex = currLink.attr("aria-label").trim().split('/')[0];
                // var nextIndex = currLink.data('swiper-slide-index');
                // console.log("nextIndex==>",nextIndex);

                if (nextIndex != detailsMenuSwiper.activeIndex) {
                    console.log(refElement, scrollPos, elementPosition, elementHeight);

                    // console.log(nextIndex);

                    // console.log("nextIndex==>",nextIndex);
                    // console.log(currLink);


                    detailsMenuSwiper.slideTo(nextIndex - 1);

                    $('a').removeClass("active");
                    currLink.addClass("active");

                    return;
                }


            } else {
                // console.log("currLink==>",currLink);
                // currLink.removeClass("active");

                // console.log("else...");
            }
        });

        if (scrollPos == 0) {
            // console.log("scrollPos++>");
            $('.detailsMenuSwiper a:first-child').addClass('active');
        }

    }


    $("#propertyValueSlider").slider({
        range: false,
        min: 1000000,
        max: 100000000,
        step: 500000,
        slide: function (event, ui) {
            $("#propertyValue").val(formatter.format(ui.value).replace("LKR", ""));
            loanCalculator();
        }
    });

    $("#propertyValue").on("change", function () {
        var val = $(this).val().replace(/,/g, "");
        var propertyVal = $("#propertyValueSlider").slider("value");

        if (val >= 1000000 && val <= 100000000) {
            $("#propertyValueSlider").slider('value', val);
            $("#propertyValue").val(formatter.format(val).replace("LKR", ""));
        } else {
            $("#propertyValue").val(formatter.format(propertyVal).replace("LKR", ""));
        }
        loanCalculator();
    });


    $("#downPaymentSlider").slider({
        range: false,
        min: 20,
        max: 100,
        step: 5,
        slide: function (event, ui) {
            $("#downPayPer").text(ui.value);

            const propertyValue = $('#propertyValueSlider').slider('values', 0);
            var downPay = (propertyValue / 100) * ui.value;
            // $("#downPayment").val(downPay);
            $("#downPayment").val(formatter.format(downPay).replace("LKR", ""));


            loanCalculator();
        }
    });

    $("#downPayment").on("change", function () {
        var val = $(this).val().replace(/,/g, "");
        var propertyValue = $("#propertyValue").val().replace(/,/g, "");

        var newDownPercentage = ((val / propertyValue) * 100).toFixed(2);

        var OlddownPercentage = $("#downPaymentSlider").slider("value");


        if (newDownPercentage >= 20 && newDownPercentage <= 100) {
            console.log("new");
            $("#downPaymentSlider").slider('value', newDownPercentage);
            $("#downPayPer").text(newDownPercentage);

        } else {
            console.log("new old");
            var downPay = (propertyValue / 100) * OlddownPercentage;
            $("#downPayment").val(downPay);
            $("#downPayPer").text(OlddownPercentage);

        }
        loanCalculator();

    });


    $("#interestRateSlider").slider({
        range: false,
        min: 5,
        max: 30,
        step: 0.5,
        slide: function (event, ui) {
            $("#interestRate").val(ui.value + "%");
            loanCalculator();
        }
    });

    $("#interestRate").on("change", function () {
        var val = $(this).val().replace('%', '');
        var rate = $("#interestRateSlider").slider("value");

        if (val >= 5 && val <= 30) {
            $("#interestRateSlider").slider('value', val);
        } else {
            $("#interestRate").val(rate + "%");
        }
        loanCalculator();
    });

    $("#loanPeriodSlider").slider({
        range: false,
        min: 1,
        max: 30,
        step: 1,
        slide: function (event, ui) {
            $("#loanPeriod").val(ui.value + " years");
            loanCalculator();
        }
    });

    $("#loanPeriod").on("change", function () {
        var val = $(this).val().replace(" years", '');
        var rate = $("#loanPeriodSlider").slider("value");

        if (val >= 1 && val <= 30) {
            $("#loanPeriodSlider").slider('value', val);
        } else {
            $("#loanPeriod").val(rate);
        }
        loanCalculator();
    });

    // init();
    //
    // function init() {
    //     var propertyVal = $("#propertyValueSlider").slider("value");
    //     var downPaymentPersentage = $("#downPaymentSlider").slider("value");
    //     var interestRate = $("#interestRateSlider").slider("value");
    //     var loanPeriod = $("#loanPeriodSlider").slider("value");
    //
    //     var downPayment = (propertyVal / 100) * downPaymentPersentage;
    //
    //     $("#propertyValue").val(formatter.format(propertyVal).replace("LKR", ""));
    //     $("#downPayment").val(formatter.format(downPayment).replace("LKR", ""));
    //     $("#interestRate").val(interestRate + '%');
    //     $("#loanPeriod").val(loanPeriod + " years");
    // }


    //background-image: linear-gradient(180deg, #B7D464 0%, #009833 100%);

    // var loanChartElement = document.getElementById('loanChart').getContext('2d');
    //
    // var principle_gradient = loanChartElement.createLinearGradient(0, 0, 0, 400);
    // principle_gradient.addColorStop(0, '#B7D464');
    // principle_gradient.addColorStop(1, '#009833');

    // gradient.addColorStop(0, 'rgba(251,183,87,0.50)');
    // gradient.addColorStop(1, 'rgba(255,212,78,0.00)');


    // const data = {
    //     labels: [
    //         'Loan amount ',
    //         'Down Payment',
    //     ],
    //     datasets: [{
    //         label: 'My First Dataset',
    //         data: [300, 200],
    //         backgroundColor: [
    //             principle_gradient,
    //             '#E8E8E8'
    //         ],
    //         hoverOffset: 4
    //     },
    //     ]
    // };
    //
    // const config = {
    //     type: 'doughnut',
    //     data: data,
    //     options: {
    //         plugins: {
    //             htmlLegend: {
    //                 containerID: 'legendContainer',
    //             },
    //             legend: {
    //                 display: false,
    //             }
    //         }
    //     },
    // };
    //
    // const loanChart = new Chart(
    //     loanChartElement,
    //     config
    // );


    // function updateChart(monthlyPayment, totalPayment) {
    //     loanChart.data.datasets[0].data[0] = totalPayment;
    //     loanChart.data.datasets[0].data[1] = monthlyPayment;
    //     loanChart.update();
    // }


    const showPhoneNoModal = () => {
        setTimeout(() => DetailsPhoneNoModal.show(), 0);
    }

    const showWhatsAppModal = () => {
        setTimeout(() => WhatsAppModal.show(), 0);
    }

    let isWhatsApp = false;

    $('.openPopUP').on("click", function () {
        isWhatsApp = false;
        showShareDetail();
        // showPhoneNoModal();
    });

    $('.bottomFloat .openPopWhatsApp').on("click", function () {
        isWhatsApp = true;
        showShareDetail();
        // showWhatsAppModal();
    });

    let myIntervel;

    const isWAPShowed = localStorage.getItem("WAPShowed");
    console.log("isWAPShowed==>", isWAPShowed);

    setTimeout(() => {
        if (!isWAPShowed) {
            showWhatsApp('#whatsAppPopup');
        }

    }, 3000);

    $('#closeWap').on("click", function () {
        $("#whatsAppPopup").addClass('d-none');
        clearInterval(myIntervel);
    });
    $('.overlay-wap').on("click", function () {
        $("#whatsAppPopup").addClass('d-none');
        clearInterval(myIntervel);
    });

    // $('#closeWapV2').on("click", function () {
    //     $("#whatsAppPopupV2").addClass('d-none');
    //     clearInterval(myIntervel);
    // })

    const levelLength = $('#nav_breadcrumb').children().length;
    console.log("levelLength", levelLength);

    if (levelLength > 2) {
        $('#nav_breadcrumb li').each((index, item) => {

            console.log("index=========>", index);

            if (index > 0 && index < levelLength - 1) {
                console.log("item==>", item);

                if ($(item).attr('id') == 'show_breadcrumb') {
                    $(item).removeClass('d-none');
                } else {
                    $(item).addClass('d-none');
                }
            }

            if (index == (levelLength - 1)) {

            }
        })
    }

    $('#show_breadcrumb').on("click", function () {
        $('#nav_breadcrumb li').each((index, item) => {
            if ($(item).attr('id') == 'show_breadcrumb') {
                $(item).addClass('d-none');
            } else {
                $(item).removeClass('d-none');
            }
        });
    });

    //mobile version

    const mobilelevelLength = $('#nav_breadcrumb_mobile').children().length;
    console.log("mobilelevelLength==>", mobilelevelLength);

    if (mobilelevelLength > 2) {
        $('#nav_breadcrumb_mobile li').each((index, item) => {

            console.log("index=========>", index);

            if (index > 0 && index < mobilelevelLength - 1) {
                console.log("item==>", item);

                if ($(item).attr('id') == 'show_breadcrumb_mobile') {
                    $(item).removeClass('d-none');
                } else {
                    $(item).addClass('d-none');
                }
            }

            if (index == (mobilelevelLength - 1)) {

            }
        })
    }

    $('#show_breadcrumb_mobile').on("click", function () {
        $('#nav_breadcrumb_mobile li').each((index, item) => {
            if ($(item).attr('id') == 'show_breadcrumb_mobile') {
                $(item).addClass('d-none');
            } else {
                $(item).removeClass('d-none');
            }
        });
    });


    $('.currencyPicker').selectpicker();

    //bannerImg3

    if ($('.banner-img-count-4').length) {
        const img3 = $('#bannerImg3').attr('src');
        $('#bannerImg5').attr('src', img3);
    }

    const saveModal = new bootstrap.Modal('#saveModal');


    $('#saveBtn').on('click', function () {
        $(this).toggleClass('saved');
        const text = $(this).children('span').text();
        const appendText = text.toLowerCase() == 'save' ? 'Saved' : 'Save';
        $(this).children('span').html(appendText);


        let isCloseShowed = localStorage.getItem("closeModalShowed");
        console.log("isCloseShowed==>",isCloseShowed);

        if(!isCloseShowed){
            saveModal.show();
            localStorage.setItem("closeModalShowed", true);
        }
    });

    $('#closeSaveModal').on("click",()=>{
        saveModal.hide();
    });

});

//document ends

const showWhatsApp = (id) => {
    //whatsApp
    $(id).removeClass('d-none');
    setTimeout(() => {
        $(id).addClass('transation');

    }, 200)
    localStorage.setItem("WAPShowed", true);
    setTime();
    myIntervel = setInterval(setTime, 60000);

    setTimeout(() => {
        $('#typing').addClass('d-none');
        $('#wap_message').removeClass('d-none');
    }, 3000)
}

const setTime = () => {
    console.log("time called ==>")
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes();

    $("#wap-time").html(time);
}

//detail map code
let map;
let service;
let infowindow;
let sydney;

function initMap() {

    var locations = $('#map').data("location").split(",");

    sydney = new google.maps.LatLng(parseFloat(locations[0]), parseFloat(locations[1]));

    infowindow = new google.maps.InfoWindow();
    map = new google.maps.Map(document.getElementById("map"), {
        center: sydney,
        zoom: 15,
    });

    new google.maps.Marker({
        position: sydney,
        map: map,
    });

    var request = {
        location: sydney,
        radius: '500',
        type: ['bus_station']
    };

    service = new google.maps.places.PlacesService(map);
    // service.nearbySearch(request, callback);
}

function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
            // console.log(results[i]);
            createMarker(results[i]);
        }
    }
}

// $('.mapview-swiper .swiper-slide').on("click", function () {
//
//     const place = $(this).data("place");
//     changeMarkerPlaces(place);
//
//     $('.mapview-swiper .swiper-slide').each(
//         function () {
//             $(this).removeClass("active");
//         }
//     );
//     $(this).addClass('active');
// });

function changeMarkerPlaces(place) {
    clearOverlays();

    var request = {
        location: sydney,
        radius: '500',
        type: [place]
    };


    service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, callback);
}

let markers = [];

function createMarker(place) {
    if (!place.geometry || !place.geometry.location) return;

    console.log(place);

    const getIcon = () => {
        if (place.types[0] == "bus_station") {
            return "assets/img/details/mapview/locationiconspin/Bus-stops-02.png";
        } else if (place.types[0] == "bank") {
            return "assets/img/details/mapview/locationiconspin/Bank.png";
        } else if (place.types[0] == "movie_theater") {
            return "assets/img/details/mapview/locationiconspin/Cinemas-02.png";
        } else if (place.types.includes("restaurant")) {
            return "assets/img/details/mapview/locationiconspin/Restaurant-02.png";
        } else if (place.types[0] == "supermarket") {
            return "assets/img/details/mapview/locationiconspin/Shopping-02.png";
        } else if (place.types[0] == "hospital") {
            return "assets/img/details/mapview/locationiconspin/Hospital-02.png";
        } else if (place.types[0] == "shopping_mall") {
            return "assets/img/details/mapview/locationiconspin/Shopping-02.png";
        } else if (place.types[0] == "park") {
            return "assets/img/details/mapview/locationiconspin/Parks-02.png";
        } else if (place.types[0] == "gas_station") {
            return "assets/img/details/mapview/locationiconspin/Fuel-station-02.png";
        } else if (place.types[0] == "police") {
            return "assets/img/details/mapview/locationiconspin/Police-station-03.png";
        } else return ''
    }

    console.log("get==>", getIcon());

    const marker = new google.maps.Marker({
        map,
        position: place.geometry.location,
        icon: getIcon(),

    });

    marker.addListener('mouseover', function () {
        try {
            infowindow.setContent(place.name || "");
            infowindow.open({
                anchor: marker,
                map,
                shouldFocus: false,
            });

        } catch (e) {
            console.log("create Info error ==>")
        }
    });


    google.maps.event.addListener(marker, "click", () => {
        try {
            infowindow.setContent(place.name || "");
            infowindow.open({
                anchor: marker,
                map,
                shouldFocus: false,
            });

        } catch (e) {
            console.log("create Info error ==>")
        }
    });

    markers.push(marker);
}

function clearOverlays() {
    if (markers) {
        for (i in markers) {
            markers[i].setMap(null);
        }
    }
}

window.initMap = initMap;
