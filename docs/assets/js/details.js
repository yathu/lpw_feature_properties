$(document).ready(()=>{$(".menuContainer .swiper-slide").on("click",function(e){e.preventDefault();e=$(this).attr("href"),e=$(e);$("html,body").animate({scrollTop:e.offset().top-80})}),$(".copyUrl").on("click",function(){navigator.clipboard.writeText(window.location.href)}),document.querySelector(".nativeShare").addEventListener("click",e=>{var n;navigator.share?(n=$("#propertyTitle").text(),navigator.share({title:n,url:window.location.href}).then(()=>{console.log("Thanks for sharing!")}).catch(e=>{console.log("Error while using Web share API:"),console.log(e)})):console.log("browser not supported...")});var l=new Intl.NumberFormat("en-US",{style:"currency",currency:"LKR",currencyDisplay:"symbol",minimumFractionDigits:0}),i=($(".dropdown-toggle").dropdown(),$(".banner-img-container #love").on("click",function(){$(this).toggleClass("active")}),$("#contactNum").on("click",function(){$("#showEnquireNum").trigger("click")}),jQuery.validator.setDefaults({onfocusout:function(e){this.element(e)},onkeyup:!1,highlight:function(e){},unhighlight:function(e){},errorElement:"div",errorClass:"invalid-feedback",errorPlacement:function(e,n){n.parent(".input-group-prepend").length?$(n).siblings(".invalid-feedback").append(e):e.insertAfter(n)}}),$("#loanForm"));i.validate({rules:{purpose:{required:!0},fullname:{required:!0},living_place:{required:!0},loanPhone:{required:!0,number:!0},loanEmail:{required:!0}}}),i.children("div").steps({headerTag:"h3",bodyTag:"section",titleTemplate:'<span class="number">#index#</span>',transitionEffect:"slideLeft",onStepChanging:function(e,n,t){return i.validate().settings.ignore=":disabled,:hidden",i.valid()},onFinishing:function(e,n){return i.validate().settings.ignore=":disabled",i.valid()},onFinished:function(e,n){$("#loanPopup .modal-content").addClass("success-content")}});const e=document.getElementById("loanPopup");e.addEventListener("hidden.bs.modal",e=>{$("#loanPopup .modal-content").removeClass("success-content")}),$(".floorViewOption").change(function(){var e=$(this).attr("name"),e=$("input[name="+e+"]:checked").val();console.log(e),"3d"==e?($(this).closest(".image-container").find(".img-2d").addClass("d-none"),$(this).closest(".image-container").find(".img-3d").removeClass("d-none")):($(this).closest(".image-container").find(".img-2d").removeClass("d-none"),$(this).closest(".image-container").find(".img-3d").addClass("d-none"))});var r=new Swiper(".detailsMenuSwiper",{slidesPerView:"auto",spaceBetween:20}),n=($(".showAbout").on("click",()=>{$(".about-container>div").toggleClass("hide-text")}),$(".showFeatures").on("click",()=>{$(".features-container").toggleClass("show-less")}),$("#videos-nav-tab button").on("click",function(e,n){var t=$(this)[0];$("#videos-nav-tab button").each((e,n)=>{n!==t&&$(n).removeClass("active")})}),new Swiper(".payment-plan-swiper",{loop:!1,navigation:{nextEl:".payment-next",prevEl:".payment-prev"},slidesPerView:4,spaceBetween:10,breakpoints:{320:{slidesPerView:3.5},576:{slidesPerView:4.5},768:{slidesPerView:5},992:{slidesPerView:5}}}),new Swiper(".land-payment-plan-swiper",{loop:!0,navigation:{nextEl:".land-payment1-next",prevEl:".land-payment1-prev"},slidesPerView:4,spaceBetween:10,breakpoints:{320:{slidesPerView:3.5},576:{slidesPerView:4.5},768:{slidesPerView:5},992:{slidesPerView:5}}}),new Swiper(".land-payment-plan-swiper2",{loop:!0,navigation:{nextEl:".land-payment2-next",prevEl:".land-payment2-prev"},slidesPerView:4,spaceBetween:10,breakpoints:{320:{slidesPerView:3.5},576:{slidesPerView:4.5},768:{slidesPerView:5},992:{slidesPerView:5}}}),new Swiper(".land-payment-plan-swiper3",{loop:!0,navigation:{nextEl:".land-payment3-next",prevEl:".land-payment3-prev"},slidesPerView:4,spaceBetween:10,breakpoints:{320:{slidesPerView:3.5},576:{slidesPerView:4.5},768:{slidesPerView:5},992:{slidesPerView:5}}}),new Swiper(".videos-menu-swiper",{loop:!1,navigation:{nextEl:".video-prev",prevEl:".video-next"},slidesPerView:4,spaceBetween:10,breakpoints:{320:{slidesPerView:3.5},576:{slidesPerView:4.5},768:{slidesPerView:5},992:{slidesPerView:5}}}),new Swiper(".loan-swiper",{loop:!1,navigation:{nextEl:".loan-next",prevEl:".loan-prev"},slidesPerView:4,spaceBetween:10,breakpoints:{320:{slidesPerView:2.5},576:{slidesPerView:3.5},768:{slidesPerView:4.5},992:{slidesPerView:4.5}}}),new Swiper(".videos-menu-swiper",{loop:!1,slidesPerView:"auto",spaceBetween:10,navigation:{nextEl:".video-next",prevEl:".video-prev"}}),new Swiper(".other-project-swiper",{loop:!1,navigation:{nextEl:".other-project-next",prevEl:".other-project-prev"},slidesPerView:3,spaceBetween:10,breakpoints:{320:{slidesPerView:1.5},576:{slidesPerView:2.5},768:{slidesPerView:2.5},992:{slidesPerView:2.5},1200:{slidesPerView:3.5}}}),new Swiper(".mapview-swiper",{loop:!1,slidesPerView:4.5,navigation:{nextEl:".mapView-next",prevEl:".mapView-prev"},spaceBetween:10,breakpoints:{320:{slidesPerView:2.5},375:{slidesPerView:3.2},450:{slidesPerView:3.5},485:{slidesPerView:4.2},576:{slidesPerView:4.5},768:{slidesPerView:5.5},992:{slidesPerView:5.5},1200:{slidesPerView:6.5},1440:{slidesPerView:7.5}}}),new Swiper(".locality-swiper",{loop:!0,slidesPerView:"auto",navigation:{nextEl:".locality-next",prevEl:".locality-prev"},spaceBetween:15}),new Swiper(".land-highlight-swiper",{loop:!0,slidesPerView:"auto",navigation:{nextEl:".highlight-next",prevEl:".highlight-prev"},spaceBetween:15}),new Swiper(".banner-swiper",{loop:!1,navigation:{nextEl:".banner-next",prevEl:".banner-prev"},slidesPerView:1,spaceBetween:0,breakpoints:{320:{slidesPerView:1},768:{slidesPerView:1}}}));document.querySelector("#bannerModal").addEventListener("show.bs.modal",function(e){console.log(e.relatedTarget);e=e.relatedTarget,e=$(e).data("index")||0;console.log("index",e),n.slideTo(e)});document.querySelector("#zoomModal").addEventListener("show.bs.modal",function(e){var n=e.relatedTarget;let i="";$(n).closest(".image-container").find(".floor-img").each((e,n)=>{var t=$(n).hasClass("d-none");t||(i=$(n).attr("src")),console.log("isHide==>",t)});n=$(e.target).find("img");$(n).attr("src",i)});var t=document.querySelector("#detailContactPhoneNo"),t=(window.intlTelInput(t,{initialCountry:"lk",allowDropdown:!0}),document.querySelector("#requestCallPhone")),t=(window.intlTelInput(t,{initialCountry:"lk",allowDropdown:!0}),document.querySelector("#initPhoneNo")),t=(window.intlTelInput(t,{initialCountry:"lk",allowDropdown:!0}),document.querySelector("#contactNo")),t=(window.intlTelInput(t,{initialCountry:"lk",allowDropdown:!0}),document.querySelector("#inqContact")),t=(window.intlTelInput(t,{initialCountry:"lk",allowDropdown:!0}),document.querySelector("#bannercontactNo")),a=(window.intlTelInput(t,{initialCountry:"lk",allowDropdown:!0}),new bootstrap.Modal(document.getElementById("DetailsPhoneNoModal"))),o=new bootstrap.Modal(document.getElementById("detailsPopup")),s=new bootstrap.Modal(document.getElementById("DetailsWhatsAppModal")),d=($("#btnShowPhone").on("click",function(){$("#detailsCallbackBtnClose").trigger("click"),setTimeout(()=>a.show(),0)}),$("#showSpecification").on("click",function(){$("#specContent").toggleClass("show-less")}),$("#showTeam").on("click",function(){$("#teamShowMoreContent").toggleClass("show-less")}),$("#showEnquireNum").on("click",function(){$(".phone-info").removeClass("hide"),$("#contactCard").removeClass("d-none"),$(this).hide(),$(".show-box").addClass("hide-show-box")}),0);function c(e){var o=$(document).scrollTop();const l=Math.max(document.documentElement.clientHeight||0,window.innerHeight||0),s=Math.max(document.documentElement.clientWidth||0,window.innerWidth||0);console.log("scrollPos==>",o),$(window).scrollTop()+$(window).height()==$(document).height()&&($(".detailsMenuSwiper a:not(.swiper-slide-duplicate)").length,$(".detailsMenuSwiper a").each(function(e,n){$(n).removeClass("active")}),$(".detailsMenuSwiper a:last-child").addClass("active")),$(".detailsMenuSwiper a").each(function(){var e,n=$(this),t=$(n.attr("href")),i=t.height(),a=t.position().top;576<=s?a-=l/4:a-=120,a<=o&&o<a+i&&((e=n.attr("aria-label").trim().split("/")[0])!=r.activeIndex&&(console.log(t,o,a,i),r.slideTo(e-1),$("a").removeClass("active"),n.addClass("active")))}),0==o&&$(".detailsMenuSwiper a:first-child").addClass("active")}$(window).scroll(function(e){var n=$(this).scrollTop();d<n||null===localStorage.getItem("popupShowed")&&(o.show(),window.localStorage.setItem("popupShowed",!0)),d=n}),c(),$(document).on("scroll",c),$("#propertyValueSlider").slider({range:!1,min:1e6,max:1e8,step:5e5,slide:function(e,n){$("#propertyValue").val(l.format(n.value).replace("LKR","")),m()}}),$("#propertyValue").on("change",function(){var e=$(this).val().replace(/,/g,""),n=$("#propertyValueSlider").slider("value");1e6<=e&&e<=1e8?($("#propertyValueSlider").slider("value",e),$("#propertyValue").val(l.format(e).replace("LKR",""))):$("#propertyValue").val(l.format(n).replace("LKR","")),m()}),$("#downPaymentSlider").slider({range:!1,min:20,max:100,step:5,slide:function(e,n){$("#downPayPer").text(n.value);n=$("#propertyValueSlider").slider("values",0)/100*n.value;$("#downPayment").val(l.format(n).replace("LKR","")),m()}}),$("#downPayment").on("change",function(){var e=$(this).val().replace(/,/g,""),n=$("#propertyValue").val().replace(/,/g,""),e=(e/n*100).toFixed(2),t=$("#downPaymentSlider").slider("value");20<=e&&e<=100?(console.log("new"),$("#downPaymentSlider").slider("value",e),$("#downPayPer").text(e)):(console.log("new old"),e=n/100*t,$("#downPayment").val(e),$("#downPayPer").text(t)),m()}),$("#interestRateSlider").slider({range:!1,min:5,max:30,step:.5,slide:function(e,n){$("#interestRate").val(n.value+"%"),m()}}),$("#interestRate").on("change",function(){var e=$(this).val().replace("%",""),n=$("#interestRateSlider").slider("value");5<=e&&e<=30?$("#interestRateSlider").slider("value",e):$("#interestRate").val(n+"%"),m()}),$("#loanPeriodSlider").slider({range:!1,min:1,max:30,step:1,slide:function(e,n){$("#loanPeriod").val(n.value+" years"),m()}}),$("#loanPeriod").on("change",function(){var e=$(this).val().replace(" years",""),n=$("#loanPeriodSlider").slider("value");1<=e&&e<=30?$("#loanPeriodSlider").slider("value",e):$("#loanPeriod").val(n),m()}),t=$("#propertyValueSlider").slider("value"),p=$("#downPaymentSlider").slider("value"),w=$("#interestRateSlider").slider("value"),g=$("#loanPeriodSlider").slider("value"),p*=t/100,$("#propertyValue").val(l.format(t).replace("LKR","")),$("#downPayment").val(l.format(p).replace("LKR","")),$("#interestRate").val(w+"%"),$("#loanPeriod").val(g+" years");var t=document.getElementById("loanChart").getContext("2d"),p=t.createLinearGradient(0,0,0,400),w=(p.addColorStop(0,"#B7D464"),p.addColorStop(1,"#009833"),{labels:["Loan amount ","Down Payment"],datasets:[{label:"My First Dataset",data:[300,200],backgroundColor:[p,"#E8E8E8"],hoverOffset:4}]});const u=new Chart(t,{type:"doughnut",data:w,options:{plugins:{htmlLegend:{containerID:"legendContainer"},legend:{display:!1}}}}),m=()=>{setTimeout(()=>{var e=$("#propertyValueSlider").slider("values",0),n=(console.log("propertyValue calc==>",e),$("#interestRateSlider").slider("values",0)),t=12*$("#loanPeriodSlider").slider("values",0),i=$("#downPaymentSlider").slider("values",0);if(console.log("downPaymentPersantage calc==>",i),e&&n&&t&&i){var a=n/100/12;const o=e/100*(100-i);var e=e/100*i,i=Math.ceil(o*(a*(1+a)**t/((1+a)**t-1))),a=Math.ceil(i*t),t=($("#monthlyPayment").text(l.format(i).replace("LKR","Rs")),$(".boldText").text(l.format(i).replace("LKR","Rs")),$("#LoanAmount").text(l.format(Math.ceil(o.toFixed(2))).replace("LKR","Rs")),$("#interestRateValue").text(n),$("#totalInterest").text(l.format(Math.ceil(a-o.toFixed(2))).replace("LKR","Rs")),$("#totalPayment").text(l.format(a).replace("LKR","Rs")),$("#downPayment").val(e),$("#downPayment").val().replace(/,/g,""));i=t,n=o,u.data.datasets[0].data[0]=n,u.data.datasets[0].data[1]=i,u.update()}},500)};m();var g=window["pdfjs-dist/build/pdf"],v=(g.GlobalWorkerOptions.workerSrc="//mozilla.github.io/pdf.js/build/pdf.worker.js",null),h=1,y=!1,P=null,f=1,V=document.getElementById("the-canvas"),b=(document.getElementById("broucher-pdf-container"),V.getContext("2d"));function S(e){y=!0,v.getPage(e).then(function(e){var n=e.getViewport({scale:f}),t=document.getElementById("broucher-pdf-container").offsetWidth,t=(V.height=400,V.width=t-32,{canvasContext:b,viewport:n});e.render(t).promise.then(function(){y=!1,null!==P&&(S(P),P=null)})});var n=e/v.numPages*100+"%";$("#brochureProgressBar").width(n),$("#pageNumbers").html(e+" / "+v.numPages)}function k(e){y?P=e:S(e)}document.getElementById("brochurePrev").addEventListener("click",function(){h<=1||k(--h)}),document.getElementById("brochureNext").addEventListener("click",function(){h>=v.numPages||k(++h)}),g.getDocument("./assets/pdf/sample.pdf").promise.then(function(e){v=e,S(h)});$(".bottomFloat .openPopUP").on("click",function(){setTimeout(()=>a.show(),0)}),$(".bottomFloat .openPopWhatsApp").on("click",function(){setTimeout(()=>s.show(),0)})});let map,service,infowindow,sydney;function initMap(){var e=$("#map").data("location").split(","),e=(sydney=new google.maps.LatLng(parseFloat(e[0]),parseFloat(e[1])),infowindow=new google.maps.InfoWindow,map=new google.maps.Map(document.getElementById("map"),{center:sydney,zoom:15}),new google.maps.Marker({position:sydney,map:map}),{location:sydney,radius:"500",type:["bus_station"]});(service=new google.maps.places.PlacesService(map)).nearbySearch(e,callback)}function callback(e,n){if(n==google.maps.places.PlacesServiceStatus.OK)for(var t=0;t<e.length;t++)createMarker(e[t])}function changeMarkerPlaces(e){clearOverlays();e={location:sydney,radius:"500",type:[e]};(service=new google.maps.places.PlacesService(map)).nearbySearch(e,callback)}$(".mapview-swiper .swiper-slide").on("click",function(){changeMarkerPlaces($(this).data("place")),$(".mapview-swiper .swiper-slide").each(function(){$(this).removeClass("active")}),$(this).addClass("active")});let markers=[];function createMarker(e){var n;e.geometry&&e.geometry.location&&(console.log(e),n=()=>"bus_station"==e.types[0]?"assets/img/details/mapview/locationiconspin/Bus-stops-02.png":"bank"==e.types[0]?"assets/img/details/mapview/locationiconspin/Bank.png":"movie_theater"==e.types[0]?"assets/img/details/mapview/locationiconspin/Cinemas-02.png":e.types.includes("restaurant")?"assets/img/details/mapview/locationiconspin/Restaurant-02.png":"supermarket"==e.types[0]?"assets/img/details/mapview/locationiconspin/Shopping-02.png":"hospital"==e.types[0]?"assets/img/details/mapview/locationiconspin/Hospital-02.png":"shopping_mall"==e.types[0]?"assets/img/details/mapview/locationiconspin/Shopping-02.png":"park"==e.types[0]?"assets/img/details/mapview/locationiconspin/Parks-02.png":"gas_station"==e.types[0]?"assets/img/details/mapview/locationiconspin/Fuel-station-02.png":"police"==e.types[0]?"assets/img/details/mapview/locationiconspin/Police-station-03.png":"",console.log("get==>",n()),n=new google.maps.Marker({map:map,position:e.geometry.location,icon:n()}),markers.push(n),google.maps.event.addListener(n,"click",()=>{infowindow.setContent(e.name||""),infowindow.open(map)}))}function clearOverlays(){if(markers)for(i in markers)markers[i].setMap(null)}window.initMap=initMap;