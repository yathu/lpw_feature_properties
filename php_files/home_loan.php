<?php
if ($loan_cal_status == 'Y') {   $gtagEventLoan  = "gtag('event', 'click', {'event_category':'Home loan ad detail', 'event_label': '/home_loan/$tab/$property_type/$city/price-$Ga_Price$image_360$video_360/$priority_name/utm_campaign-$newutm_campaign/utm_medium-$newutm_medium/utm_content-$newutm_content/utm_source-$newutm_source/UID-$user_id/ADID-$ad_id/$verified_ad', 'non_interaction': true});fbq('track', 'Lead', {listing_type: '$tab',property_type:'$propty_type',name:'$ad_heading',ad_id:'$adID',user_id:'$UID',city:'$city',district:'$propty_district',region: '$propty_region',price: '$price_for_fbq',price_per_perch:'$price_land_pp',price_per_acre: '$price_land_pa',land_size: '$size_land',land_size_type: '$land_units',preferred_price_range: '$price_type',priority:'$priority_name',action_type: 'Click', action_name: 'number-review-pop',city: '$city',development: '$feat_dev_cont_name',campaign_type: '$camp_type'});";?>
<div id="home_loan" class="bank-loan-container mb-4">
                <h2 class="title-content-1 mb-3">
                    Find out how much you can save with our Home Loan Calculator
                </h2>
                <div class="row justify-content-between align-items-center">
                    <div class="col-12 col-sm-8 d-flex align-items-center mb-2 mb-sm-0">

                        <svg width="74px" height="80px" viewBox="0 0 74 80" version="1.1"
                             xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <g id="Welcome" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                <g id="lpw-sale-properties-detailed-page-1.1(expanded)"
                                   transform="translate(-293.000000, -4480.000000)">
                                    <image id="house" x="290" y="4480" width="80" height="80"
                                           xlink:href="data:image/png;base64,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"></image>
                                </g>
                            </g>
                        </svg>

                        <div class="col ms-3">
                            <div class="title-content-1-light"><?php echo $loan_prefex; ?></div>
                            <?php if ($loan_cal_section_hide == 'N') { ?>
                             <div class="title-2 price">
                                <?php echo $loan_amount; ?>
                            </div>
                            <div class="price-info">
                                ZXCXCX
                            </div>
                            <?php if (!empty($loan_amount)) { ?>
                            <span class="loan-term-text d-block mt-1" style="font-size: 12px;">*For a 20-year term with a 14% fixed interest rate, using the equated balance payment method.</span>
                            <?php }?>
                            <?php }?>
                        </div>

                    </div>
                    <div class="col-12 col-sm-4 pt-2 d-flex justify-content-end">
                    <?php if ($button_show == 'Y') { ?>
                        <a href="<?= $home_loan_cal_url ?>" onClick="<?= $gtagEventLoan ?>" class="btn btn-danger px-3 py-1 apply-btn d-inline-flex align-items-center">
                            <span class="pt-1 me-3">More Details</span>
                            <i class="fa fa-angle-right fa-2x" aria-hidden="true"></i>
                        </a>
                    <?php } else {?>
                        <a href="<?= $home_loan_cal_url ?>" onClick="<?= $gtagEventLoan ?>" target="_blank"
                           class="btn btn-danger px-3 py-1 apply-btn d-inline-flex align-items-center">
                            <span class="pt-1 me-3">More Details</span>
                        <i class="fa fa-angle-right fa-2x" aria-hidden="true"></i>
                        </a>
                    <?php  } ?>

                    </div>
                </div>

                <div class="title-light-1">
                    Partnered Banks
                </div>
                <div class="position-relative">
                    <div class="swiper loan-swiper">
                        <div class="swiper-wrapper">
                           <!-- 
                            <div class="swiper-slide">
                                <a href="https://www.lankapropertyweb.com/housing-loan-comparison/"
                                  onClick =" gtag('event', 'click', {'event_category': 'Home loan clicks', 'event_label': 'home loan clicks/offer type/property type/price/monthly amount', 'non_interaction': true})";

                                   onClick="gtag('event', 'click', {'event_category': 'Home loan clicks', 'event_label': 'home loan clicks/<?= $tab . '/'.$property_type.'/'.$property_type.'/'.$price_val.'/'.$loan_amount?>, 'non_interaction': true});" >
                                <img src="../includes/img/details/details/banks/hsbc.svg" alt="bank">
                                </a>
                            </div>
                            <div class="swiper-slide">
                                <a href="https://www.lankapropertyweb.com/housing-loan-comparison/"
                                   onClick="gtag('event', 'click', {'event_category': 'Home loan clicks', 'event_label': 'home loan clicks/<?= $tab . '/'.$property_type.'/'.$property_type.'/'.$price_val.'/'.$loan_amount?>, 'non_interaction': true});"
                                >
                                <img src="../includes/img/details/details/banks/boc.svg" alt="bank">

                                </a>
                            </div>
                            <div class="swiper-slide">
                                <a href="https://www.lankapropertyweb.com/housing-loan-comparison/"
                                   onClick="gtag('event', 'click', {'event_category': 'Home loan clicks', 'event_label': 'home loan clicks/<?= $tab . '/'.$property_type.'/'.$property_type.'/'.$price_val.'/'.$loan_amount?>, 'non_interaction': true});"
                                >
                                <img src="../includes/img/details/details/banks/SAMPATH-BANK.svg" alt="bank">
                                </a>
                            </div>
                           -->
<!--                            <div class="swiper-slide">-->
<!--                                <a href="https://www.lankapropertyweb.com/housing-loan-comparison/"-->
<!--                                   onClick="gtag('event', 'click', {'event_category': 'Home loan clicks', 'event_label': 'home loan clicks/--><?php //= $tab . '/'.$property_type.'/'.$property_type.'/'.$price_val.'/'.$loan_amount?><!--, 'non_interaction': true});"-->
<!--                                >-->
<!--                                <img src="../includes/img/details/details/banks/commbank.svg" alt="bank">-->
<!--                                </a>-->
<!--                            </div>-->
                            <div class="swiper-slide">
                                <a href="https://www.lankapropertyweb.com/housing-loan-comparison/"
                                   onClick="gtag('event', 'click', {'event_category': 'Home loan clicks', 'event_label': 'home loan clicks/<?= $tab . '/'.$property_type.'/'.$property_type.'/'.$price_val.'/'.$loan_amount?>, 'non_interaction': true});"
                                >
                                <img src="../includes/img/details/details/banks/hnb.svg"  alt="bank">
                                </a>
                            </div>
                        </div>
                    </div>

                    <div class="swiper-button-prev loan-prev swiper-button custom-swiper-nav"></div>
                    <div class="swiper-button-next loan-next swiper-button custom-swiper-nav"></div>

                </div>
            </div>
<?php } ?>