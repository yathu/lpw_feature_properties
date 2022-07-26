$(document).ready(() => {

    $('.dropdown-toggle').dropdown();

    $('.banner-img-container #love').on("click", function () {
        $(this).toggleClass('active');
    });

    $('#contactNum').on("click", function () {
        // console.log(1);

        var parent = $(this).parents('.btn-row');

        $(this).parents('.btn-row').find('.btn').each(function () {
            // console.log(2);
            // console.log($(this));


            var num = $(this).data("num");
            if (num) $(this).find('span').html(num);


            $(this).removeClass('d-none');
            $(this).addClass('d-flex');
        });
    });

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
        // breakpoints: {
        //     // when window width is >= 320px
        //     320: {
        //         slidesPerView: 1,
        //     },
        //     576: {
        //         slidesPerView: 1,
        //     },
        //     768: {
        //         slidesPerView: 2,
        //     },
        //     992: {
        //         slidesPerView: 3,
        //     }
        // }
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

    var swiper = new Swiper(".banner-swiper", {
        // slidesPerView: 3,
        loop: true,
        navigation: {
            nextEl: ".banner-next",
            prevEl: ".banner-prev",
        },
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

    var initPhoneNo = document.querySelector("#initPhoneNo");
    window.intlTelInput(initPhoneNo, {
        initialCountry: "lk",
        allowDropdown: true,
    });

    var DetailsPhoneNoModal = new bootstrap.Modal(document.getElementById('DetailsPhoneNoModal'),)
    var detailsInitPopup = new bootstrap.Modal(document.getElementById('detailsPopup'),);

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
            }else {
                elementPosition -= (vh/2);
            }

            if (elementPosition <= scrollPos && elementPosition + elementHeight > scrollPos) {

                // var nextIndex = currLink.attr("aria-label").trim().charAt(0);
                var nextIndex = currLink.attr("aria-label").trim().split('/')[0];
                // var nextIndex = currLink.data('swiper-slide-index');
                // console.log("nextIndex==>",nextIndex);

                if (nextIndex != detailsMenuSwiper.activeIndex) {
                    // console.log(nextIndex);

                    console.log("nextIndex==>",nextIndex);
                    console.log(currLink);


                    detailsMenuSwiper.slideTo(nextIndex -1);

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
            console.log("scrollPos++>");
            $('.detailsMenuSwiper a:first-child').addClass('active');
        }

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


    //detail map code

    var map;
    var infowindow;

    function initMap() {
        var pyrmont = new google.maps.LatLng(6.927079, 79.861244), // sample location to start with: Mumbai, India

            map = new google.maps.Map(document.getElementById('map'), {
                center: pyrmont,
                zoom: 15
            });

        var request = {
            location: pyrmont,
            radius: 4000,
            types: ['bakery'] // this is where you set the map to get the hospitals and health related places
        };
        infowindow = new google.maps.InfoWindow();
        var service = new google.maps.places.PlacesService(map);
        service.nearbySearch(request, callback);
    }

    function callback(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
                createMarker(results[i]);
            }
        }
    }

    function createMarker(place) {
        var placeLoc = place.geometry.location;
        var marker = new google.maps.Marker({
            map: map,
            position: place.geometry.location
        });

        google.maps.event.addListener(marker, 'click', function () {
            // infowindow.setContent(place.name);
            infowindow.setContent('test');
            infowindow.open(map, this);
        });
    }


    initMap();

    const showPhoneNoModal = () => {
        setTimeout(() => DetailsPhoneNoModal.show(), 0);
    }

    $('.bottomFloat .openPopUP').on("click", function () {
        showPhoneNoModal();
    });
});
