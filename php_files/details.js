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

    $(".copyUrl").on("click", function () {
      navigator.clipboard.writeText(window.location.href);
      $(this).children("span").html("Copied");
    });

    document.querySelector('.nativeShare')
        .addEventListener('click', event => {
            if (navigator.share) {

                var title = $('#propertyTitle').text();

                navigator.share({
                    title: title,
                    url: window.location.href
                }).then(() => {
                    //console.log('Thanks for sharing!');
                }).catch(err => {
                    //console.log(
                    //    "Error while using Web share API:");
                    //console.log(err);
                });
            } else {
                //console.log("browser not supported...");
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

// mail popup
    $("#expo_register").click(function (e) {
        //form val
        var from_email     = $("#inqEmail").val();
        var from_name = $("#inqName").val();
        var from_tel    = $("#inqContact").val();
        var fb_mesg     = $("#Message").val();
        var pattern     = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;

        //hidden values
        var ad_id       = $("#ad_id").val();
        // alert(ad_id);
        var lead_type   = $("#lead_type").val();
        var ref         = $("#ref").val();
        var popup_selector  = $("#popup_selector").val();
        var from_tel_original = $("#from_tel_original").val();
        var pageid      = $("#pageid").val();

        // if($pageid == "idealhome"){ $nameFrom = "IdealHome";  }else{  $nameFrom = "LankaPropertyWeb"; }

        var utm_medium      = $("#utm_medium").val();
        var utm_content     = $("#utm_content").val();
        var utm_campaign    = $("#utm_campaign").val();
        var utm_source      = $("#utm_source").val();

        var propty_type     = $("#propty_type").val();
        var tab             = $("#tab").val();
        var city            = $("#city").val();
        var Ga_Price        = $("#Ga_Price").val();
        var image_360       = $("#image_360").val();
        var video_360       = $("#video_360").val();
        var priority_name   = $("#priority_name").val();
        var newutm_campaign = $("#newutm_campaign").val();
        var newutm_medium   = $("#utm_medium").val();
        var newutm_content  = $("#utm_content").val();
        var user_id         = $("#user_id").val();
        var verified_ad     = $("#verified_ad").val();
        var newutm_source   = $("#utm_source").val();

        var UID            = $("#UID").val();
        var tab                 = $("#tab").val();
        var ad_heading          = $("#ad_heading").val();
        var propty_district     = $("#propty_district").val();
        var propty_region   = $("#propty_region").val();
        var price_for_fbq   = $("#price_for_fbq").val();
        var price_land_pp   = $("#price_land_pp").val();
        var size_land       = $("#size_land").val();
        var land_units      = $("#land_units").val();
        var price_type      = $("#price_type").val();
        var priority_name   = $("#priority_name").val();
        var feat_dev_cont_name   = $("#feat_dev_cont_name").val();
        var camp_type            = $("#camp_type").val();
        var price_land_pa        = $("#price_land_pa").val();

        // var getCC = $("#cc").val();
        if (from_name === '') {
            swal("Please enter Name", "", "error");
            //alert('Please enter full name')
            return false;
        }
        if (from_email === '') {
            swal("Please enter email address", "", "error");
            //alert('Please enter full name')
            return false;
        }
        if (!pattern.test(from_email)) {
            swal("Please enter valid email address", "", "error");
            return false;
        }
        if (from_tel === '') {
            //alert('Please enter contact number')
            swal("Please enter contact number", "", "error");
            return false;
        }

        var phoneno = /^(?=.*[0-9])[- +()0-9]+$/;
        if (!phoneno.test(from_tel)) {
            swal("Please enter valid contact number", "", "error");
            return false;
        } else {
            document.getElementById("expo_register").disabled = true;
            $.ajax({
                url: '/forms/contact-advertiser.php',
                type: 'POST',
                data: {
                    "from_name"  : from_name,
                    "from_email" : from_email,
                    "from_tel"   : from_tel,
                    "fb_mesg"    : fb_mesg,
                    "ad_id"      : ad_id,
                    "lead_type"  : lead_type,
                    "ref"        : ref,
                    "popup_selector"       : popup_selector,
                    "from_tel_original"    : from_tel_original,
                    "pageid"               : pageid,
                    "utm_medium"     : utm_medium,
                    "utm_content"    : utm_content,
                    "utm_campaign"   : utm_campaign,
                    "utm_source"     : utm_source

                },
            }).done(function (response) {


                gtag('event', 'submit', {
                    'event_category': 'Leads Email',
                    'event_label': '/leads/email/' + tab + '/' + propty_type + '/' + city + '/price-' + Ga_Price + image_360 + video_360 + '/' + priority_name + '/utm_campaign-' + newutm_campaign + '/utm_medium-' + newutm_medium + '/utm_content-' + newutm_content + '/utm_source-' + newutm_source + '/UID-' + user_id + '/ADID-' + ad_id + '/' + verified_ad,
                    'non_interaction': true
                });

                fbq('track', 'Lead', {
                    listing_type: tab,
                    property_type: propty_type,
                    name: ad_heading,
                    ad_id: ad_id,
                    user_id: UID,
                    city: city,
                    district: propty_district,
                    region: propty_region,
                    price: price_for_fbq,
                    price_per_perch: price_land_pp,
                    price_per_acre: price_land_pa,
                    content_type: size_land,
                    land_size_type: land_units,
                    preferred_price_range: price_type,
                    priority: priority_name,
                    action_type: 'submit',
                    action_name: 'email',
                    development: feat_dev_cont_name,
                    campaign_type: camp_type
                });

                swal("Your message has been sent successfully!", "* You may also add your selected ads to the Shortlist and once completed send one email to all the advertisers of your selected ads.", "success");
                $("#inqEmail").val('');
                $("#inqName").val('');
                $("#inqContact").val('');
                $("#Message").val('');

                return  false;
            });
        }

    });

    // report-add popup
    $("#report_ad_pop").click(function (e) {
        //form val
        let  rep_name       = $("#reportName").val();
        let  rep_email      = $("#reportEmail").val();
        let  contact_number = $("#reportPhone").val();
        let  rep_reason     = $("#reportReason").val();
        let  rep_det        = $("#rep_text").val();
        let  ad_no           = $("#ad_no").val();
        let  page            = $("#page").val();
        var  pattern     = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;

        var ad_id       = $("#ad_id").val();
        var lead_type   = $("#lead_type").val();
        var ref         = $("#ref").val();
        var popup_selector  = $("#popup_selector").val();
        var from_tel_original = $("#from_tel_original").val();
        var pageid      = $("#pageid").val();

        // if($pageid == "idealhome"){ $nameFrom = "IdealHome";  }else{  $nameFrom = "LankaPropertyWeb"; }

        var utm_medium      = $("#utm_medium").val();
        var utm_content     = $("#utm_content").val();
        var utm_campaign    = $("#utm_campaign").val();
        var utm_source      = $("#utm_source").val();

        var propty_type     = $("#propty_type").val();
        var tab             = $("#tab").val();
        var city            = $("#city").val();
        var Ga_Price        = $("#Ga_Price").val();
        var image_360       = $("#image_360").val();
        var video_360       = $("#video_360").val();
        var priority_name   = $("#priority_name").val();
        var newutm_campaign = $("#newutm_campaign").val();
        var newutm_medium   = $("#utm_medium").val();
        var newutm_content  = $("#utm_content").val();
        var user_id         = $("#user_id").val();
        var verified_ad     = $("#verified_ad").val();
        var newutm_source   = $("#utm_source").val();

        var UID            = $("#UID").val();
        var tab                 = $("#tab").val();
        var ad_heading          = $("#ad_heading").val();
        var propty_district     = $("#propty_district").val();
        var propty_region   = $("#propty_region").val();
        var price_for_fbq   = $("#price_for_fbq").val();
        var price_land_pp   = $("#price_land_pp").val();
        var size_land       = $("#size_land").val();
        var land_units      = $("#land_units").val();
        var price_type      = $("#price_type").val();
        var priority_name   = $("#priority_name").val();
        var feat_dev_cont_name   = $("#feat_dev_cont_name").val();
        var camp_type            = $("#camp_type").val();
        var price_land_pa        = $("#price_land_pa").val();

        if (rep_name === '') {
            swal("Please enter Name", "", "error");
            //alert('Please enter full name')
            return false;
        }
        if (rep_email === '') {
            swal("Please enter email address", "", "error");
            //alert('Please enter full name')
            return false;
        }
        if (!pattern.test(rep_email)) {
            swal("Please enter valid email address", "", "error");
            return false;
        } else {
            document.getElementById("report_ad_pop").disabled = true;
            $.ajax({
                url: '/includes/files/more-details/feedback.php',
                type: 'POST',
                data: {
                    "rep_name"      : rep_name,
                    "rep_email"     : rep_email,
                    "rep_reason"    : rep_reason,
                    "contact_number"   : contact_number,
                    "rep_det"          : rep_det,
                    "ad_no"            : ad_no,
                    "page"             : page

                },
            }).done(function (rep_resp) {
                gtag('event', 'submit', {
                    'event_category': 'email report',
                    'event_label': '/leads/report/email/' + tab + '/' + propty_type + '/' + city + '/price-' + Ga_Price + image_360 + video_360 + '/' + priority_name + '/utm_campaign-' + newutm_campaign + '/utm_medium-' + newutm_medium + '/utm_content-' + newutm_content + '/utm_source-' + newutm_source + '/UID-' + user_id + '/ADID-' + ad_id + '/' + verified_ad,
                    'non_interaction': true
                });
                fbq('track', 'Lead', {
                    listing_type: tab,
                    property_type: propty_type,
                    name: ad_heading,
                    ad_id: ad_id,
                    user_id: UID,
                    city: city,
                    district: propty_district,
                    region: propty_region,
                    price: price_for_fbq,
                    price_per_perch: price_land_pp,
                    price_per_acre: price_land_pa,
                    content_type: size_land,
                    land_size_type: land_units,
                    preferred_price_range: price_type,
                    priority: priority_name,
                    action_type: 'submit',
                    action_name: 'email report',
                    development: feat_dev_cont_name,
                    campaign_type: camp_type
                });

                $('#reportModal').modal('hide');
                swal("Your message has been sent successfully","Thank you for reporting about this ad to us. A moderator will review this ad and take necessary action.");
                return  false;
            });
        }

    });

    // detailsPopup
    $("#detailsPopupBtn").click(function (e) {
        //form val
        var from_email     = $("#initEmail1").val();
        var from_name = $("#initName").val();
        var from_tel    = $("#initPhoneNo").val();
        var fb_mesg     = $("#messagesaut").val();
        var termsCheck     = $("#termsCheck").val();

        var pattern     = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;

        //hidden values
        var ad_id       = $("#ad_idA").val();
        var lead_type   = $("#lead_typeA").val();
        var ref         = $("#refA").val();
        var popup_selector  = $("#popup_selectorA").val();
        var from_tel_original = $("#from_tel_originalA").val();
        var pageid      = $("#pageidA").val();

        // if($pageid == "idealhome"){ $nameFrom = "IdealHome";  }else{  $nameFrom = "LankaPropertyWeb"; }

        var utm_medium      = $("#utm_mediumA").val();
        var utm_content     = $("#utm_contentA").val();
        var utm_campaign    = $("#utm_campaignA").val();
        var utm_source      = $("#utm_sourceA").val();

        var propty_type     = $("#propty_type").val();
        var tab             = $("#tab").val();
        var city            = $("#city").val();
        var Ga_Price        = $("#Ga_Price").val();
        var image_360       = $("#image_360").val();
        var video_360       = $("#video_360").val();
        var priority_name   = $("#priority_name").val();
        var newutm_campaign = $("#newutm_campaign").val();
        var newutm_medium   = $("#utm_medium").val();
        var newutm_content  = $("#utm_content").val();
        var user_id         = $("#user_id").val();
        var verified_ad     = $("#verified_ad").val();
        var newutm_source   = $("#utm_source").val();

        var UID            = $("#UID").val();
        var tab                 = $("#tab").val();
        var ad_heading          = $("#ad_heading").val();
        var propty_district     = $("#propty_district").val();
        var propty_region   = $("#propty_region").val();
        var price_for_fbq   = $("#price_for_fbq").val();
        var price_land_pp   = $("#price_land_pp").val();
        var size_land       = $("#size_land").val();
        var land_units      = $("#land_units").val();
        var price_type      = $("#price_type").val();
        var priority_name   = $("#priority_name").val();
        var feat_dev_cont_name   = $("#feat_dev_cont_name").val();
        var camp_type            = $("#camp_type").val();
        var price_land_pa        = $("#price_land_pa").val();


        // var getCC = $("#cc").val();

        if (from_name === '') {
            swal("Please enter Name", "", "error");
            //alert('Please enter full name')
            return false;
        }
        if (from_email === '') {
            swal("Please enter email address", "", "error");
            //alert('Please enter full name')
            return false;
        }
        if (!pattern.test(from_email)) {
            swal("Please enter valid email address", "", "error");
            return false;
        }
        if (from_tel === '') {
            //alert('Please enter contact number')
            swal("Please enter contact number", "", "error");
            return false;
        }

        var phoneno = /^(?=.*[0-9])[- +()0-9]+$/;
        if (!phoneno.test(from_tel)) {
            swal("Please enter valid contact number", "", "error");
            return false;
        } else {
            document.getElementById("detailsPopupBtn").disabled = true;
            $.ajax({
                url: '/forms/contact-advertiser.php',
                type: 'POST',
                data: {
                    "from_name": from_name,
                    "from_email"    : from_email,
                    "from_tel"   : from_tel,
                    "fb_mesg"    : fb_mesg,
                    "ad_id"      : ad_id,
                    "lead_type"  : lead_type,
                    "ref"        : ref,
                    "popup_selector"       : popup_selector,
                    "from_tel_original"    : from_tel_original,
                    "pageid"               : pageid,
                    "utm_medium"     : utm_medium,
                    "utm_content"    : utm_content,
                    "utm_campaign"   : utm_campaign,
                    "utm_source"     : utm_source,
                    "termsCheck"     :  termsCheck

                },
            }).done(function (response) {

                gtag('event', 'submit', {
                    'event_category': 'Leads Pop-up Form',
                    'event_label': '/leads/form/' + tab + '/' + propty_type + '/' + city + '/price-' + Ga_Price + image_360 + video_360 + '/' + priority_name + '/utm_campaign-' + newutm_campaign + '/utm_medium-' + newutm_medium + '/utm_content-' + newutm_content + '/utm_source-' + newutm_source + '/UID-' + user_id + '/ADID-' + ad_id + '/' + verified_ad,
                    'non_interaction': true
                });


                fbq('track', 'Lead', {
                    listing_type: tab,
                    property_type: propty_type,
                    name: ad_heading,
                    ad_id: ad_id,
                    user_id: UID,
                    city: city,
                    district: propty_district,
                    region: propty_region,
                    price: price_for_fbq,
                    price_per_perch: price_land_pp,
                    price_per_acre: price_land_pa,
                    content_type: size_land,
                    land_size_type: land_units,
                    preferred_price_range: price_type,
                    priority: priority_name,
                    action_type: 'submit',
                    action_name: 'Leads Pop-up',
                    development: feat_dev_cont_name,
                    campaign_type: camp_type
                });

                $('#detailsPopup').modal('hide');
                swal("Your message has been sent successfully!", "* You may also add your selected ads to the Shortlist and once completed send one email to all the advertisers of your selected ads.", "success");
                return  false;
            });
        }

    });

    //show phone number
    $("#btnShowPhoneDetailModal").click(function (e) {
        if (shareDetailForm.valid()) {
        var phoneNumberForm = $("#sharePhone").val();
        var nameForm = $("#shareName").val();
        var emailNumberForm = $("#shareEmail").val();
        var showpop = $("#showpop").val();
        var project_id = $("#ad_idB").val();
        var ad_heading = $("#ad_headingB").val();

            var from_email  = $("#inqEmail").val();
            var from_name 	= $("#inqName").val();
            var from_tel    = $("#inqContact").val();
            var fb_mesg     = $("#Message").val();
            var pattern     = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;

            //hidden values
            var ad_id       = $("#ad_id").val();
            // alert(ad_id);
            var lead_type   = $("#lead_type").val();

            var ref         = $("#ref").val();
            var popup_selector  = $("#popup_selector").val();
            var from_tel_original = $("#from_tel_original").val();
            var pageid      = $("#pageid").val();

            // if($pageid == "idealhome"){ $nameFrom = "IdealHome";  }else{  $nameFrom = "LankaPropertyWeb"; }

            var utm_medium      = $("#utm_medium").val();
            var utm_content     = $("#utm_content").val();
            var utm_campaign    = $("#utm_campaign").val();
            var utm_source      = $("#utm_source").val();

            var propty_type     = $("#propty_type").val();
            var tab             = $("#tab").val();
            var city            = $("#city").val();
            var Ga_Price        = $("#Ga_Price").val();
            var image_360       = $("#image_360").val();
            var video_360       = $("#video_360").val();
            var priority_name   = $("#priority_name").val();
            var newutm_campaign = $("#newutm_campaign").val();
            var newutm_medium   = $("#utm_medium").val();
            var newutm_content  = $("#utm_content").val();
            var user_id         = $("#user_id").val();
            var verified_ad     = $("#verified_ad").val();
            var newutm_source   = $("#utm_source").val();

            var UID            = $("#UID").val();
            var tab                 = $("#tab").val();
            var ad_heading          = $("#ad_heading").val();
            var propty_district     = $("#propty_district").val();
            var propty_region   = $("#propty_region").val();
            var price_for_fbq   = $("#price_for_fbq").val();
            var price_land_pp   = $("#price_land_pp").val();
            var size_land       = $("#size_land").val();
            var land_units      = $("#land_units").val();
            var price_type      = $("#price_type").val();
            var priority_name   = $("#priority_name").val();
            var feat_dev_cont_name   = $("#feat_dev_cont_name").val();
            var camp_type            = $("#camp_type").val();
            var price_land_pa        = $("#price_land_pa").val();

        var phoneno = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{3,6}$/im;
        var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        var pattern = /^[a-zA-Z ]+$/;


        if (nameForm === '') {
            swal("Please enter Name", "", "error");
            //alert('Please enter full name')
            return false;
        }
        if (emailNumberForm === '') {
            swal("Please enter email address", "", "error");
            //alert('Please enter full name')
            return false;
        }
        // if (!pattern.test(emailNumberForm)) {
        //     swal("Please enter valid email address", "", "error");
        //     return false;
        // }
        if (phoneNumberForm === '') {
            //alert('Please enter contact number')
            swal("Please enter contact number", "", "error");
            return false;
        }

        var phoneno = /^(?=.*[0-9])[- +()0-9]+$/;
        if (!phoneno.test(phoneNumberForm)) {
            swal("Please enter valid contact number", "", "error");
            return false;
        } else {
            document.getElementById("btnShowPhoneDetailModal").disabled = true;
            $.ajax({
                url: '../forms/contact-normal-ad.php',
                type: 'POST',
                data: {
                    "ad_id": project_id,
                    "contact_no": phoneNumberForm,
                    "name_form": nameForm,
                    "lead_type": 'number review',
                    "form_typo": 'details_pop',
                    "popup_selector": showpop,
                    "ad_heading": ad_heading,
                    "email_form": emailNumberForm,
                    "makeSession": 'true'

                },
            }).done(function (response) {
                gtag('event', 'click', {
                    'event_category': 'Leads Tel',
                    'event_label': '/leads/tel/' + tab + '/' + propty_type + '/' + city + '/price-' + Ga_Price + image_360 + video_360 + '/' + priority_name + '/utm_campaign-' + newutm_campaign + '/utm_medium-' + newutm_medium + '/utm_content-' + newutm_content + '/utm_source-' + newutm_source + '/UID-' + user_id + '/ADID-' + ad_id + '/' + verified_ad,
                    'non_interaction': true
                });


                fbq('track', 'Lead', {
                    listing_type: tab,
                    property_type: propty_type,
                    name: ad_heading,
                    ad_id: ad_id,
                    user_id: UID,
                    city: city,
                    district: propty_district,
                    region: propty_region,
                    price: price_for_fbq,
                    price_per_perch: price_land_pp,
                    price_per_acre: price_land_pa,
                    content_type: size_land,
                    land_size_type: land_units,
                    preferred_price_range: price_type,
                    priority: priority_name,
                    action_type: 'submit',
                    action_name: 'show_tel_popup',
                    development: feat_dev_cont_name,
                    campaign_type: camp_type
                });
                $('#shareDetailModal').modal('hide');
                if (isMobileView) {
                    if (isWhatsApp) {
                        showWhatsAppModal();
                    } else {
                        showPhoneNoModal();
                    }
                } else {
                    $('#phoneInfo').removeClass('hide');
                    $('#viewAgent').removeClass('d-md-inline-flex');
                    $('#viewAgent').addClass('d-none');
                }

                return false;
            });
        }
    }
    });

   //cal back function
    $("#send_tel_num").click(function (e) {

        var from_tel    = $("#requestCallPhone").val();

        //hidden values
        var ad_id       = $("#ad_id").val();
        var lead_type   = $("#lead_type").val();
        var ref         = $("#ref").val();
        var callback    = $("#callback").val();

        var from_email     = $("#inqEmail").val();
        var from_name = $("#inqName").val();
        var fb_mesg     = $("#Message").val();
        var pattern     = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;

        //hidden values
        var ad_id       = $("#ad_id").val();
        // alert(ad_id);
        var lead_type   = $("#lead_type").val();

        var ref         = $("#ref").val();
        var popup_selector  = $("#popup_selector").val();
        var from_tel_original = $("#from_tel_original").val();
        var pageid      = $("#pageid").val();

        // if($pageid == "idealhome"){ $nameFrom = "IdealHome";  }else{  $nameFrom = "LankaPropertyWeb"; }

        var utm_medium      = $("#utm_medium").val();
        var utm_content     = $("#utm_content").val();
        var utm_campaign    = $("#utm_campaign").val();
        var utm_source      = $("#utm_source").val();

        var propty_type     = $("#propty_type").val();
        var tab             = $("#tab").val();
        var city            = $("#city").val();
        var Ga_Price        = $("#Ga_Price").val();
        var image_360       = $("#image_360").val();
        var video_360       = $("#video_360").val();
        var priority_name   = $("#priority_name").val();
        var newutm_campaign = $("#newutm_campaign").val();
        var newutm_medium   = $("#utm_medium").val();
        var newutm_content  = $("#utm_content").val();
        var user_id         = $("#user_id").val();
        var verified_ad     = $("#verified_ad").val();
        var newutm_source   = $("#utm_source").val();

        var UID            = $("#UID").val();
        var tab                 = $("#tab").val();
        var ad_heading          = $("#ad_heading").val();
        var propty_district     = $("#propty_district").val();
        var propty_region   = $("#propty_region").val();
        var price_for_fbq   = $("#price_for_fbq").val();
        var price_land_pp   = $("#price_land_pp").val();
        var size_land       = $("#size_land").val();
        var land_units      = $("#land_units").val();
        var price_type      = $("#price_type").val();
        var priority_name   = $("#priority_name").val();
        var feat_dev_cont_name   = $("#feat_dev_cont_name").val();
        var camp_type            = $("#camp_type").val();
        var price_land_pa        = $("#price_land_pa").val();

        if (from_tel === '') {
            //alert('Please enter contact number')
            swal("Please enter contact number", "", "error");
            return false;
        }
        var phoneno = /^(?=.*[0-9])[- +()0-9]+$/;
        if (!phoneno.test(from_tel)) {
            swal("Please enter valid contact number", "", "error");
            return false;
        } else {
            document.getElementById("send_tel_num").disabled = true;
            $.ajax({
                url: '/forms/contact-advertiser.php',
                type: 'POST',
                data: {
                    "ad_id"      : ad_id,
                    "ref"        : ref,
                    "from_tel_original" : from_tel,
                    "from_tel"   : from_tel,
                    "callback"   : callback
                },
            }).done(function (response) {

                gtag('event', 'submit', {
                    'event_category': 'call back',
                    'event_label': '/leads/call back/' + tab + '/' + propty_type + '/' + city + '/price-' + Ga_Price + image_360 + video_360 + '/' + priority_name + '/utm_campaign-' + newutm_campaign + '/utm_medium-' + newutm_medium + '/utm_content-' + newutm_content + '/utm_source-' + newutm_source + '/UID-' + user_id + '/ADID-' + ad_id + '/' + verified_ad,
                    'non_interaction': true
                });
                fbq('track', 'Lead', {
                    listing_type: tab,
                    property_type: propty_type,
                    name: ad_heading,
                    ad_id: ad_id,
                    user_id: UID,
                    city: city,
                    district: propty_district,
                    region: propty_region,
                    price: price_for_fbq,
                    price_per_perch: price_land_pp,
                    price_per_acre: price_land_pa,
                    content_type: size_land,
                    land_size_type: land_units,
                    preferred_price_range: price_type,
                    priority: priority_name,
                    action_type: 'submit',
                    action_name: 'request_call_back',
                    development: feat_dev_cont_name,
                    campaign_type: camp_type
                });

                swal("Success!", "* Your message has been sent to the advertiser. The advertiser should get back to you soon. For a quicker response you can call the advertiser on the phone number shown above (if available)");
                return  false;
            });
        }

    });

    // email to friend option
    $("#email_to_friend_dp").click(function (e) {
        e.preventDefault();
        $("#email_to_friend_dp").attr("disabled", true);
        var to_name = $("#fr_name").val();
        var email_to = $("#fr_email").val();
        var from_name = $("#you_name").val();
        var you_mail = $("#you_mail").val();
        var fb_mesg = $("#fr_Message").val();
        var prop_id       = $("#ad_id").val();
        var pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;

        // Validation
        if (!to_name) {
            swal("Please enter your friend's name", "", "error");
            $("#email_to_friend_dp").prop("disabled", false);
            return false;
        }
        if (!email_to || !pattern.test(email_to)) {
            swal("Please enter a valid friend's email address", "", "error");
            $("#email_to_friend_dp").prop("disabled", false);
            return false;
        }
        if (!from_name) {
            swal("Please enter your name", "", "error");
            $("#email_to_friend_dp").prop("disabled", false);
            return false;
        }
        if (!you_mail || !pattern.test(you_mail)) {
            swal("Please enter a valid email address", "", "error");
            $("#email_to_friend_dp").prop("disabled", false);
            return false;
        }

        // AJAX request
        $.ajax({
            url: '../forms/email-property_new.php',
            type: 'POST',
            data: {
                to_name: to_name,
                email_to: email_to,
                from_name: from_name,
                email_from: you_mail,
                fb_mesg: fb_mesg,
                prop_id:prop_id
            },
            beforeSend: function() {
                $("#email_to_friend_dp").attr("disabled", true);
            },
            success: function(response) {
                swal("Success!", "Your message has been sent.", "success");
                $("#fr_name").val('');
                $("#fr_email").val('');
                $("#you_name").val('');
                $("#fr_message").val('');
                $("#you_mail").val('');
                $("#ad_id").val('');
                FriendModal.hide();
            },
            error: function() {
                swal("Error!", "There was a problem sending the email.", "error");
            },
            complete: function() {
                $("#email_to_friend_dp").attr("disabled", false);
            }
        });
    });

    // end email to friend option

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



    $('.floorViewOption').change(function () {

        var name = $(this).attr('name');
        var value = $('input[name=' + name + ']:checked').val();

        //console.log(value);

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
        //console.log("index=>", index);

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

    const filterSimilar = (filterPrice)=>{
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
            similarSwiper.slideTo(0);


        });
        $('.view-all-similar').addClass('d-none');
        $('.view-all-similar[data-all="'+ filterPrice+'"]').removeClass('d-none');

    }

    const initPrice =  $('#Developer .filter-buttons button:first')?.data('simmler-filter');
    if(initPrice){
        filterSimilar(initPrice);
    }

    $('.similar-filter-btn').on("click", function () {
        const filterPrice = $(this).data("simmler-filter");
        filterSimilar(filterPrice);

        $('#Developer .filter-buttons button').removeClass('btn-custom-primary');
        $('#Developer .filter-buttons button').addClass('btn-outline-primary');
        $(this).addClass('btn-custom-primary');
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

        var bannerSwiper = new Swiper(".banner-swiper", {
        rewind: true,
        // loop: false,
        navigation: {
            nextEl: ".banner-next",
            prevEl: ".banner-prev",
        },
        slidesPerView: 1,
        spaceBetween: 0,
    });

    myVideoPlayer = videojs.getPlayer('myVideo');

    const ytVideo = $('#youtubeVideo');
    
    if(ytVideo.length){
        bannerSwiper.on("slideChange", () => {
            ytVideo[0].src = ytVideo[0].src;
            myVideoPlayer.pause();
        });
    }

    document.addEventListener('DOMContentLoaded', function () {
        var bannerModal = document.querySelector('#bannerModal');
        // Your code that uses bannerModal goes here
            //
        bannerModal.addEventListener('show.bs.modal', function (event) {
            //console.log(event.relatedTarget);
            const element = event.relatedTarget;

            var index = $(element).data("index") || 0;

            //console.log("index modal ==>", index);

            bannerSwiper.slideTo(index);

        });

        bannerModal.addEventListener('hide.bs.modal', () => {
            if (ytVideo.length) {
                ytVideo[0].src = ytVideo[0].src;
                myVideoPlayer.pause();
            }
        });
    });

    // var input = document.querySelector("#detailContactPhoneNo");
    // window.intlTelInput(input, {
    //     initialCountry: "lk",
    //     allowDropdown: true,
    // });

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
        var adId = $(this).data('ad-id');
        $.ajax({
            type: "POST",
            url: "/includes/files/more-details/log_contacts.php",
            data: {
                "ad_id": adId
            }
        });
    });

    $('#viewAgentDirect').on('click', function () {
        if (isMobileView) {
          if (isWhatsApp) {
            showWhatsAppModal();
          } else {
            showPhoneNoModal();
          }
        } else {
          $("#phoneInfo").removeClass("hide");
          $("#viewAgent").removeClass("d-md-inline-flex");
          $("#viewAgent").addClass("d-none");
          $("#viewAgentDirect").removeClass("d-md-inline-flex");
          $("#viewAgentDirect").addClass("d-none");
          $("#contactCard").removeClass("d-none");
        }
        var adId = $(this).data('ad-id');
        $.ajax({
            type: "POST",
            url: "/includes/files/more-details/log_contacts.php",
            data: {
                "ad_id": adId
            }
        });
    });

    //show phones after popup submited

    // $('#btnShowPhoneDetailModal').on("click", function () {
    //
    //     if (shareDetailForm.valid()) {
    //
    //         if (isMobileView) {
    //             if(isWhatsApp){
    //                 showWhatsAppModal();
    //
    //             } else {
    //                 showPhoneNoModal();
    //             }
    //
    //         } else {
    //             $('#phoneInfo').removeClass('hide');
    //             $('#viewAgent').removeClass('d-md-inline-flex');
    //             $('#viewAgent').addClass('d-none');
    //         }
    //     }
    //
    // });

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
    
    $('#agentNumDirect').on('click', function () {
        // Extracting the ad_id from the HTML attribute
        var adId = $(this).data('ad-id');

        // Adding ad_id to the AJAX data
        $.ajax({
            type: "POST",
            url: "/includes/files/more-details/log_contacts.php",
            data: {
                "ad_id": adId
            },
        }).done(function (data) {
            // Your existing code here

            // Code to be added inside the click event handler
            setTimeout(() => {
                $('#phoneInfo').removeClass('hide');
                $('#viewAgent').removeClass('d-md-inline-block');
                $('#viewAgent').addClass('d-none');
                $('#viewAgentDirect').removeClass('d-md-inline-flex');
                $('#viewAgentDirect').addClass('d-none');
                //showShareDetail();
            }, 1000);
        });
    });
    
    $('#agentNum').on('click', function () {
        setTimeout(() => {
            //$('#phoneInfo').removeClass('hide');
            //$('#viewAgent').removeClass('d-md-inline-block');
            //$('#viewAgent').addClass('d-none');
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

    function ajax_post(url, data) {
        return $.ajax({
            'dataType': 'json',
            'type': 'post',
            'url': url,
            'data': data,
            beforeSend: function () {
            }
        });
    }

    $('#saveBtn').on('click', function () {

        $(this).toggleClass('saved');
        const text = $(this).children('span').text();
        const appendText = text.toLowerCase() == 'save' ? 'Saved' : 'Save';

        var currentCount = parseInt($('.favourite-count').text());
        if (!isNaN(currentCount)) {
            var newCount = currentCount - 1;
            $('.favourite-count').text(newCount.toString());
        }

        // const appendText_remove = text.toLowerCase() == 'saved' ? '' : '';
        // $('.favourite-count').text(appendText_remove);
        $(this).children('span').html(appendText);
        var page_type = '';
       // start
        var firstTime = localStorage.getItem("savefirst_time");
        var adIds = [];
        var sess_fav = [];
        adIds = sess_fav;
        var elem = $(this).data('advertid');
        adIds.push(elem);
        var serializedIds = $.param(adIds);
        var last_element = adIds[adIds.length - 1];
        if (adIds.length <= 1 && !$(this).is(':checked')) {
            gtag('event', 'click', {'event_category': 'Saved ads detail page', 'event_label': 'View Fav', 'event_value': 1, 'non_interaction': true});

            // Assuming modal is already defined
            $.get('../../forms/fav-message.php', function (data) {
                modal.open({content: data});
            });
        }
        localStorage.setItem("savefirst_time", "1");
        // Remove duplicates from adIds
        var dups = [];
        var arr = adIds.filter(function (el) {
            // If it is not a duplicate, return true
            if (dups.indexOf(el.ID) == -1) {
                dups.push(el.ID);
                return true;
            }
            return false;
        });

        var data = {adIds: adIds};
        var url = '/includes/files/make_advert_favourit.php';
        var post = ajax_post(url, data);

        if (page_type === 'idealhome') {
            post.done(function (response) {
                if (response.status == 1) {
                    // $('.favourit-count').html(response.message);
                }
            });
        } else {
            post.done(function (response) {
            // console.log(response);
                if (response.status == 1) {
                    // var successMessage = 'Your success message here';
                    // var imagePath = '../forms/fav-message.php';
                    let isCloseShowed = localStorage.getItem("closeModalShowed");
                    //console.log("isCloseShowed==>", isCloseShowed);

                    if (!isCloseShowed) {
                        saveModal.show();
                        localStorage.setItem("closeModalShowed", true);
                    }

                    if (response.status == 1) {
                        $('.favourite-count').text(response.message);
                    } else {
                        //console.error("Error or different status received: ", response);
                    }

                    // $('.favourit-count').html(successMessage);
                    // Display the image
                    // $('#successImage').attr('src', imagePath);
                    // Swal.fire({
                    //     title: successMessage,
                    //     icon: 'success',
                    //     showConfirmButton: false,
                    //     timer: 1500 // Adjust the duration as needed
                    // });

                    // Display the image
                    // $('#successImage').attr('src', imagePath);


                    // alert(response.message);
                    // $('.favourit-count').html(response.message);
                }
            });

            // post.success(function (response) {
            //     if (response.status == 1) {
            //         alert("ready");
            //         $('.favourit-count').html(response.message);
            //     }
            // });
        }
        // end

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
            //console.log("refElement==>",refElement);
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
                    //console.log(refElement, scrollPos, elementPosition, elementHeight);

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
            //console.log("new");
            $("#downPaymentSlider").slider('value', newDownPercentage);
            $("#downPayPer").text(newDownPercentage);

        } else {
            //console.log("new old");
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
        //console.log('cccc');
        setTimeout(() => DetailsPhoneNoModal.show(), 0);
    }

    const showWhatsAppModal = () => {
        setTimeout(() => WhatsAppModal.show(), 0);
    }

    let isWhatsApp = false;

    $('.openPopUP').on("click", function () {
        // alert(1);
        isWhatsApp = false;
        showShareDetail();
        // showPhoneNoModal();
    });
    
    $('.openPopUPDirect').on("click", function () {
        // alert(1);
        var adId = $(this).data('ad-id');
        isWhatsApp = false;
        showPhoneNoModal();
        // showPhoneNoModal();

        // Make an AJAX request
        $.ajax({
            type: "POST",
            url: "/includes/files/more-details/log_contacts.php",
            data: {
                "ad_id": adId
            }
        });
    });


    $('.bottomFloat .openPopWhatsApp').on("click", function () {
        var adId = $(this).data('ad-id');
        isWhatsApp = true;
        showShareDetail();
        // showWhatsAppModal();
        $.ajax({
            type: "POST",
            url: "/includes/files/more-details/log_whatsapp_contacts.php",
            data: {
                "ad_id": adId
            }
        });
    });
    
    $('.bottomFloat .openPopWhatsAppDirect').on("click", function () {
        var adId = $(this).data('ad-id');
        isWhatsApp = true;
        //showShareDetail();
        // showWhatsAppModal();
        showWhatsAppModal();
        // Make an AJAX request
        $.ajax({
            type: "POST",
            url: "/includes/files/more-details/log_whatsapp_contacts.php",
            data: {
                "ad_id": adId
            }
        });
    });

    let myIntervel;

    const isWAPShowed = localStorage.getItem("WAPShowed");
    //console.log("isWAPShowed==>", isWAPShowed);

    setTimeout(() => {
        if (!isWAPShowed) {
            showWhatsApp('#whatsAppPopup');          
        }else{
            $('#whatsAppChat').removeClass('d-none');
        }

    }, 25000); //if u want to show early change this
    
    setTimeout(() => {
        if (isWAPShowed) {
            $('#whatsAppChat').removeClass('d-none');
        }

    }, 0);

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
    //console.log("levelLength", levelLength);

    if (levelLength > 2) {
        $('#nav_breadcrumb li').each((index, item) => {

            //console.log("index=========>", index);

            if (index > 0 && index < levelLength - 1) {
                //console.log("item==>", item);

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


    $('.currencyPicker').selectpicker();

    //bannerImg3

    /*if ($('.banner-img-count-4').length) {
        const img3 = $('#bannerImg3').attr('src');
        $('#bannerImg5').attr('src', img3);
    }*/

   //mobile version

    const mobilelevelLength = $('#nav_breadcrumb_mobile').children().length;
    //console.log("mobilelevelLength==>", mobilelevelLength);

    if (mobilelevelLength > 2) {
        $('#nav_breadcrumb_mobile li').each((index, item) => {

            if (index > 0 && index < mobilelevelLength - 1) {
                //console.log("item==>", item);

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
    
    //const saveModal = new bootstrap.Modal('#saveModal');
    var saveModal = new bootstrap.Modal(document.getElementById('saveModal'));
    $('#closeSaveModal').on("click",()=>{
        saveModal.hide();
    });

    $('#whatsAppChat').on("click",()=>{
        showWhatsApp('#whatsAppPopup');
    });

    let frm_mailToFriend = $('#frm_mailToFriend');
    frm_mailToFriend.validate({
        rules:{
            fr_name: {
                required: true,
            },
            fr_email: {
                required: true,
                email: true
            },
            you_name: {
                required: true,
            },
            you_mail: {
                required: true,
                email: true
            },
            fr_message: {
                required: true,
            },
        }
    });

    //const FriendModal = new bootstrap.Modal('#EmailToFriendModal');
    //const FriendModal = document.getElementById('EmailToFriendModal');
    var FriendModal = new bootstrap.Modal(document.getElementById('EmailToFriendModal'));
    var shareMobileModal = new bootstrap.Modal(document.getElementById('shareMobileModal'),);

    $('#CustomID').on("click",function (){
        FriendModal.show();

    });
    $('#shareToMailBtn').on("click",function (){
        shareMobileModal.hide();
        FriendModal.show();
    });

    $('#closeEmailFriend').on("click",function (){
        FriendModal.hide();
    });
    
    $('.star span').addClass('d-none');

    $('.star').on("click", function () {
        $(this).children('span').removeClass('d-none');
    });

    $(document).on("scroll", function () {
        const element = $('#Enquiry');
        const isVisible = isScrolledIntoView(element);
        const scrollWapVisible = localStorage.getItem("scrollWapShowed");
        if (isVisible && !scrollWapVisible) {
            showWhatsApp('#whatsAppPopup');
            localStorage.setItem('scrollWapShowed', true);
        }
    });
    
});

function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop() + 100;
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

function handleWhatsAppClick(element) {
    // WhatsApp action
    // You can keep the existing gtag and FBQwhatsapp code here

    // Retrieve adId from the data attribute
    var adId = $(element).data("ad-id");
    // AJAX request
    $.ajax({
        type: "POST",
        url: "/includes/files/more-details/log_whatsapp_contacts.php",
        data: {
            "ad_id": adId
        },
        success: function (response) {
            // Handle the success of the AJAX request here
            //console.log(response); // You can log the response or perform other actions
        },
        error: function (xhr, status, error) {
            // Handle errors here
            //console.error(error);
        }
    });
}

function handleTelClick(element) {
    // WhatsApp action
    // You can keep the existing gtag and FBQwhatsapp code here

    // Retrieve adId from the data attribute
    var adId = $(element).data("ad-id");
    // AJAX request
    $.ajax({
        type: "POST",
        url: "/includes/files/more-details/log_contacts.php",
        data: {
            "ad_id": adId
        },
        success: function (response) {
            // Handle the success of the AJAX request here
            //console.log(response); // You can log the response or perform other actions
        },
        error: function (xhr, status, error) {
            // Handle errors here
            //console.error(error);
        }
    });
}

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
        $('#whatsAppChat').removeClass('d-none');
    }, 3000)
}

const setTime = () => {
    //console.log("time called ==>")
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes();

    $("#wap-time").html(time);
}


