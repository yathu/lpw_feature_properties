<?php
header("Cache-Control: no cache");
session_cache_limiter("private_no_expire");
ob_start(); //start output buffer - used for redirect
session_start();
//include "../includes/files/checkSession.php";
ob_end_flush(); //flush the output buffer now as redirect scripts are over.
include "../includes/files/writeLog.php";
include "../includes/files/DBconn.php";
$user_session_id = $_SESSION['user_session_id'];

?>
<!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <title>Lanka Property web Buy Add-ons</title>
    <?php require_once "../includes/files/header_inc.php";?>
</head>
<body>
<?php
require_once "../includes/files/header.php";
include "../includes/files/myacc/myaccount_sub_heading.html";
?>
<link rel="stylesheet" href="assets/css/add-ons-style.css?v=1">
<div class="lpw_body_container">

    <section class="addons">


        <div class="container">

    <div class="mobile-nave">
        <a href="#">
            <img src="assets/img/back.svg" alt="">
            Back</a>
    </div>

    <h1 class="title-1-thin text-center rubik-light">
        Buy an Add-ons
    </h1>
    <p class="body-text rubik-regular">
        Please select the package suitable for you to continue to the next step.
    </p>
</div>

<?php
$url_addons = 'http://dev1.srilankaproperty.lk/api/v3/AddOns?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoiYXBpX2tleSJ9.l6YJhp_Jm2tr%20yHhDdodj0E1kui6vfLordQUDXWF3y3U&lang=en&site=LPW';
$options = array('http' => array(
    'method'  => 'GET',
    'header' => 'Authorization: Bearer '.$token
));

$context  = stream_context_create($options);
$response = file_get_contents($url_addons, false, $context);
$arr = json_decode($response, true);
?>

<div id="plan-menu" class="menu-swiper-container stick-plan">
    <div class="addon-menu-swiper">
        <div class="swiper-wrapper">
            <a href="#content1" class="swiper-slide active">Instant Boost</a>
            <a href="#content2" class="swiper-slide">Verified Property</a>
            <a href="#content3" class="swiper-slide">Social Media Promo</a>
            <a href="#content4" class="swiper-slide">Virtual Experience</a>
            <a href="#content5" class="swiper-slide">Double Views & Leads</a>

        </div>
    </div>
</div>
<form action="/myaccount/order-summary/" method="post">
<div class="container addon-container">
    <div class="row addon-items-container">
<?php foreach($arr['packages'] as $key=>$value){ ?>
        <div id="content<?=$value['ad_ons_id']?>" class="addon-item">
            <img src="assets/img/<?=$value['image']?>" alt="">
            <h2>
                <?=$value['title']?>
            </h2>
            <p>
                <?=$value['desc_short']?>
            </p>
            <div class="button-box">
                <div>
                    <span class="old">
                        LKR <?=$value['price']?>
                    </span>
                    <span class="new">
                        <?php if($value['discount_price']==0){?> Free
                        <?php }else{ ?> LKR <?=$value['discount_price']?>
                    <?php } ?>
                    </span>
                </div>
                <div>
                    <div class="button-switch">
                        <input type="checkbox" name="option<?=$value['ad_ons_id']?>" id="switch-orange<?=$value['ad_ons_id']?>" data-price="<?=$value['discount_price']?>" data-btn="<?=$value['ad_ons_id']?>" class="switch" <?php if($value['discount_price']==0) echo 'checked';?> />
                        <input type="hidden" name="title<?=$value['ad_ons_id']?>" value="<?=$value['title']?>">
                        <input type="hidden" name="price<?=$value['ad_ons_id']?>" value="<?=$value['price']?>">
                        <input type="hidden" name="discount_price<?=$value['ad_ons_id']?>" value="<?=$value['discount_price']?>">
                        <label for="switch-orange<?=$value['ad_ons_id']?>" class="lbl-off">ADD NOW</label>
                        <label for="switch-orange<?=$value['ad_ons_id']?>" class="lbl-on">ADDED</label>
                    </div>
                </div>

                <div class="offer">
                    <?=$value['offer']?>
                </div>

            </div>
            <div id="<?=$value['ad_ons_id']?>" class="addon-footer" data-toggle="modal" data-target="#moreModal">
                <img src="assets/img/ques.svg" alt="">
                MORE DETAILS
            </div>
        </div>
<?php } ?>


        <div class="addon-item bill-summary">

            <img class="img-responsive"
                 src="assets/img/summary.png" alt="summary">

            <ul>

                <li>
                    <span>Sub Total</span>
                    <strong>LKR <b class="subTotalValue"></b></strong>
                    <input type="hidden" name="subTotalValue" id="subTotalValue">
                </li>

            </ul>

        </div>


    </div>

    <div class="button-container">
        <button class="btn btn-outline-success btn-block back-btn">BACK</button>
        <button id="submit" type="submit" class="btn btn-success btn-block">PROCEED TO CHECKOUT</button>
    </div>
</div>
</form>
<div class="container help-container">
    <div class="help-box">
        <div class="content">
            <p>
                <svg width="22px" height="22px" viewBox="0 0 22 22" version="1.1" xmlns="http://www.w3.org/2000/svg"
                     xmlns:xlink="http://www.w3.org/1999/xlink">
                    <!-- Generator: Sketch 64 (93537) - https://sketch.com -->
                    <title>question-2</title>
                    <desc>Created with Sketch.</desc>
                    <defs>
                        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="linearGradient-1">
                            <stop stop-color="#FFDA44" offset="0%"></stop>
                            <stop stop-color="#FFAF46" offset="100%"></stop>
                        </linearGradient>
                    </defs>
                    <g id="Welcome" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                        <g id="lpw-addons-1.1" transform="translate(-465.000000, -1227.000000)">
                            <rect id="Rectangle" fill="#FFFAE7" x="235" y="1193" width="1450" height="90" rx="5"></rect>
                            <g id="question-2" transform="translate(465.000000, 1227.000000)"
                               fill="url(#linearGradient-1)" fill-rule="nonzero">
                                <path d="M11,0 C4.93423047,0 0,4.93423047 0,11 C0,17.0657695 4.93423047,22 11,22 C17.0657695,22 22,17.0657695 22,11 C22,4.93423047 17.0657695,0 11,0 Z M10.5416523,18.3333477 C9.78342578,18.3333477 9.16665234,17.7165742 9.16665234,16.9583477 C9.16665234,16.2001211 9.78342578,15.5833477 10.5416523,15.5833477 C11.2998789,15.5833477 11.9166523,16.2001211 11.9166523,16.9583477 C11.9166523,17.7165742 11.2998789,18.3333477 10.5416523,18.3333477 Z M11.9166523,12.7420391 L11.9166523,14.2083477 C11.9166523,14.4616914 11.7116484,14.6666953 11.4583047,14.6666953 L9.625,14.6666953 C9.37165625,14.6666953 9.16665234,14.4616914 9.16665234,14.2083477 L9.16665234,11.9166953 C9.16665234,10.9060273 9.98933203,10.0833477 11,10.0833477 C12.010668,10.0833477 12.8333477,9.26066797 12.8333477,8.25 C12.8333477,7.23933203 12.010668,6.41665234 11,6.41665234 C9.98933203,6.41665234 9.16665234,7.23933203 9.16665234,8.25 L9.16665234,8.70834766 C9.16665234,8.96169141 8.96164844,9.16669531 8.70830469,9.16669531 L6.875,9.16669531 C6.62165625,9.16669531 6.41665234,8.96169141 6.41665234,8.70834766 L6.41665234,8.25 C6.41665234,5.72287891 8.47287891,3.66665234 11,3.66665234 C13.5271211,3.66665234 15.5833477,5.72292187 15.5833477,8.25 C15.5833477,10.4494844 14.0337656,12.3132539 11.9166523,12.7420391 Z"
                                      id="Shape"></path>
                            </g>
                        </g>
                    </g>
                </svg>

                <b>
                    Need help?
                </b>
                Contact our industry experts to choose the right plan and add-ons suitable for you.
            </p>
        </div>
        <div>
            <button class="btn btn-outline-success btn-block back-btn">CONTACT</button>
        </div>
    </div>
</div>

<!--<div class="container bottom-back">-->
<!--    <div class="mobile-nave">-->
<!--        <a href="#">-->
<!--            <img src="assets/img/back.svg" alt="">-->
<!--            Back</a>-->
<!--    </div>-->
<!--</div>-->

<div class="container mobile-bill-summary">
    <span>Sub Total</span>
    <strong>LKR <b class="subTotalValue"></b></strong>
</div>

<div class="modal fade" id="moreModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-hidden="true">
                    <svg width="15px" height="15px" viewBox="0 0 15 15" version="1.1" xmlns="http://www.w3.org/2000/svg"
                         xmlns:xlink="http://www.w3.org/1999/xlink">
                        <!-- Generator: Sketch 64 (93537) - https://sketch.com -->
                        <title>Path</title>
                        <desc>Created with Sketch.</desc>
                        <defs>
                            <rect id="path-1" x="975" y="306" width="340" height="365" rx="5"></rect>
                            <filter x="-4.7%" y="-3.8%" width="109.4%" height="108.8%" filterUnits="objectBoundingBox"
                                    id="filter-2">
                                <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                                <feGaussianBlur stdDeviation="5" in="shadowOffsetOuter1"
                                                result="shadowBlurOuter1"></feGaussianBlur>
                                <feComposite in="shadowBlurOuter1" in2="SourceAlpha" operator="out"
                                             result="shadowBlurOuter1"></feComposite>
                                <feColorMatrix
                                        values="0 0 0 0 0.949019608   0 0 0 0 0.949019608   0 0 0 0 0.949019608  0 0 0 1 0"
                                        type="matrix" in="shadowBlurOuter1"></feColorMatrix>
                            </filter>
                            <rect id="path-3" x="0" y="0" width="700" height="400" rx="15"></rect>
                            <filter x="-8.7%" y="-14.8%" width="117.4%" height="130.5%" filterUnits="objectBoundingBox"
                                    id="filter-4">
                                <feOffset dx="0" dy="2" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
                                <feGaussianBlur stdDeviation="20" in="shadowOffsetOuter1"
                                                result="shadowBlurOuter1"></feGaussianBlur>
                                <feColorMatrix values="0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.6 0" type="matrix"
                                               in="shadowBlurOuter1"></feColorMatrix>
                            </filter>
                        </defs>
                        <g id="Welcome" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                            <g id="lpw-addons-1.0(more-details-popup)" transform="translate(-1274.000000, -326.000000)">
                                <g id="Rectangle">
                                    <use fill="black" fill-opacity="1" filter="url(#filter-2)"
                                         xlink:href="#path-1"></use>
                                    <rect stroke="#72BF90" stroke-width="2" stroke-linejoin="square" fill="#FFFFFF"
                                          fill-rule="evenodd" x="976" y="307" width="338" height="363" rx="5"></rect>
                                </g>
                                <rect id="Rectangle" fill-opacity="0.9" fill="#202330" x="-1" y="0" width="1920"
                                      height="1582"></rect>
                                <g id="Group-3" transform="translate(609.000000, 306.000000)">
                                    <g id="Rectangle">
                                        <use fill="black" fill-opacity="1" filter="url(#filter-4)"
                                             xlink:href="#path-3"></use>
                                        <use fill="#FFFFFF" fill-rule="evenodd" xlink:href="#path-3"></use>
                                    </g>
                                    <g id="close(2)" transform="translate(665.000000, 20.000000)" fill="#000000"
                                       fill-rule="nonzero">
                                        <path d="M0.461495327,14.5385047 C1.04542034,15.1222534 1.99196284,15.1222534 2.57588785,14.5385047 L7.5,9.61439252 L12.4241121,14.5385047 C13.0108469,15.1051921 13.9434913,15.0970877 14.5202895,14.5202895 C15.0970877,13.9434913 15.1051921,13.0108469 14.5385047,12.4241121 L9.61439252,7.5 L14.5385047,2.57588785 C14.9272248,2.20044939 15.0831216,1.64448166 14.9462761,1.12167129 C14.8094306,0.598860926 14.4011391,0.190569397 13.8783287,0.053723878 C13.3555183,-0.0831216407 12.7995506,0.0727752008 12.4241121,0.461495327 L7.5,5.38560748 L2.57588785,0.461495327 C2.20044939,0.0727752008 1.64448166,-0.0831216407 1.12167129,0.053723878 C0.598860926,0.190569397 0.190569397,0.598860926 0.053723878,1.12167129 C-0.0831216407,1.64448166 0.0727752008,2.20044939 0.461495327,2.57588785 L5.38560748,7.5 L0.461495327,12.4241121 C-0.122253366,13.0080372 -0.122253366,13.9545797 0.461495327,14.5385047 L0.461495327,14.5385047 Z"
                                              id="Path"></path>
                                    </g>
                                </g>
                            </g>
                        </g>
                    </svg>
                </button>
            </div>
            <div class="modal-body">
<?php foreach($arr['packages'] as $key=>$value){ ?>
                <div class="content <?=$value['ad_ons_id']?>">
                    <div class="title-box">
                        <img src="assets/img/<?=$value['image']?>" alt="">
                        <h1>
                            <?=$value['title']?>
                        </h1>
                    </div>
                    <p><?=$value['description']?>
                    </p>
                    <div class="price-row">
                        <div class="col old-price">
                            LKR <?=$value['price']?>
                        </div>
                        <div class="col new-price">
                            <?php if($value['discount_price']==0){?> Free
                            <?php }else{ ?> LKR <?=$value['discount_price']?>
                            <?php } ?>
                        </div>
                        <div class="btn-col text-center">
                            <div class="button-switch">
                                <input type="checkbox" id="switch-orange1<?=$value['ad_ons_id']?>" data-price="<?=$value['discount_price']?>" data-btn="<?=$value['ad_ons_id']?>"
                                       class="switch" <?php if($value['discount_price']==0) echo 'checked';?>/>
                                <label for="switch-orange1<?=$value['ad_ons_id']?>" class="lbl-off">ADD NOW</label>
                                <label for="switch-orange1<?=$value['ad_ons_id']?>" class="lbl-on">ADDED</label>
                            </div>
                        </div>
                    </div>
                </div>
            <?php } ?>


            </div>
        </div><!-- /.modal-content -->
    </div><!-- /.modal-dialog -->
</div>


        <!-- Optional JavaScript -->
        <!-- jQuery first, then Popper.js, then Bootstrap JS -->
        <script src="assets/js/jquery-3.4.1.slim.min.js"></script>
        <script src="assets/js/swiper-bundle.min.js"></script>

        <!-- <script src="assets/js/popper.min.js"></script> -->
        <script src="assets/js/bootstrap.min.js"></script>
        <script src="assets/js/main.js"></script>
        <script src="assets/js/addones.js"></script>
    </section>

</div>
<?php require_once "../includes/files/footer.php";?>
</body>

</html>

<script type="text/javascript">
    ga('send', 'pageview');// Send product impressions with initial pageview.
    $(document).ready(function()
    {
    $("#submit").click(function() {
        var subTotalValue=$('.subTotalValue').html();
        $('#subTotalValue').val(subTotalValue);

       if (subTotalValue.length == 0) {
         alert('Please select a add ons to proceed.');
         return false; }
         else{

            $.ajax({
            type: "POST",
            url: 'add-ons.php',
            data: "addons=true",
            success: function(response)
            {

           }
       });
         }
    });
    });
</script>
