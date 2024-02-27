<?php
$page_url_share = 'https://' . $_SERVER["HTTP_HOST"] . strtok($_SERVER["REQUEST_URI"], '?');
//$actual_link = (isset($_SERVER['HTTPS']) && $_SERVER['HTTPS'] === 'on' ? "https" : "http") . "://$_SERVER[HTTP_HOST]$_SERVER[REQUEST_URI]";
//$url_components = parse_url($actual_link);
//parse_str($url_components['query'], $params);
//$newutm_source = $params['utm_source']; //strip_tags($newutm_source)
//$newutm_medium = $params['utm_medium']; //strip_tags($newutm_medium)
//$newutm_campaign = $params['utm_campaign']; //strip_tags($newutm_campaign)
//$newutm_content = $params['utm_content']; //strip_tags($newutm_content)
?>

<div id="Enquiry" class="enquire-container mb-4">
    <div class="d-flex justify-content-between align-items-center mb-3">
        <h2 class="title-content-1 mb-3">
            Contact Advertiser
        </h2>
    </div>
    <div class="row info mb-4">
        <div class="col-12 col-md-4 top-sec">
            <div class="img-box mb-3">
               <img class="img-fluid w-100 obj-fit-cover" style="max-height: 110px;" src="<?= $contact_image; ?>" alt="Agent Logo">
            </div>
            <?php if (!empty($agent_membership)) { ?>
            <a href="#" class="btn btn-sm gold-badge-btn" style="<?=$agent_membership_gradient?>"><img src="/includes/img/details/details/btnIcons/correct.svg" alt=""><span><?php echo $agent_membership; ?> Agent</span></a>
            <?php if(!empty($agent_heading)){ ?>
            <a href="<?=$agent_ad_link?>" class="btn btn-outline-primary py-1 view-Agent mt-2 d-md-none">View agent's properties</a>
            <?php } ?>
            <?php } ?>
            <?php if ($reg_ago > 0) { ?>
            <p class="mt-2">
                    This advisor has been advertising with us for <?php echo ' ' . $reg_ago; ?>
                </p>
            <?php } ?>
            <?php if ($verified_agent == 'Y') { ?>
                <svg width="110px" height="30px" viewBox="0 0 110 30" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <g id="Welcome" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="lpw-sale-properties-detailed-page-1.1(expanded)"
                           transform="translate(-303.000000, -5735.000000)">
                            <g id="Group-7" transform="translate(303.000000, 5735.000000)">
                                <g id="Group-4">
                                    <rect id="Rectangle" fill="#37B45A" x="0" y="0" width="110" height="30"
                                          rx="3"></rect>
                                    <text id="VERIFIED" font-family="Rubik-Medium, Rubik" font-size="14"
                                          font-weight="400" line-spacing="20" fill="#FFFFFF">
                                        <tspan x="35" y="20">VERIFIED</tspan>
                                    </text>
                                </g>
                                <image id="correct" x="8" y="5" width="20" height="20"
                                       xlink:href="data:image/png;base64,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"></image>
                            </g>
                        </g>
                    </g>
                </svg>
            <?php } ?>

        </div>
        <div class="col ps-md-3 mt-3 mt-md-0">
            <span class="d-block lh-1 mb-3">Contact</span>
            <div class="title lh-1 mb-3">
                    <?php if($user_category == 'Ultimate' || $user_category == 'Econ' || $user_category == 'Pro' || $user_category == 'Plus' || $user_category == 'Premium'){ ?>
                    <?php if(!empty($agent_heading)){ ?>
                    <?php echo $agent_heading; ?> <span class="agent-type-label">Agent</span>
                    <?php }else{ ?>
                    <?php echo $advertiser_conatct_name; ?> <span class="agent-type-label">Agent</span>
                    <?php } ?>
                    <?php }else{ ?>
                    <?php echo $advertiser_conatct_name; ?>
                    <?php } ?>
            </div>
          
            <div class="mb-4">
                <?php
                if ($should_show_popup == 'N') {
                    $btnId = "viewAgentDirect";
                    $btnIdMobile = "openPopUPDirect";
                    $gtagEvent = "gtag('event', 'click', {'event_category': 'Leads Tel', 'event_label': '/leads/tel/$tab/$property_type/$city/price-$Ga_Price$image_360$video_360/$priority_name/utm_campaign-$newutm_campaign/utm_medium-$newutm_medium/utm_content-$newutm_content/utm_source-$newutm_source/UID-$user_id/ADID-$ad_id/$verified_ad', 'non_interaction': true});fbq('track', 'Lead', {listing_type: '$tab',property_type:'$propty_type',name:'$ad_heading',ad_id:'$adID',user_id:'$UID',city:'$city',district:'$propty_district',region: '$propty_region',price: '$price_for_fbq',price_per_perch:'$price_land_pp',price_per_acre: '$price_land_pa',content_type: '$size_land',land_size_type: '$land_units',preferred_price_range: '$price_type',priority:'$priority_name',action_type: 'Click', action_name: 'show-tel',city: '$city',development: '$feat_dev_cont_name',campaign_type: '$camp_type'});fbq('track', 'Lead', {listing_type: '$tab',property_type:'$propty_type',name:'$ad_heading',ad_id:'$adID',user_id:'$UID',city:'$city',district:'$propty_district',region: '$propty_region',price: '$price_for_fbq',price_per_perch:'$price_land_pp',price_per_acre: '$price_land_pa',land_size: '$size_land',land_size_type: '$land_units',land_price_type: '$price_type',priority:'$priority_name',action_type: 'Click', action_name: 'show-tel',city: '$city',development: '$feat_dev_cont_name',campaign_type: '$camp_type'});";
                } else {
                    $btnIdMobile = "openPopUP";
                    $btnId = "viewAgent";
                    $gtagEvent = "gtag('event', 'click', {'event_category': 'Leads Form Show Tel', 'event_label': '/show_tel/$tab/$property_type/$city/price-$Ga_Price$image_360$video_360/$priority_name/utm_campaign-$newutm_campaign/utm_medium-$newutm_medium/utm_content-$newutm_content/utm_source-$newutm_source/UID-$user_id/ADID-$ad_id/$verified_ad', 'non_interaction': true});fbq('track', 'Lead', {listing_type: '$tab',property_type:'$propty_type',name:'$ad_heading',ad_id:'$adID',user_id:'$UID',city:'$city',district:'$propty_district',region: '$propty_region',price: '$price_for_fbq',price_per_perch:'$price_land_pp',price_per_acre: '$price_land_pa',content_type: '$size_land',land_size_type: '$land_units',preferred_price_range: '$price_type',priority:'$priority_name',action_type: 'Click', action_name: 'show-tel',city: '$city',development: '$feat_dev_cont_name',campaign_type: '$camp_type'});fbq('track', 'Lead', {listing_type: '$tab',property_type:'$propty_type',name:'$ad_heading',ad_id:'$adID',user_id:'$UID',city:'$city',district:'$propty_district',region: '$propty_region',price: '$price_for_fbq',price_per_perch:'$price_land_pp',price_per_acre: '$price_land_pa',content_type: '$size_land',land_size_type: '$land_units',preferred_price_range: '$price_type',priority:'$priority_name',action_type: 'Click', action_name: 'show-tel-popup',city: '$city',development: '$feat_dev_cont_name',campaign_type: '$camp_type'});";
                }
                ?>

                <a id="<?= $btnId ?>" onClick="<?= $gtagEvent ?>"
                   class="btn btn-outline-secondary view-btn pt-2 d-none d-md-inline-flex align-items-center"
                   data-ad-id="<?php echo $ad_id; ?>>
                   <i class=" Phone is-animating me-1"></i>
                <?php echo $contact_tel_short; ?>
                <span>
                        Click to view Number
                    </span>
                </a>
                <a class="btn btn-outline-secondary view-btn pt-2 d-flex align-items-center d-md-none <?= $btnIdMobile ?>">
                    <i class="Phone is-animating me-1"></i>
                    <?php echo $contact_tel_short ?>
                    <span>
                        Click to view Number
                    </span>
                </a>
            </div>


            <div id="phoneInfo" class="hide">
                <?php foreach ($advert_contact as $cont => $val) { ?>
                    <div class="row phone-info align-items-center">
                        <div class="col-auto contact">
                            <?php echo $val['contact_name'] . ' ' . ':' . ' ' . $val['contact_no'] ?>
                        </div>
                        <div class="col-auto d-flex">
                            <?php if ($val['contact_whats_app'] > 0) { ?>  <a
                                    href="https://wa.me/<?= $whats_app_no ?>?text=Hi, I found your listing on LankaPropertyWeb <?= $page_url_share ?> I would like to get more details regarding the Ad <?= urlencode($ad_heading) ?>"
                                    onClick="gtag('event', 'click', {'event_category': 'Leads Form Show WhatsApp', 'event_label': '/leads/tel/<?= $tab . '/' . $property_type . '/' . $city . '/price-' . $Ga_Price . $image_360 . $video_360 . '/' . $priority_name . '/utm_campaign-' . $newutm_campaign . '/utm_medium-' . $newutm_medium . '/utm_content-' . $newutm_content . '/utm_source-' . $newutm_source . '/UID-' . $user_id . '/ADID-' . $ad_id . '/' . $verified_ad ?>', 'non_interaction': true});<?= $FBQwhatsapp ?>"
                                    data-ad-id='<?= $adID ?>'>
                                    <img src="/includes/img/details/share_icons/003-whatsapp.png" alt="" class="">
                                </a><?php } ?>
                            <?php if ($val['contact_viber'] > 0) { ?>
                            <a href="viber://forward?text=<?php echo(urlencode($hedding) . ' - ' . urlencode($page_url)); ?><?= $utm_viber ?>">
                                <img src="/includes/img/details/share_icons/001-viber.png" alt="" class="ms-3"><? } ?>
                            </a>
                            <?php if ($val['contact_imo'] > 0) { ?>
                            <a href="https://telegram.me/share/url?url=<?php echo urlencode($page_url); ?><?= $utm_telegram ?>"
                               onclick="gtag('event', 'click', {'event_category': 'share results detail page', 'event_label': 'Telegram', 'non_interaction': true});">
                                <img src="/includes/img/details/share_icons/005-telegram.png" class="ms-3"
                                     alt=""><? } ?>
                            </a>

                        </div>
                    </div>
                <?php } ?>
            </div>


        </div>
    </div>

    <div id="contactCard" class="card mb-5 d-none mt-3  ">
        <div class="card-header">
            <h3 class="title-content-2 mb-0">
                Request a call back
            </h3>
        </div>
        <div class="card-body">
            <form>
                <p class="mb-3">
                    Please enter your phone number to request the advertiser to call you back
                </p>
                <div class="row gx-3 mx-0">
                    <div class="col ps-0">
                        <input type="text" class="form-control form-control-sm ps-5 position-relative"
                               id="requestCallPhone"
                               placeholder="071234567" required>
                        <input id="ad_id" id="ad_id" type="hidden" value="<?php echo $ad_id; ?>">
                        <input id="ref" type="hidden" value="<?php echo $ref; ?>">
                        <input id="callback" type="hidden" value="1">
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
                    <div class="col-auto">
                        <button id="send_tel_num" type="submit" class="btn btn-custom-primary">Send</button>
                    </div>
                </div>
            </form>
        </div>
    </div>

    <form class="row g-3 mb-4" id="enqForm" action="#">
        <div class="col-md-6">
            <input type="text" placeholder="Your Name *" class="form-control" id="inqName" name="inqName">

            <input type="email" placeholder="Email Address *" class="form-control mt-3" id="inqEmail"
                   name="inqEmail">

            <div class="mt-3">
                <input type="text" placeholder="Contact Number" class="form-control ps-5" id="inqContact"
                       name="inqContact">
            </div>


        </div>
        <div class="col-md-6">
            <!--                        <select id="inq" class="form-select mb-3">-->
            <!--                            <option disabled selected>Select Unit Type</option>-->
            <!--                            <option>...</option>-->
            <!--                        </select>-->

            <textarea placeholder="Message" class="form-control h-100" id="Message" rows="3"></textarea>
            <input id="ad_id" type="hidden" value="<? echo $ad_id; ?>">
            <!--          $ref  value is undifined -->
            <input id="ref" type="hidden" value="<? echo $ref; ?>">
            <input id="lead_type" type="hidden" value="contact_form"> <!-- Leads Type -->
            <input id="popup_selector" type="hidden" value="<? echo $popup_selector; ?>">
            <input id="from_tel_original" type="hidden" value="<? echo $telno; ?>">
            <input id="pageid" type="hidden" value="idealhomelkjh">
            <input id="utm_medium" type="hidden" value="<? echo $newutm_source; ?>">
            <input id="utm_content" type="hidden" value="<? echo $newutm_medium; ?>">
            <input id="utm_campaign" type="hidden" value="<? echo $newutm_campaign; ?>">
            <input id="utm_source" type="hidden" value="<? echo $newutm_content; ?>">
            <input id="newutm_source" type="hidden" value="<? echo $newutm_source; ?>">
            <input id="tab" type="hidden" value="<? echo $tab; ?>">
            <input id="propty_type" type="hidden" value="<? echo $propty_type; ?>">
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
        <div class="col-12">
            <button type="submit" id="expo_register" class="btn btn-custom-primary px-5">SEND</button>
        </div>
    </form>

    <p>
        <b>Important information :</b> This ad has been posted on LankaPropertyWeb.com by the above
        mentioned advertiser. LankaPropertyWeb.com does not have any connection with this advertiser, nor do
        we vet the advertisers, guarantee their services, responsible for the accuracy of the ad's content
        or are responsible for services provided by the advertisers. LankaPropertyWeb.com does not provide
        any service other than list the advertisements posted by advertisers. You will be contacting the
        advertiser (owner/agent) of this property directly. We advise you to take precaution when making any
        payments or signing any agreements and be alert of any possible scams. If making any payments we
        recommend that you have two permanent & verified methods of contact of the payment receiver such as
        their landline number and home/business address.
    </p>

    <div class="report-container d-flex justify-content-between align-items-center">
                                                                                                                                                                                                                <span>
                                                                                                                                                                                                                Posted/Edited: <?= $daysago ?>
                                                                                                                                                                                                        </span>
        <a class="btn btn-outline-danger" data-bs-toggle="modal" data-bs-target="#reportModal">

            <svg width="18px" height="20px" viewBox="0 0 18 20" version="1.1"
                 xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <g id="Welcome" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                    <g id="lpw-sale-properties-detailed-page-1.1(expanded)"
                       transform="translate(-1014.000000, -6276.000000)" fill="#F05059" fill-rule="nonzero">
                        <g id="report" transform="translate(1014.000000, 6276.000000)">
                            <path d="M9.07976563,1.24910156 C6.49699219,-0.226835937 3.78152344,-0.375820312 1.171875,0.801523437 L1.171875,0 L0,0 L0,20 L1.171875,20 L1.171875,12.6916016 C3.57714844,11.4308984 6.1034375,11.4839453 8.49835937,12.8524609 C9.93507812,13.6734766 11.4128516,14.0839453 12.890625,14.0839453 C15.5233203,14.0839453 17.3705078,12.7743359 17.578125,12.68375 L17.578125,0.748125 L16.7014844,1.2490625 C14.2083984,2.67367187 11.5728906,2.67367187 9.07976563,1.24910156 Z"
                                  id="Shape"></path>
                        </g>
                    </g>
                </g>
            </svg>
            REPORT THIS AD
        </a>
    </div>

</div>