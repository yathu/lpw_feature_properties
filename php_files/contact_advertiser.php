<div class="agent text-center">
    <h2 class="title-content-1 mb-3">Contact Advertiser</h2>

    <div class="d-flex flex-column align-items-center agent-v2-container">
        <img class="img-fluid logo"
             src="<?php echo $contact_image; ?>"
             alt="">
        <!--                        <img class="img-fluid badge-img" src="https://b.kisscc0.com/20180705/yyq/kisscc0-web-button-computer-icons-gold-download-gold-button-009-5b3e66ae142d05.0361269015308161740827.png"-->
        <!--                             alt="badge">-->
        <?php if (!empty($agent_membership)) { ?>
        <a href="#" class="btn btn-sm gold-badge-btn" style="<?=$agent_membership_gradient?>"><img src="/includes/img/details/details/btnIcons/correct.svg" alt=""><span><?php echo $agent_membership; ?> Agent</span>
        </a>
        <?php } ?>
        <?php if($user_category == 'Ultimate' || $user_category == 'Econ' || $user_category == 'Pro' || $user_category == 'Plus' || $user_category == 'Premium'){ ?>
        <?php if(!empty($agent_heading)){ ?>
               <p class="mt-3"> <?php echo $agent_heading; ?> <span class="agent-type-label">(Agent)</span></p>
        <a href="<?=$agent_ad_link?>" class="btn btn-outline-primary py-1 view-Agent">View agent's properties</a>
        <?php }else{ ?>
        <p class="mt-3"> <?php echo $advertiser_conatct_name; ?> <span class="agent-type-label">(Agent)</span></p>
        <?php } ?>
        <?php }else{ ?>
        <p class="mt-3"><?php echo $advertiser_conatct_name; ?></p>
        <?php } ?>
    </div>
    <hr class="my-3">

    <h2 class="title-content-2 text-start mb-3">
        Check Availability
    </h2>
    <?php
    if ($should_show_popup == 'N') {
        $btnIdAgent = "agentNumDirect";
        $gtagEvent = "gtag('event', 'click', {'event_category': 'Leads Tel', 'event_label': '/leads/tel/$tab/$property_type/$city/price-$Ga_Price$image_360$video_360/$priority_name/utm_campaign-$newutm_campaign/utm_medium-$newutm_medium/utm_content-$newutm_content/utm_source-$newutm_source/UID-$user_id/ADID-$ad_id/$verified_ad', 'non_interaction': true});fbq('track', 'Lead', {listing_type: '$tab',property_type:'$propty_type',name:'$ad_heading',ad_id:'$adID',user_id:'$UID',city:'$city',district:'$propty_district',region: '$propty_region',price: '$price_for_fbq',price_per_perch:'$price_land_pp',price_per_acre: '$price_land_pa',content_type: '$size_land',land_size_type: '$land_units',preferred_price_range: '$price_type',priority:'$priority_name',action_type: 'Click', action_name: 'show-tel',city: '$city',development: '$feat_dev_cont_name',campaign_type: '$camp_type'});";
    } else {
        $btnIdAgent = "agentNum";
        $gtagEvent  = "gtag('event', 'click', {'event_category': 'Leads Form Show Tel', 'event_label': '/show_tel/$tab/$property_type/$city/price-$Ga_Price$image_360$video_360/$priority_name/utm_campaign-$newutm_campaign/utm_medium-$newutm_medium/utm_content-$newutm_content/utm_source-$newutm_source/UID-$user_id/ADID-$ad_id/$verified_ad', 'non_interaction': true});fbq('track', 'Lead', {listing_type: '$tab',property_type:'$propty_type',name:'$ad_heading',ad_id:'$adID',user_id:'$UID',city:'$city',district:'$propty_district',region: '$propty_region',price: '$price_for_fbq',price_per_perch:'$price_land_pp',price_per_acre: '$price_land_pa',content_type: '$size_land',land_size_type: '$land_units',preferred_price_range: '$price_type',priority:'$priority_name',action_type: 'Click', action_name: 'number-review-pop',city: '$city',development: '$feat_dev_cont_name',campaign_type: '$camp_type'});";
    }
    $FBQwhatsapp = "fbq('track', 'Lead', {listing_type: '$tab',property_type:'$propty_type',name:'$ad_heading',ad_id:'$adID',user_id:'$UID',city:'$city',district:'$propty_district',region: '$propty_region',price: '$price_for_fbq',price_per_perch:'$price_land_pp',price_per_acre: '$price_land_pa',content_type: '$size_land',land_size_type: '$land_units',preferred_price_range: '$price_type',priority:'$priority_name',action_type: 'Click', action_name: 'WhatsApp',city: '$city',development: '$feat_dev_cont_name',campaign_type: '$camp_type'});handleWhatsAppClick(this);";
    ?>
    <div class="agent-buttons">
        <a id="<?= $btnIdAgent ?>" href="#Enquiry" onClick="<?= $gtagEvent ?>"
           class="btn btn-danger mb-3 d-flex align-items-center justify-content-center w-100" data-ad-id="<?php echo $ad_id; ?>">
            <i class="fa fa-phone me-2"></i>
            <span><?php echo $contact_tel_short ?></span>
            <i class="fa fa-eye ms-2" style="" aria-hidden="true"></i>
        </a>

        <!--        <a href="#Enquiry"-->
        <!--           class="btn btn-outline-primary mb-3 d-flex align-items-center justify-content-center w-100">-->
        <!--            <i class="fa fa-whatsapp me-2"></i>-->
        <!--            <span>WHATSAPP </span>-->
        <!--        </a>-->
        
        
        <div class="row">
            <?php $size_button = '12'; if (!empty($whats_app_no)) { $size_button = '6 ps-1';?>
            <div class="col-6">
                <?php echo '<a href="https://wa.me/'.$whats_app_no.'?text=Hi, I found your listing on LankaPropertyWeb ' . $page_url_share . ' I would like to get more details regarding the Ad ' . urlencode($ad_heading) . '" 
                                     class="btn btn-custom-primary d-flex align-items-center justify-content-center w-100 lh-1" onClick="gtag(\'event\', \'click\', { \'event_category\': \'Leads  WhatsApp\', \'event_label\': \'/whatsapp/' . $tab . '/' . $property_type . '/' . $city . '/price-' . $Ga_Price . $image_360 . $video_360 . '/' . $priority_name . '/UID-' . $user_id . '/utm_campaign-' . $newutm_campaign . '/utm_medium-' . $newutm_medium . '/utm_content-' . $newutm_content . '/utm_source-' . $newutm_source . '/ADID-' . $user_id . '/' . $verified_ad . '\', \'non_interaction\': true });'.$FBQwhatsapp.'" data-ad-id='.$adID.' >
                                <i class="fa-brands fa-whatsapp me-1"></i>
                                <span>WHATSAPP </span>
                                </a>'; ?>
            </div>
            <?php }?>

            <div class="col-<?=$size_button?>">
                       <?php echo '<a href="#Enquiry"
           class="btn btn-outline-primary d-flex align-items-center justify-content-center w-100"
           
           onClick="gtag(\'event\', \'click\', { \'event_category\': \'Show Leads Form\', \'event_label\': \'show_email/' . $tab . '/' . $property_type . '/' . $city . '/price-' . $Ga_Price . $image_360 . $video_360 . '/' . $priority_name . '/UID-' . $user_id . '/utm_campaign-' . $newutm_campaign . '/utm_medium-' . $newutm_medium . '/utm_content-' . $newutm_content . '/utm_source-' . $newutm_source . '/ADID-' . $user_id . '/' . $verified_ad . '\', \'non_interaction\': true });"
        >' ?>
                    
                    <i class="fa fa-envelope-o me-1"></i>
                    <span>EMAIL </span>
                </a>
            </div>
        </div>
        
 </div>
</div>
