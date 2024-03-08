function isScrolledIntoView(e){var n=$(window).scrollTop()+100,a=n+$(window).height(),o=$(e).offset().top;return o+$(e).height()<=a&&n<=o}$(document).ready(()=>{var e=Math.max(document.documentElement.clientWidth||0,window.innerWidth||0),a=(isMobileView=e<768,$(".spec-grid").masonry({itemSelector:".spec-grid-item"}),$(".menuContainer .swiper-slide").on("click",function(e){e.preventDefault();e=$(this).attr("href"),e=$(e);$("html,body").animate({scrollTop:e.offset().top-80})}),$(".copyUrl").on("click",function(){navigator.clipboard.writeText(window.location.href),$(this).children("span").html("Copied")}),document.querySelector(".nativeShare").addEventListener("click",e=>{var n;navigator.share?(n=$("#propertyTitle").text(),navigator.share({title:n,url:window.location.href}).then(()=>{console.log("Thanks for sharing!")}).catch(e=>{console.log("Error while using Web share API:"),console.log(e)})):console.log("browser not supported...")}),new Intl.NumberFormat("en-US",{style:"currency",currency:"LKR",currencyDisplay:"symbol",minimumFractionDigits:0})),o=($(".dropdown-toggle").dropdown(),jQuery.validator.setDefaults({onfocusout:function(e){this.element(e)},onkeyup:!1,highlight:function(e){},unhighlight:function(e){},errorElement:"div",errorClass:"invalid-feedback",errorPlacement:function(e,n){n.parent(".input-group-prepend").length?$(n).siblings(".invalid-feedback").append(e):e.insertAfter(n)}}),$("#loanForm"));o.validate({rules:{purpose:{required:!0},fullname:{required:!0},living_place:{required:!0},loanPhone:{required:!0,number:!0},loanEmail:{required:!0}}});$("#details_popup_form").validate({rules:{initName:{required:!0},initPhoneNo:{required:!0,number:!0},initEmail1:{required:!0,email:!0},termsCheck:{required:!0}},highlight:function(e){$(e).removeClass("is-valid").addClass("is-invalid")},unhighlight:function(e){$(e).removeClass("is-invalid").addClass("is-valid")}});var n=$("#shareDetailForm");n.validate({rules:{shareName:{required:!0},shareEmail:{required:!0,email:!0},sharePhone:{required:!0,number:!0}}}),$("#enqForm").validate({rules:{inqName:{required:!0},inqContact:{required:!0,number:!0},inqEmail:{required:!0,email:!0},enqTerms:{}},highlight:function(e){$(e).removeClass("is-valid").addClass("is-invalid")},unhighlight:function(e){$(e).removeClass("is-invalid").addClass("is-valid")}}),o.children("div").steps({headerTag:"h3",bodyTag:"section",titleTemplate:'<span class="number">#index#</span>',transitionEffect:"slideLeft",onStepChanging:function(e,n,a){return o.validate().settings.ignore=":disabled,:hidden",o.valid()},onFinishing:function(e,n){return o.validate().settings.ignore=":disabled",o.valid()},onFinished:function(e,n){$("#loanPopup .modal-content").addClass("success-content")}});const i=document.getElementById("loanPopup");i.addEventListener("hidden.bs.modal",e=>{$("#loanPopup .modal-content").removeClass("success-content")}),$(".floorViewOption").change(function(){var e=$(this).attr("name"),e=$("input[name="+e+"]:checked").val();console.log(e),"3d"==e?($(this).closest(".image-container").find(".img-2d").addClass("d-none"),$(this).closest(".image-container").find(".img-3d").removeClass("d-none")):($(this).closest(".image-container").find(".img-2d").removeClass("d-none"),$(this).closest(".image-container").find(".img-3d").addClass("d-none"))});new Swiper(".detailsMenuSwiper",{slidesPerView:"auto",spaceBetween:20});$(".showAbout").on("click",()=>{$(".about-container>div").toggleClass("hide-text")}),$(".showFeatures").on("click",()=>{$(".features-container").toggleClass("show-less")}),$("#videos-nav-tab button").on("click",function(e,n){var a=$(this)[0];$("#videos-nav-tab button").each((e,n)=>{n!==a&&$(n).removeClass("active")})}),$("#nextStepItems >.item-col").each(function(e,n){3<e&&$(window).width()<768&&$(this).addClass("hide")}),$("#viewNextStep").on("click",function(){$("#nextStepItems > .item-col").removeClass("hide"),$(".viewMoreNext").hide()}),new Swiper(".payment-plan-swiper",{loop:!1,navigation:{nextEl:".payment-next",prevEl:".payment-prev"},slidesPerView:4,spaceBetween:10,breakpoints:{320:{slidesPerView:3.5},576:{slidesPerView:4.5},768:{slidesPerView:5},992:{slidesPerView:5}}}),new Swiper(".land-payment-plan-swiper",{loop:!0,navigation:{nextEl:".land-payment1-next",prevEl:".land-payment1-prev"},slidesPerView:4,spaceBetween:10,breakpoints:{320:{slidesPerView:3.5},576:{slidesPerView:4.5},768:{slidesPerView:5},992:{slidesPerView:5}}}),new Swiper(".land-payment-plan-swiper2",{loop:!0,navigation:{nextEl:".land-payment2-next",prevEl:".land-payment2-prev"},slidesPerView:4,spaceBetween:10,breakpoints:{320:{slidesPerView:3.5},576:{slidesPerView:4.5},768:{slidesPerView:5},992:{slidesPerView:5}}}),new Swiper(".land-payment-plan-swiper3",{loop:!0,navigation:{nextEl:".land-payment3-next",prevEl:".land-payment3-prev"},slidesPerView:4,spaceBetween:10,breakpoints:{320:{slidesPerView:3.5},576:{slidesPerView:4.5},768:{slidesPerView:5},992:{slidesPerView:5}}}),new Swiper(".videos-menu-swiper",{loop:!1,navigation:{nextEl:".video-prev",prevEl:".video-next"},slidesPerView:4,spaceBetween:10,breakpoints:{320:{slidesPerView:3.5},576:{slidesPerView:4.5},768:{slidesPerView:5},992:{slidesPerView:5}}}),new Swiper(".loan-swiper",{loop:!1,navigation:{nextEl:".loan-next",prevEl:".loan-prev"},slidesPerView:"auto",spaceBetween:10}),new Swiper(".videos-menu-swiper",{loop:!1,slidesPerView:"auto",spaceBetween:10,navigation:{nextEl:".video-next",prevEl:".video-prev"}});const t=new Swiper(".other-project-swiper",{loop:!1,navigation:{nextEl:".other-project-next",prevEl:".other-project-prev"},slidesPerView:3,spaceBetween:15,breakpoints:{320:{slidesPerView:1.5},576:{slidesPerView:2.5},768:{slidesPerView:2.5},992:{slidesPerView:2.5},1200:{slidesPerView:3.5}}}),l=o=>{console.log("filter Similar ==>",o),$(".other-project-swiper").find(".swiper-slide-item").each((e,n)=>{var a=$(n).data("price");o==a?($(n).removeClass("d-none"),$(n).addClass("swiper-slide")):($(n).addClass("d-none"),$(n).removeClass("swiper-slide")),t.updateSlides(),t.slideTo(0)}),$(".view-all-similar").addClass("d-none"),$('.view-all-similar[data-all="'+o+'"]').removeClass("d-none")};var e=$("#Developer .filter-buttons button:first")?.data("simmler-filter"),e=(e&&l(e),$(".similar-filter-btn").on("click",function(){var e=$(this).data("simmler-filter");l(e),$("#Developer .filter-buttons button").removeClass("btn-custom-primary"),$("#Developer .filter-buttons button").addClass("btn-outline-primary"),$(this).addClass("btn-custom-primary")}),new Swiper(".locality-swiper",{loop:!0,slidesPerView:"auto",navigation:{nextEl:".locality-next",prevEl:".locality-prev"},spaceBetween:15,breakpoints:{320:{slidesPerView:1.2},576:{slidesPerView:1.3},768:{slidesPerView:2.3},992:{slidesPerView:2.2},1200:{slidesPerView:2.3}}}),new Swiper(".insight-swiper",{loop:!0,slidesPerView:"auto",navigation:{nextEl:".highlight-next",prevEl:".highlight-prev"},spaceBetween:15,breakpoints:{320:{slidesPerView:1.2},576:{slidesPerView:2.2},768:{slidesPerView:2.5},992:{slidesPerView:2.4},1200:{slidesPerView:3},1440:{slidesPerView:3}}}),new Swiper(".feature-project-swiper",{loop:!0,slidesPerView:"auto",navigation:{nextEl:".featured-next",prevEl:".featured-prev"},spaceBetween:15,breakpoints:{320:{slidesPerView:1.1},425:{slidesPerView:1.3},576:{slidesPerView:1.3},768:{slidesPerView:2.2},992:{slidesPerView:2.2},1200:{slidesPerView:2.5},1440:{slidesPerView:2.8}}}),document.getElementById("propertyRateChart").getContext("2d")),s=e.createLinearGradient(0,0,0,400),r=(s.addColorStop(0,"rgba(251,183,87,0.50)"),s.addColorStop(1,"rgba(255,212,78,0.00)"),{labels:["Jan 1","Jan 3","Jan 5","Jan 7","Jan 9","Jan 11","Jan 13","Jan 15"],data:[200,1220,1340,1450,1320,1220,1390,1560]}),d={labels:["Jan 1","Jan 2","Jan 4","Jan 7","Jan 10","Jan 11","Jan 13","Jan 16"],data:[600,1120,750,1050,1320,1220,1390,1560]},c={labels:["Jan 1","Jan 3","Jan 5","Jan 7","Jan 9","Jan 11","Jan 13","Jan 15"],data:[400,1220,1340,300,1320,1220,1390,1560]},p={labels:["Jan 1","Jan 3","Jan 5","Jan 7","Jan 9","Jan 11","Jan 13","Jan 15"],data:[800,300,1340,1300,1320,400,1390,200]},m=new Chart(e,{type:"line",data:{labels:r.labels,datasets:[{label:"Price range",data:r.data,tension:.3,fill:!0,backgroundColor:s,borderColor:"#ECA743"}]},options:{responsive:!0,maintainAspectRatio:!1,scales:{x:{grid:{display:!1}},y:{grid:{display:!1}}}}}),u=($("input[name=chartType]").change(function(){var e=$("input[name=chartType]:checked").val(),n=$('input[name="price_option"]:checked').val(),e="rent"==e?"sqftPrice"==n?p:d:"sqftPrice"==n?c:r;m.data.labels=e.labels,m.data.datasets.pop(),m.data.datasets.push({label:"Price range",data:e.data,tension:.3,fill:!0,backgroundColor:s,borderColor:"#ECA743"}),m.update()}),$("input[name=price_option]").change(function(){var e=$("input[name=chartType]:checked").val(),n=$('input[name="price_option"]:checked').val(),e="buy"==e?"sqftPrice"==n?c:r:"sqftPrice"==n?p:d;m.data.labels=e.labels,m.data.datasets.pop(),m.data.datasets.push({label:"Price range",data:e.data,tension:.3,fill:!0,backgroundColor:s,borderColor:"#ECA743"}),m.update()}),new Swiper(".banner-swiper",{rewind:!0,navigation:{nextEl:".banner-next",prevEl:".banner-prev"},slidesPerView:1,spaceBetween:0}));myVideoPlayer=videojs.getPlayer("myVideo");const w=$("#youtubeVideo");w.length&&u.on("slideChange",()=>{w[0].src=w[0].src,myVideoPlayer.pause()});e=document.querySelector("#bannerModal");e.addEventListener("show.bs.modal",function(e){console.log(e.relatedTarget);e=e.relatedTarget,e=$(e).data("index")||0;u.slideTo(e)}),e.addEventListener("hide.bs.modal",()=>{w.length&&(w[0].src=w[0].src,myVideoPlayer.pause())});document.querySelector("#zoomModal").addEventListener("show.bs.modal",function(e){var n=e.relatedTarget;let o="";$(n).closest(".image-container").find(".floor-img").each((e,n)=>{var a=$(n).hasClass("d-none");a||(o=$(n).attr("src")),console.log("isHide==>",a)});n=$(e.target).find("img");$(n).attr("src",o)});var e=document.querySelector("#detailContactPhoneNo"),e=(window.intlTelInput(e,{initialCountry:"lk",allowDropdown:!0}),document.querySelector("#initPhoneNo")),e=(window.intlTelInput(e,{initialCountry:"lk",allowDropdown:!0}),document.querySelector("#inqContact")),e=(window.intlTelInput(e,{initialCountry:"lk",allowDropdown:!0}),document.querySelector("#sharePhone")),h=(window.intlTelInput(e,{initialCountry:"lk",allowDropdown:!0}),new bootstrap.Modal(document.getElementById("DetailsPhoneNoModal"))),v=new bootstrap.Modal(document.getElementById("detailsPopup")),g=new bootstrap.Modal(document.getElementById("DetailsWhatsAppModal")),e=(document.getElementById("DetailsPhoneNoModal").addEventListener("hidden.bs.modal",e=>{$("body").css("overflow","auto")}),$("#btnShowPhone").on("click",function(){$("#detailsCallbackBtnClose").trigger("click"),setTimeout(()=>h.show(),0)}),$("#showSpecification").on("click",function(){$("#specContent").toggleClass("show-less")}),$("#showTeam").on("click",function(){$("#teamShowMoreContent").toggleClass("show-less")}),$("#viewAgent").on("click",function(){y()}),$("#btnShowPhoneDetailModal").on("click",function(){n.valid()&&(isMobileView?(k?S:C)():($("#phoneInfo").removeClass("hide"),$("#viewAgent").removeClass("d-md-inline-flex"),$("#viewAgent").addClass("d-none")))}),$("#btnShowPhoneDetailNow").on("click",function(){f.hide(),isMobileView?(k?S:C)():($("#phoneInfo").removeClass("hide"),$("#viewAgent").removeClass("d-md-inline-flex"),$("#viewAgent").addClass("d-none"))}),$("#agentNum").on("click",function(){setTimeout(()=>{y()},1e3)}),document.getElementById("shareDetailModal")),f=new bootstrap.Modal(e,{keyboard:!1});const y=()=>setTimeout(()=>{f.show()},500);var b=0;function P(e){var o=$(document).scrollTop();const i=Math.max(document.documentElement.clientHeight||0,window.innerHeight||0),t=Math.max(document.documentElement.clientWidth||0,window.innerWidth||0);let l=!1,s=null;$("#new_scroll_menu a").each(function(){var e=$(this),n=$(e.attr("href")),a=n.height(),n=n.position().top;576<=t?n-=i/4:n-=120,n<=o&&o<n+a?(console.log("if==>",s,e[0]),e[0].scrollIntoView({behavior:"instant",block:"start",inline:"start"}),s&&(console.log("PrevElement==>",s),$(s).removeClass("active"),s=null),$(e[0]).addClass("active"),l=!0):l?$(e[0]).removeClass("active"):s=e[0]}),0==o&&$(".detailsMenuSwiper a:first-child").addClass("active")}$(window).scroll(function(e){var n=$(this).scrollTop();b<n||null===localStorage.getItem("popupShowed")&&(v.show(),window.localStorage.setItem("popupShowed",!0)),b=n}),P(),$(document).on("scroll",P),$("#propertyValueSlider").slider({range:!1,min:1e6,max:1e8,step:5e5,slide:function(e,n){$("#propertyValue").val(a.format(n.value).replace("LKR","")),loanCalculator()}}),$("#propertyValue").on("change",function(){var e=$(this).val().replace(/,/g,""),n=$("#propertyValueSlider").slider("value");1e6<=e&&e<=1e8?($("#propertyValueSlider").slider("value",e),$("#propertyValue").val(a.format(e).replace("LKR",""))):$("#propertyValue").val(a.format(n).replace("LKR","")),loanCalculator()}),$("#downPaymentSlider").slider({range:!1,min:20,max:100,step:5,slide:function(e,n){$("#downPayPer").text(n.value);n=$("#propertyValueSlider").slider("values",0)/100*n.value;$("#downPayment").val(a.format(n).replace("LKR","")),loanCalculator()}}),$("#downPayment").on("change",function(){var e=$(this).val().replace(/,/g,""),n=$("#propertyValue").val().replace(/,/g,""),e=(e/n*100).toFixed(2),a=$("#downPaymentSlider").slider("value");20<=e&&e<=100?(console.log("new"),$("#downPaymentSlider").slider("value",e),$("#downPayPer").text(e)):(console.log("new old"),e=n/100*a,$("#downPayment").val(e),$("#downPayPer").text(a)),loanCalculator()}),$("#interestRateSlider").slider({range:!1,min:5,max:30,step:.5,slide:function(e,n){$("#interestRate").val(n.value+"%"),loanCalculator()}}),$("#interestRate").on("change",function(){var e=$(this).val().replace("%",""),n=$("#interestRateSlider").slider("value");5<=e&&e<=30?$("#interestRateSlider").slider("value",e):$("#interestRate").val(n+"%"),loanCalculator()}),$("#loanPeriodSlider").slider({range:!1,min:1,max:30,step:1,slide:function(e,n){$("#loanPeriod").val(n.value+" years"),loanCalculator()}}),$("#loanPeriod").on("change",function(){var e=$(this).val().replace(" years",""),n=$("#loanPeriodSlider").slider("value");1<=e&&e<=30?$("#loanPeriodSlider").slider("value",e):$("#loanPeriod").val(n),loanCalculator()});const C=()=>{setTimeout(()=>h.show(),0)},S=()=>{setTimeout(()=>g.show(),0)};let k=!1;$(".openPopUP").on("click",function(){k=!1,y()}),$(".bottomFloat .openPopWhatsApp").on("click",function(){k=!0,y()});let V;const E=localStorage.getItem("WAPShowed"),x=(console.log("isWAPShowed==>",E),setTimeout(()=>{E?$("#whatsAppChat").removeClass("d-none"):showWhatsApp("#whatsAppPopup")},3e3),setTimeout(()=>{E&&$("#whatsAppChat").removeClass("d-none")},0),$("#closeWap").on("click",function(){$("#whatsAppPopup").addClass("d-none"),clearInterval(V)}),$(".overlay-wap").on("click",function(){$("#whatsAppPopup").addClass("d-none"),clearInterval(V)}),$("#nav_breadcrumb").children().length),M=(console.log("levelLength",x),2<x&&$("#nav_breadcrumb li").each((e,n)=>{console.log("index=========>",e),0<e&&e<x-1&&(console.log("item==>",n),"show_breadcrumb"==$(n).attr("id")?$(n).removeClass("d-none"):$(n).addClass("d-none")),x}),$("#show_breadcrumb").on("click",function(){$("#nav_breadcrumb li").each((e,n)=>{"show_breadcrumb"==$(n).attr("id")?$(n).addClass("d-none"):$(n).removeClass("d-none")})}),$("#nav_breadcrumb_mobile").children().length);console.log("mobilelevelLength==>",M),2<M&&$("#nav_breadcrumb_mobile li").each((e,n)=>{console.log("index=========>",e),0<e&&e<M-1&&(console.log("item==>",n),"show_breadcrumb_mobile"==$(n).attr("id")?$(n).removeClass("d-none"):$(n).addClass("d-none")),M}),$("#show_breadcrumb_mobile").on("click",function(){$("#nav_breadcrumb_mobile li").each((e,n)=>{"show_breadcrumb_mobile"==$(n).attr("id")?$(n).addClass("d-none"):$(n).removeClass("d-none")})}),$(".currencyPicker").selectpicker();var I=new bootstrap.Modal(document.getElementById("saveModal"));$("#saveBtn").on("click",function(){$(this).toggleClass("saved");const e=$(this).children("span").text();var n="save"==e.toLowerCase()?"Saved":"Save",n=($(this).children("span").html(n),localStorage.getItem("closeModalShowed"));console.log("isCloseShowed==>",n),n||(I.show(),localStorage.setItem("closeModalShowed",!0))}),$("#closeSaveModal").on("click",()=>{I.hide()}),$("#whatsAppChat").on("click",()=>{showWhatsApp("#whatsAppPopup")});let q=$("#frm_mailToFriend");q.validate({rules:{fr_name:{required:!0},fr_email:{required:!0,email:!0},you_name:{required:!0},you_mail:{required:!0,email:!0},fr_message:{required:!0}}});var T=new bootstrap.Modal(document.getElementById("EmailToFriendModal")),L=new bootstrap.Modal(document.getElementById("shareMobileModal"));$("#CustomID").on("click",function(){T.show()}),$("#shareToMailBtn").on("click",function(){L.hide(),T.show()}),$("#closeEmailFriend").on("click",function(){T.hide()}),$(".star span").addClass("d-none"),$(".star").on("click",function(){$(this).children("span").removeClass("d-none")}),$(document).on("scroll",function(){var e=isScrolledIntoView($("#Enquiry")),n=localStorage.getItem("scrollWapShowed");e&&!n&&(showWhatsApp("#whatsAppPopup"),localStorage.setItem("scrollWapShowed",!0))});let _=!1,J,A;const B=document.querySelector(".menu_container");e=e=>{_=!1};B.addEventListener("mousemove",e=>{e.preventDefault(),_&&(e=e.pageX-B.offsetLeft-J,B.scrollLeft=A-e)},!1),B.addEventListener("mousedown",e=>{_=!0,J=e.pageX-B.offsetLeft,A=B.scrollLeft},!1),B.addEventListener("mouseup",e,!1),B.addEventListener("mouseleave",e,!1)});const showWhatsApp=e=>{$(e).removeClass("d-none"),setTimeout(()=>{$(e).addClass("transation")},200),localStorage.setItem("WAPShowed",!0),setTime(),myIntervel=setInterval(setTime,6e4),setTimeout(()=>{$("#typing").addClass("d-none"),$("#wap_message").removeClass("d-none"),$("#whatsAppChat").removeClass("d-none")},3e3)},setTime=()=>{console.log("time called ==>");var e=new Date,e=e.getHours()+":"+e.getMinutes();$("#wap-time").html(e)};let map,service,infowindow,sydney;function initMap(){var e=$("#map").data("location").split(",");sydney=new google.maps.LatLng(parseFloat(e[0]),parseFloat(e[1])),infowindow=new google.maps.InfoWindow,map=new google.maps.Map(document.getElementById("map"),{center:sydney,zoom:15}),new google.maps.Marker({position:sydney,map:map}),sydney;service=new google.maps.places.PlacesService(map)}function callback(e,n){if(n==google.maps.places.PlacesServiceStatus.OK)for(var a=0;a<e.length;a++)createMarker(e[a])}function changeMarkerPlaces(e){clearOverlays();e={location:sydney,radius:"500",type:[e]};(service=new google.maps.places.PlacesService(map)).nearbySearch(e,callback)}let markers=[];function createMarker(e){if(e.geometry&&e.geometry.location){console.log(e);var n=()=>"bus_station"==e.types[0]?"assets/img/details/mapview/locationiconspin/Bus-stops-02.png":"bank"==e.types[0]?"assets/img/details/mapview/locationiconspin/Bank.png":"movie_theater"==e.types[0]?"assets/img/details/mapview/locationiconspin/Cinemas-02.png":e.types.includes("restaurant")?"assets/img/details/mapview/locationiconspin/Restaurant-02.png":"supermarket"==e.types[0]?"assets/img/details/mapview/locationiconspin/Shopping-02.png":"hospital"==e.types[0]?"assets/img/details/mapview/locationiconspin/Hospital-02.png":"shopping_mall"==e.types[0]?"assets/img/details/mapview/locationiconspin/Shopping-02.png":"park"==e.types[0]?"assets/img/details/mapview/locationiconspin/Parks-02.png":"gas_station"==e.types[0]?"assets/img/details/mapview/locationiconspin/Fuel-station-02.png":"police"==e.types[0]?"assets/img/details/mapview/locationiconspin/Police-station-03.png":"";console.log("get==>",n());const a=new google.maps.Marker({map:map,position:e.geometry.location,icon:n()});a.addListener("mouseover",function(){try{infowindow.setContent(e.name||""),infowindow.open({anchor:a,map:map,shouldFocus:!1})}catch(e){console.log("create Info error ==>")}}),google.maps.event.addListener(a,"click",()=>{try{infowindow.setContent(e.name||""),infowindow.open({anchor:a,map:map,shouldFocus:!1})}catch(e){console.log("create Info error ==>")}}),markers.push(a)}}function clearOverlays(){if(markers)for(i in markers)markers[i].setMap(null)}window.initMap=initMap;