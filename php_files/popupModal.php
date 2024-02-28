
<!--  mobile share  -->
<div class="modal fade" id="shareMobileModal" tabindex="-1" aria-labelledby="shareModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header align-items-center border-0 border-bottom">
                <h5 class="mb-0 lh-1">
                    Share this property
                </h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal"
                        aria-label="Close"></button>
            </div>
            <div class="modal-body pt-1 pb-0">
                <ul class="mb-0 p-0">
                    <li>
                        <a id="shareToMailBtn" class="d-flex align-items-center lh-1">
                            <i class="fa fa-envelope-o ms-1" aria-hidden="true"></i> Email to a friend
                        </a>

                    </li>
                    <li>
                        <a href="https://web.facebook.com/dialog/share?link=https%3A%2F%2Fwww.lankapropertyweb.com%2Ffeatured-projects%2Ftrillium-duplex-residencies&t&_rdc=1&_rdr">
                            <img src="/includes/img/details/share_icons/messenger.png" alt="social share">
                            Messenger
                        </a>
                    </li>
                    <li>
                        <a href="https://api.whatsapp.com/send?text=<?php echo(urlencode($hedding) . ' - ' . urlencode($page_url)); ?><?= $utm_whatsapp ?>"
                           onclick="gtag('event', 'click', {'event_category': 'share results detail page', 'event_label': 'WhatsApp', 'non_interaction': true});">
                            <img src="/includes/img/details/share_icons/003-whatsapp.png" alt="social share">
                            Whatsapp
                        </a>
                    </li>

                    <li>
                        <a href="viber://forward?text=<?php echo(urlencode($hedding) . ' - ' . urlencode($page_url)); ?><?= $utm_viber ?>"
                           onclick="gtag('event', 'click', {'event_category': 'share results detail page', 'event_label': 'Viber', 'non_interaction': true});">
                            <img src="/includes/img/details/share_icons/001-viber.png" alt="social share">
                            Viber
                        </a>
                    </li>

                    <li>
                        <a href="http://twitter.com/share?text=<?php echo $hedding; ?>&url=<?php echo urlencode($page_url); ?><?= $utm_twitter ?>"
                           onclick="gtag('event', 'click', {'event_category': 'share results detail page', 'event_label': 'Twitter', 'non_interaction': true});">
                            <img src="/includes/img/details/share_icons/twitter.png" alt="social share">
                            X
                        </a>
                    </li>

                    <li>
                        <a href="https://www.linkedin.com/shareArticle?mini=true&url=<?php echo urlencode($page_url); ?><?= $utm_linkedin ?>"
                           onclick="gtag('event', 'click', {'event_category': 'share results detail page', 'event_label': 'LinkedIn', 'non_interaction': true});">
                            <img src="/includes/img/details/share_icons/006-linkedin.png" alt="social share">
                            Linkedin
                        </a>
                    </li>

                    <li>
                        <a href="https://telegram.me/share/url?url=<?php echo urlencode($page_url); ?><?= $utm_telegram ?>"
                           onclick="gtag('event', 'click', {'event_category': 'share results detail page', 'event_label': 'Telegram', 'non_interaction': true});">
                            <img src="/includes/img/details/share_icons/005-telegram.png" alt="social share">
                            Telegram
                        </a>
                    </li>

                    <li>
                        <a class="d-flex align-items-center lh-1 copyUrl">
                            <i class="fa fa-clone" aria-hidden="true"></i>
                            <span>Copy url</span>
                        </a>
                    </li>

                    <li>
                        <a class="d-flex align-items-center lh-1 nativeShare">
                            <i class="fa fa-share-alt ms-1" aria-hidden="true"></i>
                            More Share Options
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
<!-- end mobile share  -->

<!--    automated popup-->
<div class="modal fade" id="detailsPopup" data-bs-backdrop="static" tabindex="-1"
     aria-labelledby="detailsPopupLabel"
     aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header border-0">
                <button type="button" id="callbackBtnClose" class="btn-close" data-bs-dismiss="modal"
                        aria-label="Close"></button>
            </div>
            <div class="modal-body p-0 pt-1">

                <div class="content pb-2">
                    <img class="rounded-circle mb-3" src="<?php echo $contact_image ?>" data-src="<?php echo $contact_image ?>" alt="company logo">
                    <?php if($user_category == 'Ultimate' || $user_category == 'Econ' || $user_category == 'Pro' || $user_category == 'Plus' || $user_category == 'Premium'){ ?>
                    <?php if(!empty($agent_heading)){ ?>
                    <?php }else{ ?>
                    <h2 id="propertyTitle"><?php echo $advertiser_conatct_name; ?> <span class="mb-3 d-inline-block agent-type">(Agent)</span></h2>
                    <?php } ?>
                    <?php }else{ ?>
                    <h2 id="propertyTitle"><?php echo $advertiser_conatct_name; ?></h2>
                    <?php } ?>
                </div>

                <div class="form-container">
                    <form id="details_popup_form" action = "#">

                        <div class="mb-3">
                            <input type="text" class="form-control" id="initName" name="initName"
                                   placeholder="Enter Full Name">
                        </div>

                        <div class="mb-3">
                            <input type="email" class="form-control" id="initEmail1" name="initEmail1"
                                   placeholder="E-mail Address">
                        </div>

                        <div class="col-12 mb-3">
                            <input type="text" class="form-control" id="initPhoneNo" name="initPhoneNo"
                                   placeholder="Phone Number"
                                   required>
                        </div>
                        <div class="mb-3">
                            <textarea rows="3" class="form-control" id = "messagesaut" id = "messagesaut"
                                      placeholder="Message"></textarea>
                            <input id="ad_idA" type="hidden" value="<? echo $ad_id; ?>">
                            <!--          $ref  value is undifined -->
                            <input id="refA" type="hidden" value="<? echo $ref; ?>">
                            <input id="lead_typeA" type="hidden" value="contact_form"> <!-- Leads Type -->
                            <input id="popup_selectorA" type="hidden" value="<? echo $popup_selector; ?>">
                            <input id="from_tel_originalA" type="hidden" value="<? echo $telno; ?>">
                            <input id="pageidA" type="hidden" value="idealhomelkjh">
                            <input id="utm_mediumA" type="hidden" value="<? echo $newutm_source; ?>">
                            <input id="utm_contentA" type="hidden" value="<? echo $newutm_medium; ?>">
                            <input id="utm_campaignA" type="hidden" value="<? echo $newutm_campaign; ?>">
                            <input id="utm_sourceA" type="hidden" value="<? echo $newutm_content; ?>">

                            <input id="utm_medium" type="hidden" value="<? echo $newutm_source; ?>">
                            <input id="utm_content" type="hidden" value="<? echo $newutm_medium; ?>">
                            <input id="utm_campaign" type="hidden" value="<? echo $newutm_campaign; ?>">
                            <input id="utm_source" type="hidden" value="<? echo $newutm_content; ?>">
                            <input id="newutm_source" type="hidden" value="<? echo $newutm_source; ?>">
                            <input id="tab" type="hidden" value="<? echo $tab; ?>">
                            <input id="propty_type" type="hidden" value="<? echo $property_type; ?>">
                            <input id="city" type="hidden" value="<? echo $city; ?>">
                            <input id="Ga_Price" type="hidden" value="<? echo $Ga_Price; ?>">
                            <input id="image_360" type="hidden" value="<? echo $image_360; ?>">
                            <input id="video_360" type="hidden" value="<? echo $video_360; ?>">
                            <input id="priority_name" type="hidden" value="<? echo $priority_name; ?>">
                            <input id="utm_source" type="hidden" value="<? echo $newutm_content; ?>">
                            <input id="user_id" type="hidden" value="<? echo $user_id; ?>">
                            <input id="priority_name" type="hidden" value="<? echo $priority_name; ?>">
                            <input id="verified_ad" type="hidden" value="<? echo $verified_ad; ?>">

                            <input id="newutm_medium" type="hidden" value="<? echo $newutm_source; ?>">
                            <input id="newutm_content" type="hidden" value="<? echo $newutm_medium; ?>">
                            <input id="newutm_campaign" type="hidden" value="<? echo $newutm_campaign; ?>">
                            <input id="newutm_source" type="hidden" value="<? echo $newutm_source; ?>">
                            <input id="UID" type="hidden" value="<? echo $user_id; ?>">
                            <input id="tab" type="hidden" value="<? echo $tab; ?>">
                            <input id="ad_heading" type="hidden" value="<? echo $ad_heading; ?>">
                            <input id="propty_district" type="hidden" value="<? echo $propty_district; ?>">
                            <input id="propty_region" type="hidden" value="<? echo $propty_region; ?>">
                            <input id="price_for_fbq" type="hidden" value="<? echo $price_for_fbq; ?>">
                            <input id="price_land_pp" type="hidden" value="<? echo $price_land_pp; ?>">
                            <input id="price_land_pa" type="hidden" value="<? echo price_land_pa; ?>">
                            <input id="size_land" type="hidden" value="<? echo $size_land; ?>">
                            <input id="land_units" type="hidden" value="<? echo $land_units; ?>">
                            <input id="price_type" type="hidden" value="<? echo $price_type; ?>">
                            <input id="priority_name" type="hidden" value="<? echo $priority_name; ?>">
                            <input id="feat_dev_cont_name" type="hidden" value="<? echo $feat_dev_cont_name; ?>">
                            <input id="camp_type" type="hidden" value="<? echo $camp_type; ?>">


                        </div>
                        <!--                        <div class="mb-3">-->
                        <!--                            <div class="form-check">-->
                        <!--                                <input class="form-check-input" type="checkbox" id="termsCheck" name="termsCheck"-->
                        <!--                                       required>-->
                        <!--                                <label class="form-check-label" for="termsCheck">-->
                        <!--                                    Yes, keep me posted on new launches, property digest and partner offers.-->
                        <!--                                </label>-->
                        <!--                            </div>-->
                        <!--                        </div>-->

                        <button type="submit"  id="detailsPopupBtn" class="btn btn-custom-primary w-100 py-2">
                            SUBMIT
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
<!--  end  automated popup-->

<div class="bottomFloat row gx-2">

    <?php if ($should_show_popup == 'N') {
        $btnIdPop = "openPopUPDirect";
    } else {
        $btnIdPop = "openPopUP";
    } ?>
    <div class="col">
        <a
            onClick ="gtag('event', 'click', {'event_category': 'Leads Form Show Tel', 'event_label': '/show_tel/<?= $tab . '/' . $property_type . '/' . $city . '/price-' . $Ga_Price . $image_360 . $video_360 . '/' . $priority_name . '/utm_campaign-' . $newutm_campaign . '/utm_medium-' . $newutm_medium . '/utm_content-' . $newutm_content . '/utm_source-' . $newutm_source . '/UID-' . $user_id . '/ADID-' . $ad_id . '/' . $verified_ad ?>', 'non_interaction': true});"
            class="btn btn-danger <?= $btnIdPop ?> call-btn pure-material-button-contained position-relative">
            <i class="fa fa-phone" aria-hidden="true"></i>
            CALL
        </a>
    </div>
<?php if (!empty($whats_app_no)) {
    if ($should_show_popup == 'N') {
        $btnIdW = "openPopWhatsAppDirect";

    } else {
        $btnIdW = "openPopWhatsApp";

    } ?>
        <div class="col">
            <a class="btn btn-custom-primary <?= $btnIdW ?>"
               onClick ="gtag('event', 'click', {'event_category': 'Leads Form Show WhatsApp', 'event_label': '/show_whatsapp/<?= $tab . '/' . $property_type . '/' . $city . '/price-' . $Ga_Price . $image_360 . $video_360 . '/' . $priority_name . '/utm_campaign-' . $newutm_campaign . '/utm_medium-' . $newutm_medium . '/utm_content-' . $newutm_content . '/utm_source-' . $newutm_source . '/UID-' . $user_id . '/ADID-' . $ad_id . '/' . $verified_ad ?>', 'non_interaction': true});<?= $FBQwhatsapp ?>"
               class="btn btn-danger <?= $btnIdPop ?> call-btn pure-material-button-contained position-relative" data-ad-id="<?php echo $ad_id; ?>">
                <i class="fa-brands fa-whatsapp"></i>
                CHAT
            </a>
        </div>
<?php } ?>
    <div class="col-auto">
        <a class="btn btn-secondary" href="#Enquiry"
           onClick ="gtag('event', 'click', {'event_category': 'Show Leads Form', 'event_label': '/show_email/<?= $tab . '/' . $property_type . '/' . $city . '/price-' . $Ga_Price . $image_360 . $video_360 . '/' . $priority_name . '/utm_campaign-' . $newutm_campaign . '/utm_medium-' . $newutm_medium . '/utm_content-' . $newutm_content . '/utm_source-' . $newutm_source . '/UID-' . $user_id . '/ADID-' . $ad_id . '/' . $verified_ad ?>', 'non_interaction': true});"
           class="btn btn-danger <?= $btnIdPop ?> call-btn pure-material-button-contained position-relative">
            <i class="fa fa-envelope-o me-0" aria-hidden="true"></i>
        </a>
    </div>
    <div class="col-auto">
        <a class="btn btn-secondary" href="#Enquiry" data-bs-toggle="modal" data-bs-target="#shareMobileModal">
            <!--            <i class="fa fa-share-alt me-0" aria-hidden="true"></i>-->
            <img src="/includes/img/details/share-alt-svgrepo-com.svg" alt="">
        </a>
    </div>
</div>

<?php include '../includes/files/more-details/report-ad-form.php'; ?>

<?php if ($is_whatsapp_chat == 'Y' && !empty($whats_app_no)) { ?>
    <div class="whatsAppPopup d-none" id="whatsAppPopup">
        <div class="overlay-wap"></div>
        <div class="wap-header d-flex align-items-center position-relative">
            <div class="position-relative d-inline-block col-auto">
                <img class="rounded-circle"
                     src="<?php echo $contact_image ?>"  data-src="<?php echo $contact_image ?>"
                     alt="">
                <span class="online"></span>
            </div>
            <div class="col ps-3 name-container">
                <div class="name"><?= $whatsapp_contact_name ?></div>
                <div class="desc"><?= $user_type ?></div>
            </div>

            <div class="wap-close">

            </div>

            <button type="button" id="closeWap" class="btn-close btn-close-white position-absolute"
                    aria-label="Close"></button>
        </div>
        <div class="wap-body d-flex flex-column align-items-start justify-content-end">
            <div id="typing"
                 class="typing-container d-inline-flex bg-white rounded-pill justify-content-center align-items-center">
                <div class="typing">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div id="wap_message" class="talk-bubble tri-right left-top d-none">
                <strong><?= $whatsapp_contact_name ?></strong>
                <p>
                    Hi there 👋,
                </p>
                <p class="mb-0">
                    If you need further details about this <?= $property_type ?> for <?= $sellingType ?> in <?= $city ?>, please feel free to message me. 
                </p>
                <span class="time d-block" id="wap-time">
                    15.45
                </span>
            </div>


            <a href="https://api.whatsapp.com/send?text=Hi there 👋, If you need further details about this <?= $property_type ?> for <?= $sellingType ?> in <?= $city ?>, please feel free to message me.&phone=<?=$whats_app_no?>" onClick ="gtag('event', 'click', {'event_category': 'Leads Whatsapp popup', 'event_label': '/leads/whatsapp_popup/<?= $tab . '/' . $property_type . '/' . $city . '/price-' . $Ga_Price . $image_360 . $video_360 . '/' . $priority_name . '/utm_campaign-' . $newutm_campaign . '/utm_medium-' . $newutm_medium . '/utm_content-' . $newutm_content . '/utm_source-' . $newutm_source . '/UID-' . $user_id . '/ADID-' . $ad_id . '/' . $verified_ad ?>', 'non_interaction': true});handleTelClick(this);" data-ad-id="<?php echo $ad_id; ?>" class="d-block w-100">
                <div class="d-flex inputBox mt-3 justify-content-between align-items-center input-group-btn w-100">
                    <div class="input-group-text col me-2 bg-white rounded-pill text-black-50">Type Here</div>
                    <button class="btn">
                        <img src="/includes/img/details/share_icons/send-msg-icon.png" alt="">
                    </button>
                </div>
            </a>

        </div>
        <!--    <div class="wap-footer bg-white">-->
        <!--        <a href="https://api.whatsapp.com/send?text=YourShareTextHere&phone=0777121232" class="btn d-block">-->
        <!--            <img src="assets/img/details/wap-line.svg" alt="">-->
        <!--            Start Chat-->
        <!--        </a>-->
        <!--    </div>-->
    </div>
<?php } ?>
<!-- Modal -->
<div class="modal fade" id="shareDetailModal" tabindex="-1" aria-labelledby="shareDetailModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header d-flex align-items-start border-0 pb-0">
                <div class="d-flex flex-column">
                    <h5 class="modal-title text-center" id="shareDetailModalLabel">
                        Please Enter Your Details

                        <!--                        Do you want us to share your contact details with other agents-->
                    </h5>
                    <p class="mt-1 mb-0">
                        To view the seller's number, please enter your name, email and contact number. This will help the seller follow up on your inquiry.

                    </p>
                </div>
                <button type="button" class="btn p-0" data-bs-dismiss="modal"
                        aria-label="Close">
                    <i class="fa fa-times" aria-hidden="true"></i>

                </button>
            </div>
            <div class="modal-body">
                <form id="shareDetailForm">
                    <div class="mb-3">
                        <input type="text" required class="form-control" placeholder="Your Name" name="shareName"
                               id="shareName">
                    </div>
                    <div class="mb-3">
                        <input type="email" class="form-control" placeholder="Your Email" name="shareEmail"
                               id="shareEmail">
                    </div>
                    <div class="mb-4">
                        <input type="text" class="form-control ps-5" id="sharePhone" name="sharePhone"
                               placeholder="Phone Number">
                        <input id="ad_idB" type="hidden" value="<? echo $ad_id; ?>">
                        <input id="showpop" type="hidden" value="<? echo $should_show_popup; ?>">
                        <input id="ad_headingB" type="hidden" value="<? echo $ad_heading; ?>">

                        <input id="utm_medium" type="hidden" value="<? echo $newutm_source; ?>">
                        <input id="utm_content" type="hidden" value="<? echo $newutm_medium; ?>">
                        <input id="utm_campaign" type="hidden" value="<? echo $newutm_campaign; ?>">
                        <input id="utm_source" type="hidden" value="<? echo $newutm_content; ?>">
                        <input id="newutm_source" type="hidden" value="<? echo $newutm_source; ?>">
                        <input id="tab" type="hidden" value="<? echo $tab; ?>">
                        <input id="propty_type" type="hidden" value="<? echo $property_type; ?>">
                        <input id="city" type="hidden" value="<? echo $city; ?>">
                        <input id="Ga_Price" type="hidden" value="<? echo $Ga_Price; ?>">
                        <input id="image_360" type="hidden" value="<? echo $image_360; ?>">
                        <input id="video_360" type="hidden" value="<? echo $video_360; ?>">
                        <input id="priority_name" type="hidden" value="<? echo $priority_name; ?>">
                        <input id="utm_source" type="hidden" value="<? echo $newutm_content; ?>">
                        <input id="user_id" type="hidden" value="<? echo $user_id; ?>">
                        <input id="priority_name" type="hidden" value="<? echo $priority_name; ?>">
                        <input id="verified_ad" type="hidden" value="<? echo $verified_ad; ?>">

                        <input id="newutm_medium" type="hidden" value="<? echo $newutm_source; ?>">
                        <input id="newutm_content" type="hidden" value="<? echo $newutm_medium; ?>">
                        <input id="newutm_campaign" type="hidden" value="<? echo $newutm_campaign; ?>">
                        <input id="newutm_source" type="hidden" value="<? echo $newutm_source; ?>">
                        <input id="UID" type="hidden" value="<? echo $user_id; ?>">
                        <input id="tab" type="hidden" value="<? echo $tab; ?>">
                        <input id="ad_heading" type="hidden" value="<? echo $ad_heading; ?>">
                        <input id="propty_district" type="hidden" value="<? echo $propty_district; ?>">
                        <input id="propty_region" type="hidden" value="<? echo $propty_region; ?>">
                        <input id="price_for_fbq" type="hidden" value="<? echo $price_for_fbq; ?>">
                        <input id="price_land_pp" type="hidden" value="<? echo $price_land_pp; ?>">
                        <input id="price_land_pa" type="hidden" value="<? echo price_land_pa; ?>">
                        <input id="size_land" type="hidden" value="<? echo $size_land; ?>">
                        <input id="land_units" type="hidden" value="<? echo $land_units; ?>">
                        <input id="price_type" type="hidden" value="<? echo $price_type; ?>">
                        <input id="priority_name" type="hidden" value="<? echo $priority_name; ?>">
                        <input id="feat_dev_cont_name" type="hidden" value="<? echo $feat_dev_cont_name; ?>">
                        <input id="camp_type" type="hidden" value="<? echo $camp_type; ?>">

                    </div>
                    <button id="btnShowPhoneDetailModal" type="button" class="btn btn-custom-primary w-100">Show Phone Number</button>
                </form>
            </div>
        </div>
    </div>
</div>

<div class="modal fade" id="DetailsPhoneNoModal" tabindex="-1" aria-labelledby="phoneNoModalLabel"
     aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header border-0">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body text-center">
                <div class="desktop-content">
                    <img class="rounded-circle logo-img" src="<?= $contact_image ?>"  data-src="<?php echo $contact_image ?>" alt="comapny">
                    <?php if($user_category == 'Ultimate' || $user_category == 'Econ' || $user_category == 'Pro' || $user_category == 'Plus' || $user_category == 'Premium'){ ?>
                    <?php if(!empty($agent_heading)){ ?>
                    <?php }else{ ?>
                    <h1 class="title-content-1"><?php echo $advertiser_conatct_name; ?> <span class="mb-3 d-inline-block agent-type">(Agent)</span></h1>
                    <?php } ?>
                    <?php }else{ ?>
                    <h1 class="title-content-1"><?php echo $advertiser_conatct_name; ?></h1>
                    <?php } ?>
<?php if ($verified_agent == 'Y') { ?>
                        <span>
                            <i class="fa fa-check-circle">
                            </i>
                            Verified Agent
                        </span>
                <?php } ?>
                <?php if (!empty($agent_membership)) { ?>
                <a href="#" class="btn btn-sm gold-badge-btn" style="<?=$agent_membership_gradient?>"><img src="/includes/img/details/details/btnIcons/correct.svg" alt=""><span><?php echo $agent_membership; ?> Agent</span></a>
                <?php } ?>
                </div>
<?php foreach ($advert_contact as $cont => $val) { ?>
                    <div class="mobile-content">
                        <a href="tel:+<?= $val['contact_no'] ?>" class="d-flex justify-content-between align-items-center num-item"
                           onClick ="gtag('event', 'click', {'event_category': 'Leads Tel', 'event_label': '/leads/tel/<?= $tab . '/' . $property_type . '/' . $city . '/price-' . $Ga_Price . $image_360 . $video_360 . '/' . $priority_name . '/utm_campaign-' . $newutm_campaign . '/utm_medium-' . $newutm_medium . '/utm_content-' . $newutm_content . '/utm_source-' . $newutm_source . '/UID-' . $user_id . '/ADID-' . $ad_id . '/' . $verified_ad ?>', 'non_interaction': true});handleTelClick(this);" data-ad-id="<?php echo $ad_id; ?>">
                            <div class="d-flex flex-column align-items-start title-sec">
                                <p class="title-content-2">
    <?= $val['contact_name']; ?>
    <?php if ($verified_agent == 'Y') { ?><i class="fa fa-check-circle" aria-hidden="true"></i><?php } ?>
                                </p>
                                <span><?= $val['contact_no'] ?></span>
                            </div>
                            <div class="phone-no-sec">
                                <div class="phone-no-box">
                                    <div class="iconBox">
                                        <i class="fa fa-phone" aria-hidden="true"></i>
                                        <span></span>
                                    </div>
                                    Call Now
                                </div>
                            </div>
                        </a>
                    </div>
<?php } ?>
            </div>
        </div>
    </div>
</div>

<div class="modal fade" id="DetailsWhatsAppModal" tabindex="-1" aria-labelledby="phoneNoModalLabel"
     aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header border-0">
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body text-center">
                <div class="desktop-content">
                    <img class="rounded-circle" src="<?= $contact_image ?>"  data-src="<?php echo $contact_image ?>" alt="comapny">
                    <?php if($user_category == 'Ultimate' || $user_category == 'Econ' || $user_category == 'Pro' || $user_category == 'Plus' || $user_category == 'Premium'){ ?>
                    <?php if(!empty($agent_heading)){ ?>
                    <?php }else{ ?>
                    <h1 class="title-content-1"><?php echo $advertiser_conatct_name; ?> <span class="mb-3 d-inline-block agent-type">(Agent)</span></h1>
                    <?php } ?>
                    <?php }else{ ?>
                    <h1 class="title-content-1"><?php echo $advertiser_conatct_name; ?></h1>
                    <?php } ?>
                    <?php if ($verified_agent == 'Y') { ?>
                        <span>
                            <i class="fa fa-check-circle"></i>
                            Verified Agent
                        </span>
                                <?php } ?>
                </div>

                <div class="mobile-content">
<?php foreach ($advert_contact as $cont => $val) { ?>
    <?php if ($val['contact_whats_app'] > 0) { ?> 
                            <div class="d-flex justify-content-between align-items-center num-item">
                                <div class="d-flex flex-column align-items-start title-sec">
                                    <p class="title-content-2">
        <?= $val['contact_name']; ?>
        <?php if ($verified_agent == 'Y') { ?><i class="fa fa-check-circle" aria-hidden="true"></i><?php } ?>
                                    </p>
                                    <span><?= $val['contact_no'] ?></span>
                                </div>
                                <div class="phone-no-sec">
                                    <?php
                                       $rw_wap_number = str_replace("-", "", $val['contact_no']);
                                       $rw_wap_number = '+' . $rw_wap_number;
                                    ?>
                                    <a href="https://api.whatsapp.com/send?text=Hi, I found your listing on LankaPropertyWeb <?= $page_url_share ?> I would like to get more details regarding the Ad <?= urlencode($ad_heading) ?>&phone=<?=$rw_wap_number?>"

                                       onClick ="gtag('event', 'click', {'event_category': 'Leads Whatsapp', 'event_label': '/leads/tel/<?= $tab . '/' . $property_type . '/' . $city . '/price-' . $Ga_Price . $image_360 . $video_360 . '/' . $priority_name . '/utm_campaign-' . $newutm_campaign . '/utm_medium-' . $newutm_medium . '/utm_content-' . $newutm_content . '/utm_source-' . $newutm_source . '/UID-' . $user_id . '/ADID-' . $ad_id . '/' . $verified_ad ?>', 'non_interaction': true});<?= $FBQwhatsapp ?>"
                                       class="phone-no-box" data-ad-id="<?php echo $ad_id; ?>">
                                        <div class="iconBox">
                                            <i class="fa-brands fa-whatsapp"></i>
                                            <span></span>
                                        </div>
                                        WhatsApp
                                    </a>
                                </div>
                            </div>
    <?php } ?>
<?php } ?>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="modal fade" id="saveModal" role="dialog" tabindex="-1" aria-labelledby="exampleModalLabel"
     aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header position-relative border-0">
                <h1 class="title-content-2 text-center mb-0 mt-3" id="exampleModalLabel">Find your favourite properties from the
                    top of the
                    page</h1>
                <div id="closeSaveModal" class="close-btn">

                    <svg width="33px" height="33px" viewBox="0 0 33 33" version="1.1" xmlns="http://www.w3.org/2000/svg"
                         xmlns:xlink="http://www.w3.org/1999/xlink">
                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <path d="M32.5875,27.0943259 L21.6541667,16.125039 L32.6125,5.29734513 C33.0625,4.84757939 33.0625,4.1146278 32.6125,3.66486205 L29.4958333,0.533159813 C29.2791667,0.316605934 28.9875,0.2 28.6791667,0.2 C28.3708333,0.2 28.0791667,0.32493493 27.8625,0.533159813 L16.9541667,11.3275377 L6.02916667,0.541488808 C5.8125,0.32493493 5.52083333,0.208328995 5.2125,0.208328995 C4.90416667,0.208328995 4.6125,0.333263925 4.39583333,0.541488808 L1.2875,3.67319105 C0.8375,4.12295679 0.8375,4.85590838 1.2875,5.30567413 L12.2458333,16.133368 L1.32083333,27.0943259 C1.10416667,27.3108798 0.979166667,27.6023946 0.979166667,27.9105674 C0.979166667,28.2187402 1.09583333,28.5102551 1.32083333,28.726809 L4.4375,31.8585112 C4.6625,32.0833941 4.95416667,32.2 5.25416667,32.2 C5.54583333,32.2 5.84583333,32.0917231 6.07083333,31.8585112 L16.9541667,20.9308693 L27.8458333,31.8501822 C28.0708333,32.0750651 28.3625,32.191671 28.6625,32.191671 C28.9541667,32.191671 29.2541667,32.0833941 29.4791667,31.8501822 L32.5958333,28.71848 C32.8125,28.5019261 32.9375,28.2104112 32.9375,27.9022384 C32.9291667,27.6023946 32.8041667,27.3108798 32.5875,27.0943259 Z"
                                  id="Path" fill="#FFFFFF" fill-rule="nonzero"></path>
                        </g>
                    </svg>

                </div>
            </div>
            <div class="modal-body pt-2">
                <img class="img-fluid rounded-3" src="/includes/img/details/details/saved.png" alt="">
                <p class="mt-3">Click on star icon to view your favourite ads</p>
            </div>
        </div>
    </div>
</div>

<!--email to friend-->
<div class="modal fade" id="EmailToFriendModal" role="dialog" tabindex="-1" aria-labelledby="exampleModalLabel"
     aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header position-relative border-0">
                <h1 class="title-light-1 text-center w-100 mb-0 mt-4">
                    LankaProperty web - Email property to a friend
                </h1>
                <div id="closeEmailFriend" class="close-btn">

                    <svg width="33px" height="33px" viewBox="0 0 33 33" version="1.1" xmlns="http://www.w3.org/2000/svg"
                         xmlns:xlink="http://www.w3.org/1999/xlink">
                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <path d="M32.5875,27.0943259 L21.6541667,16.125039 L32.6125,5.29734513 C33.0625,4.84757939 33.0625,4.1146278 32.6125,3.66486205 L29.4958333,0.533159813 C29.2791667,0.316605934 28.9875,0.2 28.6791667,0.2 C28.3708333,0.2 28.0791667,0.32493493 27.8625,0.533159813 L16.9541667,11.3275377 L6.02916667,0.541488808 C5.8125,0.32493493 5.52083333,0.208328995 5.2125,0.208328995 C4.90416667,0.208328995 4.6125,0.333263925 4.39583333,0.541488808 L1.2875,3.67319105 C0.8375,4.12295679 0.8375,4.85590838 1.2875,5.30567413 L12.2458333,16.133368 L1.32083333,27.0943259 C1.10416667,27.3108798 0.979166667,27.6023946 0.979166667,27.9105674 C0.979166667,28.2187402 1.09583333,28.5102551 1.32083333,28.726809 L4.4375,31.8585112 C4.6625,32.0833941 4.95416667,32.2 5.25416667,32.2 C5.54583333,32.2 5.84583333,32.0917231 6.07083333,31.8585112 L16.9541667,20.9308693 L27.8458333,31.8501822 C28.0708333,32.0750651 28.3625,32.191671 28.6625,32.191671 C28.9541667,32.191671 29.2541667,32.0833941 29.4791667,31.8501822 L32.5958333,28.71848 C32.8125,28.5019261 32.9375,28.2104112 32.9375,27.9022384 C32.9291667,27.6023946 32.8041667,27.3108798 32.5875,27.0943259 Z"
                                  id="Path" fill="#FFFFFF" fill-rule="nonzero"></path>
                        </g>
                    </svg>

                </div>
            </div>
            <div class="modal-body pt-2 px-4">
                <form id="frm_mailToFriend">
                    <div class="mb-3">
                        <input placeholder="Friend's name" type="text" class="form-control" id="fr_name" name="fr_name">
                    </div>
                    <div class="mb-3">
                        <input placeholder="Friend's email address" type="email" class="form-control" id="fr_email" name="fr_email">
                    </div>

                    <div class="mb-3 pt-3">
                        <input placeholder="Your name" type="text" class="form-control" id="you_name" name="you_name">
                    </div>

                    <div class="mb-3">
                        <input placeholder="Your Email" type="text" class="form-control" id="you_mail" name="you_mail">
                    </div>

                    <div class="mb-3">
                        <textarea placeholder="Message" class="form-control" id="fr_Message" name="fr_message" rows="2"></textarea>
                        <input id="postForm" type="hidden" value="1">
                        <input id="prop_id" type="hidden" value="<? echo $ad_id;?>">
                        <input id="ref" type="hidden"     value="<? echo $sref = '';?>">
                    </div>
                    <button type="submit" id = "email_to_friend_dp" class="btn btn-custom-primary px-4 mt-4">Send Email</button>
                </form>
            </div>
        </div>
    </div>
</div>

<!--email to friend-->

<?php if ($is_whatsapp_chat == 'Y' && !empty($whats_app_no)) { ?>
<!--whatsapp chat-->
<div id="whatsAppChat" class="whatsAppChatIcon">
    <img class="img-fluid lg-img d-none d-md-inline-block" src="/includes/img/details/details/chat-whatsapp-x3.png" alt="">
    <img class="img-fluid xs-img d-md-none" src="/includes/img/details/details/whatsapp.png" alt="">
</div>
<?php }?>
