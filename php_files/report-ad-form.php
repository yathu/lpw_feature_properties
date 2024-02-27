<style>
    .select-wrapper {
        position: relative;
        display: inline-block;
    }

    .dropdown-icon {
        position: absolute;
        top: 50%;
        right: 10px;
        transform: translateY(-50%);
        pointer-events: none;
    }
</style>

<div class="modal fade" id="reportModal" tabindex="-1" aria-labelledby="reportModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="reportModalLabel">Report this AD</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <form id="modal_report" name="modal_report" action="#">
                    <div class="mb-3">
                        <input type="text" class="form-control" id="reportName" name="reportName" placeholder="Name (Optional)">
                    </div>
                    <div class="mb-3">
                        <input type="email" class="form-control" id="reportEmail" name="reportEmail"
                               placeholder="Email*" required>
                    </div>
                    <div class="mb-3">
                        <input type="tel" class="form-control" id="reportPhone" name="reportPhone" placeholder="Phone (Optional)">
                    </div>

                    <div class="mb-3 position-relative" >
<!--                        <textarea class="form-control" id="reportReason" rows="3" placeholder="Reason*"></textarea>-->

                        <select  class="form-control" name="reportReason" placeholder="Reason*" class="pullDown" id="reportReason">
                            <option class="form-control" value="0">Please select a reason</option>
                            <option value="not_prop">Not a property ad</option>
                            <option value="not_avail">Property not available anymore</option>
                            <option value="no_prop">No such property</option>
                            <option value="wrong_contact">Incorrect contact details</option>
                            <option value="no_contact">Advertiser unresponsive</option>
                            <option value="wrong_price">Unrealistic price</option>
                            <option value="wrong_pic">Image on ad is not that of property</option>
                            <option value="spam">Spam</option>
                            <option value="fake">Scam/Fake ad</option>
                            <option value="other">Other</option>

                        </select>
                        <span class="dropdown-icon"> <i class="fas fa-chevron-down"></i></span>

                    </div>
                    <div class="mb-3">
<!--                    <label for="" style="padding-right:0px; width: 100%;">Details<span class="smallText"> Please tell us why you want to report this ad</span></label>-->
                   <textarea class="form-control" placeholder="Please tell us why you want to report this ad" name="rep_text" id="rep_text" cols="53" rows="4" style="width: 100%;"></textarea>
                    </div>

                    <input id="page" type="hidden" value="<? echo $adLink;?>" id="page" />
                    <input id="ad_no" name="ad_no" type="hidden" value="<? echo $ad_id;?>" />
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

                    <button type="submit"  id = "report_ad_pop" class="btn btn-custom-primary w-100">Submit</button>
                </form>
            </div>
        </div>
    </div>
</div>


