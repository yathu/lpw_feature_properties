<!--no logic need from backend-->
<script>
    document.addEventListener('DOMContentLoaded', (event) => {
        const noRightClickImages = document.querySelectorAll('.no-right-click');
        noRightClickImages.forEach(img => {
            img.addEventListener('contextmenu', e => {
                e.preventDefault();
            });
        });
    });
</script>

<!--no logic need from backend-->
<div class="banner-img-container px-0 px-md-3 banner-img-count-<?=$pic_count?>">
        <div class="position-relative main-img">
            <!--           image 1-->
            <img class="banner-img" src="<?=$propertyDetails['pics'][0]?>" data-index="0"
                 alt="banner" data-bs-toggle="modal" data-bs-target="#bannerModal">

            <div class="position-absolute verified-container">
                <?php if ($verified_agent == 'Y'){?>
                <a href="#" class="btn btn-custom-primary">
                    <img src="/includes/img/details/details/btnIcons/correct.svg" alt="">
                    <span>VERIFIED</span>
                </a>
                <?php }?>
            </div>

            <div class="overlay-single py-3 px-2">
                <div class="d-flex btns d-flex justify-content-center" data-bs-toggle="modal"
                     data-bs-target="#bannerModal">
                    <?php if($pic_count >1 ){ ?>
                    <div>
                        <img src="/includes/img/details/details/btnIcons/video-camera.svg" alt="">
                        <span class="">
                                    <?=$pic_count?>
                                </span>
                    </div>
                    <?php }?>
                    <?php if(!empty($image_link)){ $image_360 = '/360_image';?>
                    <div class="ms-4">
                        <img src="/includes/img/details/details/btnIcons/rotation.svg" alt="">
                        <span>
                                    3D
                                </span>
                    </div>
                    <?php }?>
                    <?php if(isset($video_link) && !empty($video_link) && strpos($video_link, 'amazonaws') === false || isset($youtube_link) && !empty($youtube_link)){?>
                    <div class="ms-4">
                        <img class="ms-2" src="/includes/img/details/details/btnIcons/video-camera.svg" alt="">
                        <span class="">
                                    1
                                </span>
                    </div>
                    <?php }?>
                </div>
            </div>
        </div>

        <div class="main-img-1">
            <img class="banner-img" src="<?=$propertyDetails['pics'][1]?>" alt="banner"
                 data-index="1" data-bs-toggle="modal" data-bs-target="#bannerModal">
        </div>

        <div class="">
            <img class="banner-img" src="<?=$propertyDetails['pics'][2]?>"
                 alt="banner"
                 data-index="2" data-bs-toggle="modal" data-bs-target="#bannerModal">
        </div>

        <div class="img-4-container">
            <img class="banner-img" src="<?=$propertyDetails['pics'][3]?>"
                 data-index="3"
                 alt="banner" data-bs-toggle="modal" data-bs-target="#bannerModal">
        </div>

        <div class="images">
            <img class="banner-img" src="<?=$propertyDetails['pics'][4]?>" alt="banner">
            <?php if($pic_count > $defile_pic_count ){ ?>
            <div class="overlay" data-index="4" data-bs-toggle="modal" data-bs-target="#bannerModal">
                        <span>
                            + <br>
                            <?=$pic_count-$defile_pic_count?> more
                        </span>
            </div>
            <?php }?>
            <div class="d-flex btns d-flex justify-content-center" data-bs-toggle="modal"
                 data-bs-target="#bannerModal">
                <?php if($pic_count >1 ){ ?>
                <div>
                    <img src="/includes/img/details/details/btnIcons/camera.svg" alt="">
                    <span class="">
                                     <?=$pic_count?>
                                </span>
                </div>
                <?php }?>
                <?php if(!empty($image_link)){ $image_360 = '/360_image';?>
                <div class="ms-2 ms-md-4">
                    <img src="/includes/img/details/details/btnIcons/rotation.svg" alt="">
                    <span>
                                    3D
                                </span>
                </div>
                <?php }?>
                <?php if(isset($video_link) && !empty($video_link) && strpos($video_link, 'amazonaws') === false || isset($youtube_link) && !empty($youtube_link)){?>
                <div class="ms-2 ms-md-4">
                    <img class="" src="/includes/img/details/details/btnIcons/video-camera.svg" alt="">
                    <span class="">
                                    1
                                </span>
                </div>
                <?php }?>
            </div>
        </div>
</div>


<div class="modal fade" id="bannerModal" tabindex="-1" aria-labelledby="bannerModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg modal-dialog-centered mx-0 mx-sm-auto">
        <div class="modal-content">
            <div class="modal-body p-0">

               <div class="close-btn close" data-bs-dismiss="modal">
                    <svg width="33px" height="33px" viewBox="0 0 33 33" version="1.1" xmlns="http://www.w3.org/2000/svg"
                         xmlns:xlink="http://www.w3.org/1999/xlink">
                        <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <path d="M32.5875,27.0943259 L21.6541667,16.125039 L32.6125,5.29734513 C33.0625,4.84757939 33.0625,4.1146278 32.6125,3.66486205 L29.4958333,0.533159813 C29.2791667,0.316605934 28.9875,0.2 28.6791667,0.2 C28.3708333,0.2 28.0791667,0.32493493 27.8625,0.533159813 L16.9541667,11.3275377 L6.02916667,0.541488808 C5.8125,0.32493493 5.52083333,0.208328995 5.2125,0.208328995 C4.90416667,0.208328995 4.6125,0.333263925 4.39583333,0.541488808 L1.2875,3.67319105 C0.8375,4.12295679 0.8375,4.85590838 1.2875,5.30567413 L12.2458333,16.133368 L1.32083333,27.0943259 C1.10416667,27.3108798 0.979166667,27.6023946 0.979166667,27.9105674 C0.979166667,28.2187402 1.09583333,28.5102551 1.32083333,28.726809 L4.4375,31.8585112 C4.6625,32.0833941 4.95416667,32.2 5.25416667,32.2 C5.54583333,32.2 5.84583333,32.0917231 6.07083333,31.8585112 L16.9541667,20.9308693 L27.8458333,31.8501822 C28.0708333,32.0750651 28.3625,32.191671 28.6625,32.191671 C28.9541667,32.191671 29.2541667,32.0833941 29.4791667,31.8501822 L32.5958333,28.71848 C32.8125,28.5019261 32.9375,28.2104112 32.9375,27.9022384 C32.9291667,27.6023946 32.8041667,27.3108798 32.5875,27.0943259 Z"
                                  id="Path" fill="#FFFFFF" fill-rule="nonzero"></path>
                        </g>
                    </svg>
                </div>

                <div class="row gx-0">
                    <div class="col-12">
                        <div class="position-relative h-100">
                            <div class="swiper banner-swiper h-100">
                                <div class="swiper-wrapper align-items-center">
                                    <?php foreach ($propertyDetails['pics'] as $index => $pic_url) { ?>
                                    <div class="swiper-slide">
                                        <img class="img-fluid w-100 no-right-click"
                                             src="<?=$pic_url?>"
                                             alt="broucher" >
                                    </div>
                                    <?php }?>
                                    <?php if(isset($video_link) && !empty($video_link) && strpos($video_link, 'amazonaws') === false ){?>
                                    <div class="swiper-slide d-flex align-items-lg-center">
                                        <div class="ratio ratio-16x9 h-100">
                                            <iframe id="youtubeVideo"
                                                    src="https://www.youtube.com/embed/<?php echo $video_link; ?>"
                                                    title="YouTube video" allowfullscreen></iframe>
                                        </div>
                                    </div>
                                    <?php }?>
                                    <?php if(isset($youtube_link) && !empty($youtube_link)){?>
                                    <div class="swiper-slide d-flex align-items-lg-center">
                                        <div class="ratio ratio-16x9 h-100">
                                            <iframe id="youtubeVideo"
                                                    src="<?php echo $youtube_link; ?>"
                                                    title="YouTube video" allowfullscreen></iframe>
                                        </div>
                                    </div>
                                    <?php }?>
                                    <?php if(!empty($image_link)){ $image_360 = '/360_image';?>
                                        <link rel="stylesheet" href="../includes/css/pannellum.css"/>
                                        <script type="text/javascript" src="../includes/js/pannellum.js?v=1"></script>
                                        <style>
                                            #panorama {
                                                width: 100%;
                                                height: 400px;
                                            }
                                            .pnlm-container {
                                                background: #f4f4f4 url("https://www.lankapropertyweb.com/360-images/<?=$image_link?>");
                                            }
                                            .pnlm-load-button {
                                                width: 200px;
                                            }
                                        </style>
                                    <div class="swiper-slide">
                                    <div id="panorama_2"></div>
                                    <script>
                                        pannellum.viewer('panorama_2', {
                                            "type": "equirectangular",
                                            "panorama": "https://www.lankapropertyweb.com/360-images/<?=$image_link?>",
                                            "preview": "https://www.lankapropertyweb.com/360-images/<?=$image_link?>",
                                            autoLoad: false,
                                            "compass": true,
                                            "northOffset": 247.5,
                                            "orientationOnByDefault": true,
                                            "autoRotate": -2
                                        });
                                    </script>
                                    </div>
                                    <?php }?>
                                </div>
                            </div>
                            <div class="swiper-button-prev banner-prev swiper-button"></div>
                            <div class="swiper-button-next banner-next swiper-button"></div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</div>
