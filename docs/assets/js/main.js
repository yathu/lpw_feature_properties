$(document).ready(function(){var e=new bootstrap.Modal(document.getElementById("phoneNoModal")),t=(new bootstrap.Modal(document.getElementById("callbackModal")),$("#btnShowPhone").on("click",function(){$("#callbackBtnClose").trigger("click"),setTimeout(()=>e.show(),0)}),$("#callbackModal").on("shown.bs.modal",function(e){e=$(e.relatedTarget).data("prperty");console.log("property==>",e)}),document.querySelector("#phoneNo"));window.intlTelInput(t,{initialCountry:"lk",allowDropdown:!0}),$(window).scroll(function(e){var t=$(window).scrollTop(),a=$(window).width();60<t&&a<768?$(".map-enabled>.filter-form-container").addClass("top-0"):$(".map-enabled>.filter-form-container").removeClass("top-0")}),$("#totalTab").on("click",function(){$("#totalTabContent").show(),$("#sqftTabContent").hide()}),$("#sqftTab").on("click",function(){$("#totalTabContent").hide(),$("#sqftTabContent").show()}),$(".filter-form-container .controls>div.col").on("click",function(e){});let a=0;window.addEventListener("scroll",()=>{var e=window.pageYOffset;0<e-a&&480<e?$(".filter-form-tag").removeClass("sticky-top"):$(".filter-form-tag").addClass("sticky-top"),a=e}),$("#testpicker").selectpicker(),$("#possesionYear").selectpicker(),$("#bedroom_mobile").selectpicker(),$("#possession_mobile").selectpicker(),$("#possessionPlus").selectpicker(),$("input[type=radio][name=possessionInputMobile]").change(function(){console.log(this.value),$("#possessionPlus").selectpicker("deselectAll"),$("#possessionPlus").selectpicker("val",""),$(".possessionPlus").find("button.dropdown-toggle").removeClass("btn-custom-primary"),$(".possessionPlus").find("button.dropdown-toggle").addClass("btn-light")}),$("#possessionPlus").change(function(){$('input[name="possessionInputMobile"]').prop("checked",!1),$(".possessionPlus").find("button.dropdown-toggle").addClass("btn-custom-primary"),$(".possessionPlus").find("button.dropdown-toggle").removeClass("btn-light")});new bootstrap.Modal(document.getElementById("mobModal"));new Swiper("#sortSwiper",{loop:!1,slidesPerView:"auto",spaceBetween:0,navigation:{nextEl:".sort-swiper-next",prevEl:".sort-swiper-prev"}}),new Swiper("#priceRangeSwiper",{slidesPerView:"auto",spaceBetween:15,navigation:{nextEl:".price-range-swiper-button-next",prevEl:".price-range-swiper-button-prev"}}),new Swiper("#locationRangeSwiper",{slidesPerView:"auto",spaceBetween:15,navigation:{nextEl:".price-range-swiper-button-next-1",prevEl:".price-range-swiper-button-prev-1"}}),new Swiper("#otherRangeSwiper",{slidesPerView:"auto",spaceBetween:15,navigation:{nextEl:".price-range-swiper-button-next-2",prevEl:".price-range-swiper-button-prev-2"}}),new Swiper(".property-type-swiper",{slidesPerView:"auto",spaceBetween:15,centeredSlides:!1,navigation:{nextEl:".property-type-swiper-button-next",prevEl:".property-type-swiper-button-prev"}}),new Swiper(".city-project-swiper",{slidesPerView:"auto",spaceBetween:15,navigation:{nextEl:".city-swiper-button-next",prevEl:".city-swiper-button-prev"},centeredSlides:!1,breakpoints:{320:{slidesPerView:"auto"},576:{slidesPerView:"auto"},768:{slidesPerView:"auto"}}}),new Swiper(".tour-swiper",{slidesPerView:1,spaceBetween:15,pagination:{el:".tour-swiper-pagination",clickable:!0},autoplay:{delay:1e4}}),new Swiper(".tool-swiper",{slidesPerView:"auto",spaceBetween:15,navigation:{nextEl:".tool-swiper-button-next",prevEl:".tool-swiper-button-prev"},breakpoints:{320:{slidesPerView:"auto"},576:{slidesPerView:"auto"},768:{slidesPerView:"auto"}}});var t=$("#totalMinPrice").val(),n=$("#totalMaxPrice").val();function i(e){const t=parseInt(e);console.log("minValue==>",t),$("#totalMaxPriceMobile > option").each(function(){"any"!=this.value&&(parseInt(this.value)<t?$(this).attr("disabled",!0):$(this).attr("disabled",!1))})}function s(e){const t=parseInt(e);console.log("maxValue==>",t),$("#totalMinPriceMobile > option").each(function(){"any"!=this.value&&(parseInt(this.value)>t?$(this).attr("disabled",!0):$(this).attr("disabled",!1))})}function o(e){const t=parseInt(e);console.log("minSqftValuemob==>",t),$("#sqftMaxPriceMobile > option").each(function(){"any"!=this.value&&(parseInt(this.value)<t?$(this).attr("disabled",!0):$(this).attr("disabled",!1))})}function l(e){const t=parseInt(e);console.log("sqftmaxValue==>",t),$("#sqftMinPriceMobile > option").each(function(){"any"!=this.value&&(parseInt(this.value)>t?$(this).attr("disabled",!0):$(this).attr("disabled",!1))})}$("#budgetStart").html(t),$("#budgetEnd").html(n),$("#totalMinPrice").on("change",function(){$("#budgetStart").html(this.value);{var e=this.value;const t=parseInt(e);return console.log("minValue==>",t),void $("#totalMaxPrice > option").each(function(){"any"!=this.value&&(parseInt(this.value)<t?$(this).attr("disabled",!0):$(this).attr("disabled",!1))})}}),$("#totalMaxPrice").on("change",function(){$("#budgetEnd").html(this.value);{var e=this.value;const t=parseInt(e);return console.log("maxValue==>",t),void $("#totalMinPrice > option").each(function(){"any"!=this.value&&(parseInt(this.value)>t?$(this).attr("disabled",!0):$(this).attr("disabled",!1))})}}),$("#sqftMinPrice").on("change",function(){$("#budgetStart").html(this.value);{var e=this.value;const t=parseInt(e);return console.log("minSqftValue==>",t),void $("#sqftMaxPrice > option").each(function(){"any"!=this.value&&(parseInt(this.value)<t?$(this).attr("disabled",!0):$(this).attr("disabled",!1))})}}),$("#sqftMaxPrice").on("change",function(){$("#budgetEnd").html(this.value);{var e=this.value;const t=parseInt(e);return console.log("sqftmaxValue==>",t),void $("#sqftMinPrice > option").each(function(){"any"!=this.value&&(parseInt(this.value)>t?$(this).attr("disabled",!0):$(this).attr("disabled",!1))})}}),$('input[name="budgetType"]').on("change",function(){var e,t;t="sqft"===$(this).val()?(e=$("#sqftMinPrice").val(),$("#sqftMaxPrice").val()):(e=$("#totalMinPrice").val(),$("#totalMaxPrice").val()),$("#budgetStart").html(e),$("#budgetEnd").html(t)}),$("#totalMinPriceMobile").on("change",function(){i(this.value)}),$("#totalMaxPriceMobile").on("change",function(){s(this.value)}),$("#sqftMinPriceMobile").on("change",function(){o(this.value)}),$("#sqftMaxPriceMobile").on("change",function(){l(this.value)}),$('input[name="budgetTypeMobile"]').on("change",function(){var e=$(this).val();$("#totalMinPriceMobile").val("0"),$("#totalMaxPriceMobile").val("any"),$("#sqftMinPriceMobile").val("0"),$("#sqftMaxPriceMobile").val("any"),"sqft"==e?($("#totalSqftMobile").show(),$("#totalBudgetMobile").hide()):($("#totalSqftMobile").hide(),$("#totalBudgetMobile").show()),i(0),s(100),o(0),l(1e5)}),$("#areaSqftRange").slider({range:!0,min:0,max:6e3,step:250,values:[0,6e3],slide:function(e,t){c(t.values[0]),p(t.values[1]),$("#areaSqftRangeValues").val(t.values[0]+","+t.values[1])}});var t=$("#areaSqftRange").slider("values")[0],n=$("#areaSqftRange").slider("values")[1],r=0==n?0:6e3==n?"any":n;function c(e){e=0==e?0:6e3==e?"any":e;$("#areaSqftRange span.ui-slider-handle:first span").html(e)}function p(e){e=0==e?0:6e3==e?"any":e;$("#areaSqftRange span.ui-slider-handle:last span").html(e)}$("#areaSqftRangeValues").val(t+","+n),$("#areaSqftRange span.ui-slider-handle:first").append("<span>"+t+"</span>"),$("#areaSqftRange span.ui-slider-handle:last").append("<span>"+r+"</span>");for(let e=0;e<=23;e++){var u=e%2!=0;$("#areaSqftLabels").append("<span class='slider-label' style='left: calc("+4.16*e+"% - 13px)'><i>|</i>"+(u?"":23==e?"Any":250*e)+"</span>")}$("#areaSqftRangeMobile").slider({range:!0,min:0,max:6e3,values:[0,6e3],slide:function(e,t){d(t.values[0]),f(t.values[1]),$("#areaSqftRangeValuesMobile").val(t.values[0]+","+t.values[1])}});n=$("#areaSqftRangeMobile").slider("values")[0],t=$("#areaSqftRangeMobile").slider("values")[1],r=0==t?0:6e3==t?"any":t;function d(e){e=0==e?0:6e3==e?"any":e;$("#areaSqftRangeMobile span.ui-slider-handle:first span").html(e)}function f(e){e=0==e?0:6e3==e?"any":e;$("#areaSqftRangeMobile span.ui-slider-handle:last span").html(e)}$("#areaSqftRangeMobile span.ui-slider-handle:first").append("<span>"+n+"</span>"),$("#areaSqftRangeMobile span.ui-slider-handle:last").append("<span>"+r+"</span>"),$("#areaSqftRangeValuesMobile").val(n+","+t);for(let e=0;e<=10;e++){u=e%2!=0;$("#areaSqftLabelsMobile").append("<span class='slider-label' style='left: calc("+10*e+"% - 13px)'><i>|</i>"+(u?"":10==e?"Any":500*e)+"</span>")}function h(e,t,a){$("#commonAlertModal").modal("show"),"success"===e?($("#commonAlertModal .success").removeClass("d-none"),$("#commonAlertModal .error").addClass("d-none")):($("#commonAlertModal .success").addClass("d-none"),$("#commonAlertModal .error").removeClass("d-none")),$("#commonAlertModal p").html(t),a&&$("#"+a).modal("hide")}$(".property-love").on("click",function(){$(this).toggleClass("active")}),$("#btnResetDesktop").on("click",function(){$(".selectpicker").selectpicker("deselectAll"),$(".selectpicker").selectpicker("val",""),$("#budgetStart").html("0"),$("#budgetEnd").html("any")}),$("#desktopModalBtnReset").on("click",function(){$("#areaSqftRange").slider("option",{values:[0,6e3]}),c(0),p(6e3),setTimeout(()=>{$("#areaSqftRangeValues").val("0,6000")},500)}),$("#btnResetMobile").on("click",function(){$(".selectpicker").selectpicker("deselectAll"),$(".selectpicker").selectpicker("val",""),$("#areaSqftRangeMobile").slider("option",{values:[0,6e3]}),d(0),f(6e3),setTimeout(()=>{$("#areaSqftRangeValuesMobile").val("0,6000")},500)}),$("#translation_mobile").change(function(){var e=$(this).val();console.log(e),window.location.href=e}),$("#callSuc").on("click",function(){h("success","successfully sent data :)","")}),$("#callerror").on("click",function(){h("error","Error sent data :)","")})});