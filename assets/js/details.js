$(document).ready(() => {

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

    $('.banner-img-container #love').on("click", function () {
        $(this).toggleClass('active');
    });

    $('#contactNum').on("click", function () {
        $('#showEnquireNum').trigger('click');
    });

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
        slidesPerView: 4,
        spaceBetween: 10,
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 2.5,
            },
            576: {
                slidesPerView: 3.5,
            },
            768: {
                slidesPerView: 4.5,
            },
            992: {
                slidesPerView: 4.5,
            }
        }
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

    new Swiper('.other-project-swiper', {
        loop: false,
        navigation: {
            nextEl: '.other-project-next',
            prevEl: '.other-project-prev',
        },
        slidesPerView: 3,
        spaceBetween: 10,
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

    new Swiper('.mapview-swiper', {
        loop: false,
        slidesPerView: 4.5,
        navigation: {
            nextEl: '.mapView-next',
            prevEl: '.mapView-prev',
        },
        spaceBetween: 10,
        breakpoints: {
            // when window width is >= 320px
            320: {
                slidesPerView: 2.5,
            },
            375: {
                slidesPerView: 3.2,
            },
            450: {
                slidesPerView: 3.5,
            },
            485: {
                slidesPerView: 4.2,
            },
            576: {
                slidesPerView: 4.5,
            },
            768: {
                slidesPerView: 5.5,
            },
            992: {
                slidesPerView: 5.5,
            },
            1200: {
                slidesPerView: 6.5,
            },
            1440: {
                slidesPerView: 7.5,
            }
        }
    });

    new Swiper('.locality-swiper', {
        loop: true,
        slidesPerView: 'auto',
        navigation: {
            nextEl: '.locality-next',
            prevEl: '.locality-prev',
        },
        spaceBetween: 15,
    });

    new Swiper('.land-highlight-swiper', {
        loop: true,
        slidesPerView: 'auto',
        navigation: {
            nextEl: '.highlight-next',
            prevEl: '.highlight-prev',
        },
        spaceBetween: 15,
        // breakpoints: {
        //     // when window width is >= 320px
        //     320: {
        //         slidesPerView: 2.5,
        //     },
        //     375: {
        //         slidesPerView: 3.2,
        //     },
        //     450: {
        //         slidesPerView: 3.5,
        //     },
        //     485: {
        //         slidesPerView: 4.2,
        //     },
        //     576: {
        //         slidesPerView: 4.5,
        //     },
        //     768: {
        //         slidesPerView: 5.5,
        //     },
        //     992: {
        //         slidesPerView: 5.5,
        //     },
        //     1200: {
        //         slidesPerView: 6.5,
        //     },
        //     1440: {
        //         slidesPerView: 7.5,
        //     }
        // }
    });


    //property rate chart

    var ctx = document.getElementById('propertyRateChart').getContext('2d');

    var gradient = ctx.createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgba(251,183,87,0.50)');
    gradient.addColorStop(1, 'rgba(255,212,78,0.00)');

    var buyData = {
        labels: ["Jan 1", "Jan 3", "Jan 5", "Jan 7", "Jan 9", "Jan 11", "Jan 13", "Jan 15"],
        data: [950, 1220, 1340, 1450, 1320, 1220, 1390, 1560]
    };

    var rentData = {
        labels: ["Jan 1", "Jan 2", "Jan 4", "Jan 7", "Jan 10", "Jan 11", "Jan 13", "Jan 16"],
        data: [850, 1120, 750, 1050, 1320, 1220, 1390, 1560]
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
        }
    });


    $('input[name=chartType]').change(function () {
        var value = $('input[name=chartType]:checked').val();

        var data = buyData;

        if (value == 'rent') {
            data = rentData;
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
        }
    });

    var bannerModal = document.querySelector('#bannerModal');

    bannerModal.addEventListener('show.bs.modal', function (event) {
        console.log(event.relatedTarget);
        const element = event.relatedTarget;

        var index = $(element).data("index") || 0 ;

        console.log("index",index);

        bannerSwiper.slideTo(index);

    });


    var myModalEl = document.querySelector('#zoomModal')
    myModalEl.addEventListener('show.bs.modal', function (event) {
        const button = event.relatedTarget;
        let img_path = $(button).data("img");

        const checked = $(button).parent().find('.floor-view-switch').prop('checked');

        // console.log(checked);

        if (checked) {
            img_path = $(button).data("3d-img");
        }

        // console.log(img_path);

        let zoomImg = $(event.target).find('img');

        $(zoomImg).attr("src", img_path);
    });

    var input = document.querySelector("#detailContactPhoneNo");
    window.intlTelInput(input, {
        initialCountry: "lk",
        allowDropdown: true,
    });

    var requestCallPhone = document.querySelector("#requestCallPhone");
    window.intlTelInput(requestCallPhone, {
        initialCountry: "lk",
        allowDropdown: true,
    });

    var initPhoneNo = document.querySelector("#initPhoneNo");
    window.intlTelInput(initPhoneNo, {
        initialCountry: "lk",
        allowDropdown: true,
    });

    var contactFrmPhoneNo = document.querySelector("#contactNo");
    window.intlTelInput(contactFrmPhoneNo, {
        initialCountry: "lk",
        allowDropdown: true,
    });

    var inqContact = document.querySelector("#inqContact");
    window.intlTelInput(inqContact, {
        initialCountry: "lk",
        allowDropdown: true,
    });

    var DetailsPhoneNoModal = new bootstrap.Modal(document.getElementById('DetailsPhoneNoModal'),)
    var detailsInitPopup = new bootstrap.Modal(document.getElementById('detailsPopup'),);

    var WhatsAppModal = new bootstrap.Modal(document.getElementById('DetailsWhatsAppModal'),)


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

    $('#showEnquireNum').on("click", function () {
        $('.phone-info').removeClass('hide');
        $('#contactCard').removeClass('d-none');
        $(this).hide();
    });


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

        // console.log("scrollPos==>",scrollPos);

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

            var elementHeight = refElement.height();
            var elementPosition = refElement.position().top;

            // console.log(vh,vw);

            if (vw >= 576) {
                elementPosition -= (vh / 2);
            } else {
                elementPosition -= (vh / 2);
            }

            if (elementPosition <= scrollPos && elementPosition + elementHeight > scrollPos) {

                // var nextIndex = currLink.attr("aria-label").trim().charAt(0);
                var nextIndex = currLink.attr("aria-label").trim().split('/')[0];
                // var nextIndex = currLink.data('swiper-slide-index');
                // console.log("nextIndex==>",nextIndex);

                if (nextIndex != detailsMenuSwiper.activeIndex) {
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

    $("#propertyValue").on("change",function (){
       var val =  $(this).val().replace(/,/g,"");
        var propertyVal = $("#propertyValueSlider").slider("value");

        if(val >= 1000000 && val <= 100000000){
            $("#propertyValueSlider").slider('value',val);
            $("#propertyValue").val(formatter.format(val).replace("LKR", ""));
        }else {
            $("#propertyValue").val(formatter.format(propertyVal).replace("LKR", ""));
        }
        loanCalculator();
    });


    $("#downPaymentSlider").slider({
        range: false,
        min: 20,
        max: 100,
        step:5,
        slide: function (event, ui) {
            $("#downPayPer").text(ui.value);

            const propertyValue = $('#propertyValueSlider').slider('values', 0);
            var downPay = (propertyValue / 100) * ui.value;
            // $("#downPayment").val(downPay);
            $("#downPayment").val(formatter.format(downPay).replace("LKR", ""));


            loanCalculator();
        }
    });

    $("#downPayment").on("change",function (){
        var val =  $(this).val().replace(/,/g,"");
        var propertyValue = $("#propertyValue").val().replace(/,/g,"");

        var newDownPercentage = (val/propertyValue) * 100;

        var OlddownPercentage = $("#downPaymentSlider").slider("value");


        if(newDownPercentage >= 20 && newDownPercentage <= 100){
            $("#downPaymentSlider").slider('value',newDownPercentage);
            $("#downPayPer").text(newDownPercentage);
        }else {
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

    $("#interestRate").on("change",function (){
        var val =  $(this).val().replace('%', '');
        var rate = $("#interestRateSlider").slider("value");

        if(val >= 5 && val <= 30){
            $("#interestRateSlider").slider('value',val);
        }else {
            $("#interestRate").val(rate+ "%");
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

    $("#loanPeriod").on("change",function (){
        var val =  $(this).val().replace(" years",'');
        var rate = $("#loanPeriodSlider").slider("value");

        if(val >= 1 && val <= 30){
            $("#loanPeriodSlider").slider('value',val);
        }else {
            $("#loanPeriod").val(rate);
        }
        loanCalculator();
    });

    init();

    function init(){
        var propertyVal = $("#propertyValueSlider").slider("value");
        var downPaymentPersentage = $("#downPaymentSlider").slider("value");
        var interestRate = $("#interestRateSlider").slider("value");
        var loanPeriod = $("#loanPeriodSlider").slider("value");

        var downPayment = (propertyVal / 100) * downPaymentPersentage;

        $("#propertyValue").val(formatter.format(propertyVal).replace("LKR", ""));
        $("#downPayment").val(formatter.format(downPayment).replace("LKR", ""));
        $("#interestRate").val(interestRate + '%');
        $("#loanPeriod").val(loanPeriod+ " years");
    }



    //background-image: linear-gradient(180deg, #B7D464 0%, #009833 100%);

    var loanChartElement = document.getElementById('loanChart').getContext('2d');

    var principle_gradient = loanChartElement.createLinearGradient(0, 0, 0, 400);
    principle_gradient.addColorStop(0, '#B7D464');
    principle_gradient.addColorStop(1, '#009833');

    // gradient.addColorStop(0, 'rgba(251,183,87,0.50)');
    // gradient.addColorStop(1, 'rgba(255,212,78,0.00)');


    try {

    }catch (e) {
        console.log(e);
    }


    const data = {
        labels: [
            'Loan amount ',
            'Down Payment',
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [300, 200],
            backgroundColor: [
                principle_gradient,
                '#E8E8E8'
            ],
            hoverOffset: 4
        },
        ]
    };

    const config = {
        type: 'doughnut',
        data: data,
        options: {
            plugins:{
                htmlLegend: {
                    containerID: 'legendContainer',
                },
                legend: {
                    display: false,
                }
            }
        },
    };

    const loanChart = new Chart(
        loanChartElement,
        config
    );


    const  loanCalculator = ()=>{

        setTimeout(() => {
            const propertyValue = $('#propertyValueSlider').slider('values', 0);
            console.log("propertyValue calc==>",propertyValue);

            const interestRate = $('#interestRateSlider').slider('values', 0);
            const numberOfMonths = $('#loanPeriodSlider').slider('values', 0) * 12;
            const downPaymentPersantage = $('#downPaymentSlider').slider('values', 0);

            console.log("downPaymentPersantage calc==>",downPaymentPersantage);


            if(!propertyValue || !interestRate || !numberOfMonths || !downPaymentPersantage){
                return;
            }

            const interestRateCalculated = interestRate/100/12;

            // console.log("interestRateCalculated==>",interestRateCalculated);

            const loanAmount = (propertyValue/100)*(100 - downPaymentPersantage);

            // console.log("price==>",loanAmount);

            const part1 = (interestRateCalculated * ((1 + interestRateCalculated) ** numberOfMonths));
            const part2 = (((1 + interestRateCalculated) ** numberOfMonths) -1);

            // console.log("part1==>",part1);
            // console.log("part2==>",part2);

            const Finalpersentage = (part1/part2);


            const monthlyPayment = Math.ceil(loanAmount * Finalpersentage);

            const totalPayment = Math.ceil(monthlyPayment * numberOfMonths);

            // console.log("finalPrice==>",monthlyPayment);

            $('#monthlyPayment').text(formatter.format(monthlyPayment).replace("LKR", "Rs"));
            $('.boldText').text(formatter.format(monthlyPayment).replace("LKR", "Rs"));
            $('#LoanAmount').text(formatter.format(Math.ceil(loanAmount.toFixed(2))).replace("LKR", "Rs"));
            $('#interestRateValue').text(interestRate);
            $('#totalInterest').text(formatter.format(Math.ceil(totalPayment - loanAmount.toFixed(2))).replace("LKR", "Rs"));
            $('#totalPayment').text(formatter.format(totalPayment).replace("LKR", "Rs"));

            var downpayment = $('#downPayment').val().replace(/,/g,"");
            updateChart(downpayment,loanAmount);

        } , 500);

    }

    loanCalculator();

    function updateChart(monthlyPayment,totalPayment) {
        loanChart.data.datasets[0].data[0] = totalPayment;
        loanChart.data.datasets[0].data[1] = monthlyPayment;
        loanChart.update();
    }



    //pdf broucher

    // If absolute URL from the remote server is provided, configure the CORS
// header on that server.
//     var url = 'https://raw.githubusercontent.com/mozilla/pdf.js/ba2edeae/web/compressed.tracemonkey-pldi-09.pdf';
    var url = './assets/pdf/sample.pdf';

// Loaded via <script> tag, create shortcut to access PDF.js exports.
    var pdfjsLib = window['pdfjs-dist/build/pdf'];

// The workerSrc property shall be specified.
    pdfjsLib.GlobalWorkerOptions.workerSrc = '//mozilla.github.io/pdf.js/build/pdf.worker.js';

    var pdfDoc = null,
        pageNum = 1,
        pageRendering = false,
        pageNumPending = null,
        scale = 1,
        canvas = document.getElementById('the-canvas'),
        container = document.getElementById('broucher-pdf-container'),
        ctx = canvas.getContext('2d');

    /**
     * Get page info from document, resize canvas accordingly, and render page.
     * @param num Page number.
     */
    function renderPage(num) {
        pageRendering = true;
        // Using promise to fetch the page
        pdfDoc.getPage(num).then(function (page) {

            var viewport = page.getViewport({scale: scale});

            // var scale_ = container.clientWidth / viewport.width;

            // viewport = page.getViewport(scale_);

            // canvas.height = viewport.height;

            const containerWidth = document.getElementById("broucher-pdf-container").offsetWidth;

            canvas.height = 400;
            canvas.width = containerWidth - 32;
            // canvas.width = viewport.width;

            // Render PDF page into canvas context
            var renderContext = {
                canvasContext: ctx,
                viewport: viewport
            };
            var renderTask = page.render(renderContext);

            // Wait for rendering to finish
            renderTask.promise.then(function () {
                pageRendering = false;
                if (pageNumPending !== null) {
                    // New page rendering is pending
                    renderPage(pageNumPending);
                    pageNumPending = null;
                }
            });
        });

        // Update page counters
        // document.getElementById('page_num').textContent = num;
        var progressWidth = ((num / pdfDoc.numPages) * 100) + '%';
        $('#brochureProgressBar').width(progressWidth);

        $('#pageNumbers').html(`${num} / ${pdfDoc.numPages}`);
    }

    /**
     * If another page rendering in progress, waits until the rendering is
     * finised. Otherwise, executes rendering immediately.
     */
    function queueRenderPage(num) {
        if (pageRendering) {
            pageNumPending = num;
        } else {
            renderPage(num);
        }
    }

    /**
     * Displays previous page.
     */
    function onPrevPage() {
        if (pageNum <= 1) {
            return;
        }
        pageNum--;
        queueRenderPage(pageNum);
    }

    document.getElementById('brochurePrev').addEventListener('click', onPrevPage);

    /**
     * Displays next page.
     */
    function onNextPage() {
        if (pageNum >= pdfDoc.numPages) {
            return;
        }
        pageNum++;
        queueRenderPage(pageNum);
    }

    document.getElementById('brochureNext').addEventListener('click', onNextPage);

    /**
     * Asynchronously downloads PDF.
     */
    pdfjsLib.getDocument(url).promise.then(function (pdfDoc_) {
        pdfDoc = pdfDoc_;
        // document.getElementById('page_count').textContent = pdfDoc.numPages;

        // Initial/first page rendering
        renderPage(pageNum);
    });

    const showPhoneNoModal = () => {
        setTimeout(() => DetailsPhoneNoModal.show(), 0);
    }

    const showWhatsAppModal = () => {
        setTimeout(() => WhatsAppModal.show(), 0);
    }

    $('.bottomFloat .openPopUP').on("click", function () {
        showPhoneNoModal();
    });

    $('.bottomFloat .openPopWhatsApp').on("click", function () {
        showWhatsAppModal();
    });
});

//detail map code
let map;
let service;
let infowindow;
let sydney;

function initMap() {
    sydney = new google.maps.LatLng(-33.867, 151.195);

    infowindow = new google.maps.InfoWindow();
    map = new google.maps.Map(document.getElementById("map"), {
        center: sydney,
        zoom: 15,
    });

    var request = {
        location: sydney,
        radius: '500',
        type: ['bus_station']
    };

    service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, callback);
}

function callback(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
            // console.log(results[i]);
            createMarker(results[i]);
        }
    }
}

$('.mapview-swiper .swiper-slide').on("click", function () {

    const place = $(this).data("place");
    changeMarkerPlaces(place);

    $('.mapview-swiper .swiper-slide').each(
        function () {
            $(this).removeClass("active");
        }
    );
    $(this).addClass('active');
});

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
        }else if (place.types[0] == "gas_station") {
            return "assets/img/details/mapview/locationiconspin/Fuel-station-02.png";
        }else if (place.types[0] == "police") {
            return "assets/img/details/mapview/locationiconspin/Police-station-03.png";
        }
        else return ''
    }

    console.log("get==>", getIcon());

    const marker = new google.maps.Marker({
        map,
        position: place.geometry.location,
        icon: getIcon(),

    });

    markers.push(marker);

    google.maps.event.addListener(marker, "click", () => {
        infowindow.setContent(place.name || "");
        infowindow.open(map);
    });
}

function clearOverlays() {
    if (markers) {
        for (i in markers) {
            markers[i].setMap(null);
        }
    }
}

window.initMap = initMap;
