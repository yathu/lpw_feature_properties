<div class="container">
<div class="back-nav-container back_mobile_v d-flex d-md-none align-items-center">
        <div>
            <ol id="nav_breadcrumb_mobile" class="breadcrumb mb-0">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li id="show_breadcrumb_mobile" class="breadcrumb-item d-none"><a role="button" class="">...</a></li>
                <?php
            if ($property_type == 'Commercial' && $comm_type != '') {
                $propty_type_display = $comm_type;
            } else if ($property_type == 'Commercial') {
                $propty_type_display = 'Commercial building';
            } else {
                $propty_type_display = $property_type;
            }
            echo ' <li class="breadcrumb-item active" aria-current="page"><a href="/' . $url_folder . '/index.php" title="Property for ' . $sellingType . ' in Sri Lanka">' . $capitalizedString = ucfirst($tab). '</a></li>';

            if(!empty($city)) {
                if ($propty_district == 'Overseas') {
                    echo '<li class="breadcrumb-item active" aria-current="page"><a href="' . str_replace(' ', '-', strtolower($propty_district)) . '/" title="Property for ' . $sellingType . ' in ' . $propty_district . ' district"> . $propty_district . </a></li>';
                } else {
                    echo '<li class="breadcrumb-item active" aria-current="page"><a href="' . str_replace(' ', '-', strtolower($propty_district)) . '/" title="Property for ' . $sellingType . ' in ' . $propty_district . ' district">' . $propty_district . ' ' . 'District</a></li>';
                }

                echo '  <li class="breadcrumb-item active" aria-current="page"><a href="' . $url_start . '-' . urlencode($propty_region) . "_" . urlencode($city) . '-all.html" title="Property for ' . $sellingType . ' in ' . $city . '">' . $city . '</a></li>';

                if ($property_type == 'Commercial' || !empty($comm_type)) {
                    if (empty($comm_type)) {

                        echo '<li class="breadcrumb-item active" aria-current="page"><a href="/' . $url_folder . '/' . str_replace(' ', '-', strtolower($propty_district)) . '/' . str_replace(' ', '-', strtolower($propty_main_city)) . '/' . str_replace(' ', '-', strtolower($city)) . '/commercial/" title="' . $propty_type_display . '"s for ' . $sellingType . ' in ' . $city . '">' . $propty_type_display . '</a></li>';

                    } else {
                        echo '<li class="breadcrumb-item active" aria-current="page"><a href="/' . $url_folder . '/' . str_replace(' ', '-', strtolower($propty_district)) . '/' . str_replace(' ', '-', strtolower($propty_main_city)) . '/' . str_replace(' ', '-', strtolower($city)) . '/commercial/' . str_replace(' ', '-', strtolower($row['comm_type'])) . '/" title="' . $propty_type_display . 's for ' . $sellingType . ' in ' . $city . '">' . $propty_type_display . '</a></li>';

                    }

                } else {

                    echo '<li class="breadcrumb-item active" aria-current="page" ><a href="' . $url_start . '-' . urlencode($propty_region) . "_" . urlencode($city) . "-" . urlencode($property_type) . '.html" title="' . $propty_type_display . 's for ' . $sellingType . ' in ' . $city . '">' . $propty_type_display . '</a></li>';
                }


            }
            ?>
            </ol>
        </div>

    </div>
    <div class="row title-container flex-column flex-sm-row mt-2 mt-md-3 mt-lg-4">
        <div class="col pt-2">
            <h1> <?php echo $hedding; ?> </h1>
            <div class="location title-light-1">
                <i class="fa-solid fa-location-dot"></i>
                <?php echo $street; ?>
            </div>
                <div class="d-flex icon-features">

                    <?php if ($bedrooms_count > 0 && $property_type != 'Commercial') { ?>
                        <div>
                            <img src="../includes/img/details/details/bed.svg" alt="">
                            <span><? echo $bedrooms_count;?></span>
                        </div>
                    <?php } if ($bathroom_count > 0 && $property_type != 'Commercial') { ?>
                        <div>
                            <img src="../includes/img/details/details/bathroom(1)%20copy.svg" alt="">
                            <span><? echo $bathroom_count ;?></span>
                        </div>

                    <?php } if (!empty($size_house)) { ?>
                        <div>
                            <img src="../includes/img/details/details/scale.svg" alt="">
                            <span><? echo $floor_area.' sq.ft.';?></span>
                        </div>
                    <?php } if (sizeof($size_land) > 0 && $type == 'lands') { ?>
                        <div>
                            <img src="../includes/img/details/details/scale.svg" alt="">
                            <span><? echo $size_land.' '.$land_units;?></span>
                        </div>
                    <?php } ?>
                </div>
            <div class="title-content-2 price-container d-flex flex-wrap flex-column flex-sm-row align-items-sm-center">
                <?php if ($price_val > 0) { echo $price;?>
                      <?php if ($price_type != 'Total') {?><span class="price mb-lg-0 me-3"><?=$price_type?></span><?php }?>
                <?php }?>
                <?php if ($price_val > 0) { ?>

                    <div class="d-flex align-items-center justify-content-start flex-wrap pt-2 pt-sm-0">

                        <span class="price lh-lg">USD 2,000</span>

                        <span class="pt-lg-0 sqft mx-2">
                            per month (or nearest offer)
                        </span>

                        <div class="bootstrap-picker-container">
                            <select class="selectpicker currencyPicker">
                                <option selected><?=$alt_currency_v1?></option>
                                <?php foreach ($price_in_other_currencies as $k => $val) { ?>
                                <option disabled data-content="<img src='/includes/img/details/details/flags/<?=$k?>.png'/><span><?php echo $k . str_repeat(" ", 3) . $val; ?></span>">
                                    <?php echo $k . str_repeat(" ", 3) . $val; ?>
                                </option>
                                <?php } ?>
                            </select>
                        </div>
                    </div>

                <?php } ?>

                <?php
//                echo $constructed_status;
                if (!empty($constructed_status)) {
                    ?>
                    <!--                        echo 111;-->
                    <div class="ms-lg-3 move-in px-4 py-2"> <?php echo $constructed_status; ?></div>
                <?php } ?>
            </div>
        </div>
    </div>

</div>

<div class="container menuContainer py-4 sticky-top">

    <div class="container px-0">
        <div class="swiper detailsMenuSwiper">
            <div class="swiper-wrapper">


                <a href="#Overview" class="swiper-slide pe-2">
                    Overview
                </a>


                <a href="#Property_Details" class="swiper-slide px-2">
                    Property Details
                </a>

                <?php if (!empty($features)) { ?>
                    <a href="#Property_Features" class="swiper-slide px-2">
                        Property Features
                    </a>
                <?php } ?>
                <?php if (!empty($youtube_link) || !empty($video_link)) { ?>
                    <a href="#Video" class="swiper-slide px-2">
                        Video
                    </a>
                <?php } ?>
                <?php if (!empty($image_link)) { ?>
                    <a href="#walkthrough" class="swiper-slide px-2">
                        360/Walk Through
                    </a>
                <?php } ?>

                <a href="#Nearby" class="swiper-slide px-2">
                    Neighbourhood
                </a>
                <?php if ($loan_cal_status == 'Y') { ?>
                    <a href="#home_loan" class="swiper-slide px-2">
                        Home Loan Calculator
                    </a>
                <?php } ?>
                <a href="#Enquiry" class="swiper-slide px-2">
                    Contact Advertiser
                </a>


                <!--                <a href="#Developer" class="swiper-slide px-2">-->
                <!--                    Similar Properties-->
                <!--                </a>-->

               
                <a href="#nextStep" class="swiper-slide px-2">
                    Next Steps for Buyers
                </a>
             
                <!--
                <a href="#insight" class="swiper-slide px-2">
                    Insights & Tools
                </a>
                -->

                <a href="#featured" class="swiper-slide px-2">
                    Featured Projects
                </a>


            </div>
        </div>
    </div>

</div>

<div class="container pb-5">

    <div class="row">
        <div class="col-12 col-lg-8 col-xl-8 px-0">

            <div id="Overview" class="overview mb-3 bg-white">
                <h2 class="title-content-1">
                    Overview
                </h2>

                <div class="overview-item-container">
                    <!--                    $features-->
                    <?php
                    foreach ($properties as $property) {
                        if($property['name'] == 'Property Type' && $property['value'] == 'Commercial' && !empty($comm_type)){
                            $display_prop_value = $comm_type;
                        }else{
                            $display_prop_value = $property['value'];
                        }

//                        if($property['name'] == 'Advance payment' && $display_prop_value == 'None'){
//
//                        }else{
                            echo '<div class="col-6 col-sm-6 col-md-4 col-lg-3 item-box">';
                            echo '<div class="overview-item">';
                            echo '<div class="label mb-2">' . $property['name'] . '</div>';
                            echo '<div class="value">' . $display_prop_value . '</div>';
                            echo '</div>';
                            echo '</div>';
//                        }

                    }
                    ?>
                </div>


            </div>

            <div id="Property_Details" class="about-container mb-3 bg-white">
                <h2 class="title-content-1 mb-3">
                    Property Details
                </h2>
                <div class="<?php if(strlen($description) > 400){?>hide-text<?php }?> position-relative">
                    <p>
                        <?php echo $description; ?>
                    </p>
                    <?php if(!empty($pics_link)){?>
                    <a href="<?=$pics_link?>" target="_blank" class="btn btn-sm btn-secondary">
                        Link to Extra Pics: <?=$pics_link?>
                    </a>
                    <?php }?>
                    <?php if(strlen($description) > 400){?>
                    <div class="position-absolute bottom-0 w-100 d-flex justify-content-center hide-btn-container pt-4 pb-2">
                        <button type="button" class="btn btn-light bg-transparent showAbout btn-outline-primary">
                            Show More <i class="fa fa-caret-down" aria-hidden="true"></i>
                        </button>
                    </div>
                    <?php }?>
                </div>
            </div>
            <?php if (!empty($features)) { ?>
                <div id="Property_Features" class="amenities-container mb-4">
                    <h2 class="title-content-1 mb-4">
                        Property Features
                    </h2>
                    <div class="items-container">
                        <?php foreach ($features as $feature) { ?>

                            <div class="item" >
                                <img src="/includes/img/details/details/features/<?=$feature['value']; ?>.svg" style="margin-top: 0px !important;">
                                <?php echo $feature['name']; ?>
                            </div>
                        <?php } ?>
                    </div>

                </div>
            <?php } ?>

