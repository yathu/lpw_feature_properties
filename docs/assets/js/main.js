$(document).ready(function(){var e=new bootstrap.Modal(document.getElementById("phoneNoModal")),t=new bootstrap.Modal(document.getElementById("callbackModal")),a=($("#btnShowPhone").on("click",function(){t.hide(),setTimeout(()=>e.show(),100)}),document.querySelector("#phoneNo"));window.intlTelInput(a,{initialCountry:"lk",allowDropdown:!0}),$(window).scroll(function(e){var t=$(window).scrollTop(),a=$(window).width();60<t&&a<768?$(".map-enabled>.filter-form-container").addClass("top-0"):$(".map-enabled>.filter-form-container").removeClass("top-0")}),$("#totalTab").on("click",function(){$("#totalTabContent").show(),$("#sqftTabContent").hide()}),$("#sqftTab").on("click",function(){$("#totalTabContent").hide(),$("#sqftTabContent").show()}),$(".filter-form-container .controls>div.col").on("click",function(e){});let n=0;window.addEventListener("scroll",()=>{var e=window.pageYOffset;0<e-n&&480<e?$(".filter-form-container").removeClass("sticky-top"):$(".filter-form-container").addClass("sticky-top"),n=e}),$("#testpicker").selectpicker(),$("#possesionYear").selectpicker(),$("#bedroom_mobile").selectpicker(),$("#possession_mobile").selectpicker();new bootstrap.Modal(document.getElementById("mobModal"));new Swiper("#sortSwiper",{loop:!1,slidesPerView:"auto",spaceBetween:0,navigation:{nextEl:".sort-swiper-next",prevEl:".sort-swiper-prev"}}),new Swiper("#priceRangeSwiper",{slidesPerView:"auto",spaceBetween:15,navigation:{nextEl:".price-range-swiper-button-next",prevEl:".price-range-swiper-button-prev"}}),new Swiper("#locationRangeSwiper",{slidesPerView:"auto",spaceBetween:15,navigation:{nextEl:".price-range-swiper-button-next-1",prevEl:".price-range-swiper-button-prev-1"}}),new Swiper("#otherRangeSwiper",{slidesPerView:"auto",spaceBetween:15,navigation:{nextEl:".price-range-swiper-button-next-2",prevEl:".price-range-swiper-button-prev-2"}}),new Swiper(".property-type-swiper",{slidesPerView:"auto",spaceBetween:15,centeredSlides:!1,navigation:{nextEl:".property-type-swiper-button-next",prevEl:".property-type-swiper-button-prev"}}),new Swiper(".city-project-swiper",{slidesPerView:"auto",spaceBetween:15,navigation:{nextEl:".city-swiper-button-next",prevEl:".city-swiper-button-prev"},centeredSlides:!1,breakpoints:{320:{slidesPerView:"auto"},576:{slidesPerView:"auto"},768:{slidesPerView:"auto"}}}),new Swiper(".tour-swiper",{slidesPerView:1,spaceBetween:15,pagination:{el:".tour-swiper-pagination",clickable:!0},autoplay:{delay:1e4}}),new Swiper(".tool-swiper",{slidesPerView:"auto",spaceBetween:15,navigation:{nextEl:".tool-swiper-button-next",prevEl:".tool-swiper-button-prev"},breakpoints:{320:{slidesPerView:"auto"},576:{slidesPerView:"auto"},768:{slidesPerView:"auto"}}});var a=$("#totalMinPrice").val(),i=$("#totalMaxPrice").val(),a=($("#budgetStart").html(a),$("#budgetEnd").html(i),$("#totalMinPrice").on("change",function(){$("#budgetStart").html(this.value)}),$("#totalMaxPrice").on("change",function(){$("#budgetEnd").html(this.value)}),$("#sqftMinPrice").on("change",function(){$("#budgetStart").html(this.value)}),$("#sqftMaxPrice").on("change",function(){$("#budgetEnd").html(this.value)}),$('input[name="budgetType"]').on("change",function(){$("#totalMinPrice").val("0"),$("#totalMaxPrice").val("any"),$("#sqftMinPrice").val("0"),$("#sqftMaxPrice").val("any"),$("#budgetStart").html("0"),$("#budgetEnd").html("Any")}),$('input[name="budgetTypeMobile"]').on("change",function(){var e=$(this).val();$("#totalMinPriceMobile").val("0"),$("#totalMaxPriceMobile").val("any"),$("#sqftMinPriceMobile").val("0"),$("#sqftMaxPriceMobile").val("any"),"sqft"==e?($("#totalSqftMobile").show(),$("#totalBudgetMobile").hide()):($("#totalSqftMobile").hide(),$("#totalBudgetMobile").show())}),$("#areaSqftRange").slider({range:!0,min:0,max:5e3,values:[0,5e3],slide:function(e,t){l(t.values[0]),o(t.values[1])}}),$("#areaSqftRange").slider("values")[0]),i=$("#areaSqftRange").slider("values")[1],i=0==i?0:5e3==i?"any":i;function l(e){e=0==e?0:5e3==e?"any":e;$("#areaSqftRange span.ui-slider-handle:first span").html(e)}function o(e){e=0==e?0:5e3==e?"any":e;$("#areaSqftRange span.ui-slider-handle:last span").html(e)}$("#areaSqftRange span.ui-slider-handle:first").append("<span>"+a+"</span>"),$("#areaSqftRange span.ui-slider-handle:last").append("<span>"+i+"</span>");for(let e=0;e<=20;e++){var r=e%2!=0;$("#areaSqftLabels").append("<span class='slider-label' style='left: calc("+5*e+"% - 13px)'><i>|</i>"+(r?"":20==e?"Any":250*e)+"</span>")}$("#areaSqftRangeMobile").slider({range:!0,min:0,max:5e3,values:[0,5e3],slide:function(e,t){s(t.values[0]),p(t.values[1])}});a=$("#areaSqftRangeMobile").slider("values")[0],i=$("#areaSqftRangeMobile").slider("values")[1],i=0==i?0:5e3==i?"any":i;function s(e){e=0==e?0:5e3==e?"any":e;$("#areaSqftRangeMobile span.ui-slider-handle:first span").html(e)}function p(e){e=0==e?0:5e3==e?"any":e;$("#areaSqftRangeMobile span.ui-slider-handle:last span").html(e)}$("#areaSqftRangeMobile span.ui-slider-handle:first").append("<span>"+a+"</span>"),$("#areaSqftRangeMobile span.ui-slider-handle:last").append("<span>"+i+"</span>");for(let e=0;e<=10;e++){r=e%2!=0;$("#areaSqftLabelsMobile").append("<span class='slider-label' style='left: calc("+10*e+"% - 13px)'><i>|</i>"+(r?"":10==e?"Any":500*e)+"</span>")}$(".property-love").on("click",function(){$(this).toggleClass("active")}),$("#btnResetDesktop").on("click",function(){$(".selectpicker").selectpicker("deselectAll"),$(".selectpicker").selectpicker("val",""),$("#budgetStart").html("0"),$("#budgetEnd").html("any")}),$("#desktopModalBtnReset").on("click",function(){$("#areaSqftRange").slider("option",{values:[0,5e3]}),l(0),o(5e3)}),$("#btnResetMobile").on("click",function(){$(".selectpicker").selectpicker("deselectAll"),$(".selectpicker").selectpicker("val",""),$("#areaSqftRangeMobile").slider("option",{values:[0,5e3]}),s(0),p(5e3)})});