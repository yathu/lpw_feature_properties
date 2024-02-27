<?php
if (!isset($_SESSION['recent_view'])) {
    $recent_view_array = array($_SESSION['recent_view']);
    array_push($recent_view_array, $_REQUEST['prop']);
    $_SESSION['recent_view'] = $recent_view_array;
} else {
    array_push($_SESSION['recent_view'], $_REQUEST['prop']);
}

if (isset($_SESSION['favourit_ads'])) {
    $favAds = $_SESSION['favourit_ads'];
}

$isFav = 0;
if (isset($favAds)) {
    if (in_array($ad_id, $favAds)) {
        $isFav = 1;
    }
}
$page_url = 'https://www.lankapropertyweb.com' . $_SERVER["REQUEST_URI"];
$mailtoLink = "mailto:$recipientEmail?subject=" . urlencode($ad_heading) . "&body=" . urlencode($page_url);

?>
<div class="col-12 col-lg-4 px-lg-3 px-xl-4 position-relative d-none d-lg-block">

    <div id="contact-form" class="contact-form-container position-sticky">

        <div class="row gx-2 share-btn-row">


            <div class="col-6">


                <div class="dropdown">

                    <?php
                    $page_url = 'https://' . $_SERVER["HTTP_HOST"] . '/' . $url_folder . '/property_details-' . $ad_id . '.html';
                    $utm_fb = urlencode('?utm_source=LPW&utm_medium=organic&utm_campaign=facebook-share-detail&utm_content=shared-ad');
                    $utm_whatsapp = urlencode('?utm_source=LPW&utm_medium=organic&utm_campaign=whatsapp-share-detail&utm_content=shared-ad');
                    $utm_viber = urlencode('?utm_source=LPW&utm_medium=organic&utm_campaign=viber-share-detail&utm_content=shared-ad');
                    $utm_twitter = urlencode('?utm_source=LPW&utm_medium=organic&utm_campaign=twitter-share-detail&utm_content=shared-ad');
                    $utm_linkedin = urlencode('?utm_source=LPW&utm_medium=organic&utm_campaign=linkedin-share-detail&utm_content=shared-ad');
                    $utm_telegram = urlencode('?utm_source=LPW&utm_medium=organic&utm_campaign=telegram-share-detail&utm_content=shared-ad');
                    ?>


                    <button class="btn w-100 btn-outline-primary dropdown-toggle d-flex justify-content-center align-items-center"

                            type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown"

                            aria-expanded="false">

                        <img src="/includes/img/details/share_icons/002-facebook.png" data-src="/includes/img/details/share_icons/002-facebook.png" alt="social share">

                        <img src="/includes/img/details/share_icons/003-whatsapp.png" data-src="/includes/img/details/share_icons/003-whatsapp.png" alt="social share">

                        <img src="/includes/img/details/share_icons/005-telegram.png" data-src="/includes/img/details/share_icons/005-telegram.png" alt="social share">


                        Share


                    </button>


                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton2">

                        <li>

                            <a href="http://www.facebook.com/share.php?u=<?php echo $page_url; ?>&t=<?php echo urlencode($hedding); ?><?= $utm_fb ?>"
                               onclick="gtag('event', 'click', {'event_category': 'share results detail page', 'event_label': 'Facebook', 'non_interaction': true});">

                                <img src="/includes/img/details/share_icons/002-facebook.png" data-src="/includes/img/details/share_icons/002-facebook.png" alt="social share">

                            </a>

                        </li>

                        <li>

                            <a href="https://api.whatsapp.com/send?text=<?php echo(urlencode($hedding) . ' - ' . urlencode($page_url)); ?><?= $utm_whatsapp ?>"
                               onclick="gtag('event', 'click', {'event_category': 'share results detail page', 'event_label': 'WhatsApp', 'non_interaction': true});">

                                <img src="/includes/img/details/share_icons/003-whatsapp.png" data-src="/includes/img/details/share_icons/003-whatsapp.png" alt="social share">

                            </a>

                        </li>


                        <li>

                            <a href="viber://forward?text=<?php echo(urlencode($hedding) . ' - ' . urlencode($page_url)); ?><?= $utm_viber ?>"
                               onclick="gtag('event', 'click', {'event_category': 'share results detail page', 'event_label': 'Viber', 'non_interaction': true});">

                                <img src="/includes/img/details/share_icons/001-viber.png" data-src="/includes/img/details/share_icons/001-viber.png" alt="social share">

                            </a>

                        </li>


                        <li>

                            <a href="http://twitter.com/share?text=<?php echo $hedding; ?>&url=<?php echo urlencode($page_url); ?><?= $utm_twitter ?>"
                               onclick="gtag('event', 'click', {'event_category': 'share results detail page', 'event_label': 'Twitter', 'non_interaction': true});">

                                <img src="/includes/img/details/share_icons/004-twitter.png" data-src="/includes/img/details/share_icons/004-twitter.png" alt="social share">

                            </a>

                        </li>


                        <li>

                            <a href="https://www.linkedin.com/shareArticle?mini=true&url=<?php echo urlencode($page_url); ?><?= $utm_linkedin ?>"
                               onclick="gtag('event', 'click', {'event_category': 'share results detail page', 'event_label': 'LinkedIn', 'non_interaction': true});">

                                <img src="/includes/img/details/share_icons/006-linkedin.png" data-src="/includes/img/details/share_icons/006-linkedin.png" alt="social share">

                            </a>

                        </li>


                        <li>

                            <a href="https://telegram.me/share/url?url=<?php echo urlencode($page_url); ?><?= $utm_telegram ?>"
                               onclick="gtag('event', 'click', {'event_category': 'share results detail page', 'event_label': 'Telegram', 'non_interaction': true});">

                                <img src="/includes/img/details/share_icons/005-telegram.png" data-src="/includes/img/details/share_icons/005-telegram.png" alt="social share">

                            </a>

                        </li>





                        <li>
<!--                            href="--><?php //echo $mailtoLink; ?><!--"-->
                            <a id="CustomID"
                               onclick="gtag('event', 'click', {'event_category': 'share results detail page', 'event_label': 'Email', 'non_interaction': true});">

                                <img src="/includes/img/details/share_icons/email_to_logo.png" data-src="/includes/img/details/share_icons/email_to_logo.png" alt="social share">

                            </a>

                        </li>

                        <li>
                            <a class="shareBtnBottom event copyUrl" title="Copy link to property"><img src="../includes/search-module/images/clone.png"  alt="social_icon"></a>
<!--                            <a class="d-flex align-items-center lh-1 copyUrl">-->
<!--                                <i class="fa fa-clone" aria-hidden="true"></i>-->
<!--                            </a>-->
                        </li>


                        <li>

                            <a href="">

                            </a>

                        </li>



                    </ul>

                </div>


            </div>


            <div class="col-6">
                <a
                    class="btn btn-outline-primary d-block w-100" id="saveBtn" <?php echo $isFav == 1 ? '' : 'checked=""'; ?> data-advertid="<?php echo $ad_id; ?>">

                    <i class="fa fa-star me-2"></i>

                    <span>Save</span>

                </a>

            </div>

        </div>

        <!--                 contact advertiser -->
<?php include '../includes/files/more-details/contact_advertiser.php'; ?>

        <!--     end property   -->
<!--        --><?php //include '../includes/files/common_load_new_php'; ?>
    </div>

</div>
