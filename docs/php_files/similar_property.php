<?php

//ini_set('display_errors', 1);
//error_reporting(E_ALL);
$price = $price_val;
if($tab == 'land'){
    $floor_area_sp = $size_land;
    $floor_area_sp=str_replace(' acres', '', $floor_area_sp);
    $floor_area_ad=$floor_area_sp." ".$land_units;
}else{
    if(isset($floor_area_sp)) $floor_area_sp=$floor_area_sp;
    else
        $floor_area_sp=str_replace(' sqft', '', $floor_area);
    $floor_area_sp=str_replace(' sq.ft.', '', $floor_area);
    $floor_area_ad= $floor_area_sp." ".$floor_area_type;
}

if(isset($floor_area_sp)){
    if($floor_area_sp>=10000){
        $floor_area_sp=$floor_area_sp/1000;
        $fmin=floorrange($floor_area_sp);
        $fmax=$fmin+10;
        $floor_area_min=$fmin*1000;
        $floor_area_max=$fmax*1000;
    }
    else if($floor_area_sp>=1000){
        $floor_area_sp=$floor_area_sp/100;
        $fmin=floorrange($floor_area_sp);
        $fmax=$fmin+10;
        $floor_area_min=$fmin*100;
        $floor_area_max=$fmax*100;
    }else if($floor_area_sp<1000 && $floor_area_sp>=100){

        $floor_area_sp=$floor_area_sp/10;
        $fmin=floorrange($floor_area_sp);
        $fmax=$fmin+10;
        $floor_area_min=$fmin*10;
        $floor_area_max=$fmax*10;

    }else if($floor_area_sp<100){

        $floor_area_sp=$floor_area_sp;
        $fmin=floorrange($floor_area_sp);
        $fmax=$fmin+10;
        $floor_area_min=$fmin;
        $floor_area_max=$fmax;

    }

    $floor_area_range=$floor_area_min.' - '.$floor_area_max;
}
$opts = [
    "http" => [
        "method" => "GET",
        'header' => "Accept-language: en\r\n" .
            "Cookie: foo=bar\r\n" . // check function.stream-context-create on php.net
            "User-Agent: Mozilla/5.0 (iPad; U; CPU OS 3_2 like Mac OS X; en-us) AppleWebKit/531.21.10 (KHTML, like Gecko) Version/4.0.4 Mobile/7B334b Safari/531.21.102011-10-16 20:23:10\r\n" // i.e. An iPad
    ]
];
$context = stream_context_create($opts);

//loc=362e393139393333|37392e383534303237&price=437898&city=Colombo+2®ion=Colombo+All
$getLocation = $propty_region.'_'.$city.'#'.$city_lat_map.'#'.$city_lon_map;
$getLocation = str_replace(' ', '-', $getLocation);

$getLocation_url = $propty_region.'_'.$city.'_'.$city_lat_map.'_'.$city_lon_map;
$getLocation_url = urlencode($getLocation_url);

$searchbox=str_replace(' ', '-', $city);
$city_urlen = urlencode($city);

if($tab=='sales'){
    $tabdis='sale';
}else{
    $tabdis=$tab;
}
//var_dump($propty_region);
if ($propty_region == 'Colombo All') $radius = 2;
else if ($propty_region == 'Western') $radius = 5;
else $radius = 10;

if($tab=='land'){
    $price_type_url='price_total';
    $area_option='perches';
    $property_type=str_replace(' ', '-',$property_type);
    $property_type_url=str_replace(' ', '_',$property_type);
    if($price_type=='Per Acre'){
        $price_option='acre';
        $price_option_str='per acre price';
        $price_type_url='acre';
        $land_unit='acres';
    } else if($price_type=='Per Perch'){
        $price_option='perch';
        $price_option_str='per perch price';
        $price_type_url='perch';
        $land_unit='P';
    }else{
        //$price_option='total';
        //$price_option_str='total price';
        if($land_units=='acres'){
            $price_option='acre';
            $price_option_str='per acre price';
            $price_type_url='acre';
            $land_unit='acres';
        }
        if($land_units=='perches'){
            $price_option='perch';
            $price_option_str='per perch price';
            $price_type_url='perch';
            $land_unit='P';
        }
    }



}else if($tab=='sales'){
    $price_type_url='price_total';
    $area_option='';
    $property_type=urlencode($property_type);
    $property_type_url=urlencode($property_type);
    $price_option='price_total';
    $price_option_str='total price';
}
else{
    $price_type_url='price-month';
    $area_option='';
    $property_type=urlencode($property_type);
    $property_type_url=urlencode($property_type);
    $price_option='price-month';
    $price_option_str='price';

}
if($tab=='land'){

    if($land_units=='acres'){
        $priceper=$price_land_pa;
        $price_type_send='Per Acre';
    }else{
      $priceper=$price_land_pp;
        $price_type_send='Per Perch';
    }
}else{
//    echo '4353646456dsfsdfsddfsdfsdf';
    $priceper=$price;
    $price_type_send=$price_type;
}

$priceper=str_replace(',', '', $priceper);
preg_match_all('!\d+!', $priceper, $matches);
$priceper=$matches[0][0];

if($tab=='sales'){
    $pricepersqft=$price_sqft;
    $pricepersqft=str_replace(',', '', $pricepersqft);
    preg_match_all('!\d+!', $pricepersqft, $matchesale);
 $pricepersqft=$matchesale[0][0];
// echo $pricepersqft;
//4429
    if($pricepersqft<20000){
        $priceminpsf=$pricepersqft*(80/100);
        $pricemaxpsf=$pricepersqft*(120/100);
    }else if($pricepersqft<50000){
        $priceminpsf=$pricepersqft*(85/100);
        $pricemaxpsf=$pricepersqft*(115/100);
    }else{
        $priceminpsf=$pricepersqft*(90/100);
        $pricemaxpsf=$pricepersqft*(110/100);
    }
//echo $priceminpsf.'-'.$pricemaxpsf;
//    3543.2-5314.8
    if($priceminpsf > 1 && $pricemaxpsf<5000){
//        $priceminpsf = 1;
        $priceminpsf = 'any';
        // daham said to update figure as 1000
        $pricemaxpsf = 5000;
    }else{
        $priceminpsf=pricerange($priceminpsf/1000)*1000;
        $pricemaxpsf=pricerange($pricemaxpsf/1000)*1000;
//        if($priceminpsf < 1){$priceminpsf = 1;}

    }


    if($priceminpsf==0 || $priceminpsf<0){
        $priceminpsf='Any';
    }
    if($pricemaxpsf>100000){
        $pricemaxpsf=100000;
    }
    $price_type_send='Per Perch';
    $price_option_sqft='sqft';
    $price_type_url_sqft='sqft';

    $minrange_sqft=$priceminpsf;
    $minrange_sqft_url=$priceminpsf.' psf';
    $maxrange_sqft=$pricemaxpsf;
    $maxrange_sqft_url=$pricemaxpsf.' psf';
}

$priceminmax=priceminmax($priceper,$tab,'');
$price_sim=$priceminmax[0];
$price_sim_max=$priceminmax[1];

$actual_price_min=$price_sim;
$actual_price_max=$price_sim_max;



// $getpricerange= getpricerange($priceper,$price_sim,$price_sim_max,$tab,$priceper,$price_type_send,'min_max');
// $minrange=$getpricerange[0];
// $minrange_url=$getpricerange[1];
// $maxrange=$getpricerange[2];


function priceminmax($priceper, $tab=null, $istotal=null){
//    echo $priceper.'-'.$tab.'-'.$istotal;
//    echo $priceper.'222222222222222222';
    if($tab=='sales'){
        //- < 50M = +/- 30%
        //- 50M - 100M = +/- 15%
        //- \> 100M = +/- 10%
        if($priceper < 50000000){
            $price_sim=$priceper * (70/100);
            $price_sim_max=$priceper * (130/100);
        }else if($priceper < 100000000){
            $price_sim=$priceper * (85/100);
            $price_sim_max=$priceper * (115/100);
        }else{
            $price_sim=$priceper * (90/100);
            $price_sim_max=$priceper * (110/100);
        }

    }else if($tab=='land'){

        if($istotal=='Total'){
            //- < 1M = +/- 30%
            //- 1M - 2.5M = +/- 20%
            //- \> 2.5M = +/- 10%

            if($priceper < 1000000){
                $price_sim=$priceper * (70/100);
                $price_sim_max=$priceper * (130/100);
            }else if($priceper < 2500000){
                $price_sim=$priceper * (80/100);
                $price_sim_max=$priceper * (120/100);
            }else{
                $price_sim=$priceper * (90/100);
                $price_sim_max=$priceper * (110/100);
            }

        }else{

            if($priceper < 500000){
                $price_sim=$priceper * (70/100);
                $price_sim_max=$priceper * (130/100);
            }else if($priceper < 1000000){
                $price_sim=$priceper * (80/100);
                $price_sim_max=$priceper * (120/100);
            }else{
                $price_sim=$priceper * (90/100);
                $price_sim_max=$priceper * (110/100);
            }
        }
    }else{
        if($priceper>200000){
            $price_sim=$priceper - ($priceper * 0.2);
            $price_sim_max=$priceper + ($priceper * 0.2);
        }else{
            $price_sim=$priceper - ($priceper * 0.4);
            $price_sim_max=$priceper + ($priceper * 0.4);
        }
    }
//    echo $price_sim.'-'.$price_sim_max;
    return array($price_sim,$price_sim_max);
}
function getpricerange($realprice,$price_sim,$price_sim_max,$tab,$price,$price_type,$minmaxtype){
    if($price_sim>=100000000){
        $price_min = ($price_sim / 10000000); //convert to millions
        $min=pricerange($price_min);
        $price_max = ($price_sim_max / 10000000);
        $max=pricerange($price_max);

        if($minmaxtype != 'max'){
            if($min==$max){
                $max=$max + 10;
            }
        }

        if($tab=='sales'){
            if($min>100) $min = saleminmax($min);
            if($max>100) $max = saleminmax($max);
        }

        if($realprice<($min*10000000) && $min>10){
            $min=$min-10;
        }

        $minrange_fn_url=$minrange_fn=$min*10000000;
        $maxrange_fn=$max*10000000;
        if($maxrange_fn>1000000000){
            $maxrange_fn = 5000000000;

        }
    }
    elseif($price_sim>=10000000){
        $price_min = ($price_sim / 1000000); //convert to millions
        $min=pricerange($price_min);
        $price_max = ($price_sim_max / 1000000);
        $max=pricerange($price_max);

        if($minmaxtype != 'max'){
            if($min==$max){
                $max=$max + 10;
            }
        }

        if($tab=='sales'){
            if($min>100) $min = saleminmax($min);
            if($max>100) $max = saleminmax($max);
        }

        if($realprice>($max*1000000)){
            $max=$max+100;
        }

        $minrange_fn_url=$minrange_fn=$min*1000000;
        $maxrange_fn=$max*1000000;
    }
    else if($price_sim<10000000 && $price_sim>=1000000){
        $price_min = ($price_sim / 100000); //convert to millions
        $min=pricerange($price_min);
        $price_max = ($price_sim_max / 100000);
        $max=pricerange($price_max);

        if($minmaxtype != 'max'){
            if($min==$max){
                $max=$max + 10;
            }
        }
        if($tab=='sales'){
            if($min>100) $min = saleminmax($min);
            if($max>100) $max = saleminmax($max);
        }

        $minrange_fn_url=$minrange_fn=$min*100000;
        $maxrange_fn=$max*100000;
    }else if($price_sim<1000000 && $price_sim>=100000){
        $price_min = ($price_sim / 10000); //convert to millions
        $min=pricerange($price_min);
        $price_max = ($price_sim_max / 10000);
        $max=pricerange($price_max);
        $minrange_fn_url=$minrange_fn=$min*10000;
        $maxrange_fn=$max*10000;
        if($tab=='sales'){
            if($minrange_fn<500000){
                $minrange_fn='';
                $minrange_fn_url='Any';
            }else{
                $minrange_fn=$minrange_fn=$minrange_fn_url;
            }
            if($maxrange_fn<1000000){
                $maxrange_fn=1000000;
            }else{
                $maxrange_fn=$maxrange_fn;
            }

        }
    }else if($price_sim<100000 && $price_sim>10000){
        $price_min = ($price_sim / 1000); //convert to millions
        $min=pricerange($price_min);
        $price_max = ($price_sim_max / 1000);
        $max=pricerange($price_max);
        $minrange_fn_url=$minrange_fn=$min*1000;
        $maxrange_fn=$max*1000;
    }else if($price_sim<=10000){
        $price_min = ($price_sim / 100); //convert to millions
        $min=pricerange($price_min);
        $price_max = ($price_sim_max / 100);
        $max=pricerange($price_max);
        /*$minrange=$min*100;
        $maxrange_fn=$max*100;*/
        $minrange_fn='';
        $minrange_fn_url='Any';
        $maxrange_fn=10000;
    }

    if($tab=='land'){

        if($price_type!='Per Perch'){
            if($maxrange_fn<100000){
                $minrange_fn='';
                $minrange_fn_url='Any';
                $maxrange_fn=100000;
            }
            if($minrange_fn<100000){
                $minrange_fn='';
                $minrange_fn_url='Any';
                $maxrange_fn=$maxrange_fn;
            }
        }
        if($maxrange_fn<10000){
            if($price_type=='Per Perch'){
                $minrange_fn='';
                $minrange_fn_url='Any';
                $maxrange_fn=10000;
            }
        }
    }
    return array($minrange_fn,$minrange_fn_url,$maxrange_fn);
}
function pricerange($price_m){
    $formatted_price = trim(number_format($price_m,2,'.',''),'0');
    $formatted_price = preg_replace('/\.$/', '', $formatted_price);
    $min=round(round($formatted_price)/10)*10;
    return $min;
}
function floorrange($price_m){
    $min=(int) ($price_m/10)*10;
    return $min;
}

function saleminmax($minmax){
    $minmax = round(round($minmax)/100)*100;
    return $minmax;
}

function pricerangestr($min_price=null,$max_price=null,$price_type=null,$tab=null){
//echo $min_price.'-'.$max_price.'-'.$price_type.'-'.$tab;

    if($tab == 'land') {
        if($price_type == 'Total'){ $price_type = '';}else{
            if($price_type == 'acres') {
                $price_type = 'Per Acre';
            }else{
            $price_type = 'Per Perch';
            }

        }
    }else{
        $price_type = '';
    }
// echo $min_price;
    if ($min_price >= 1000000) {
        $min_price = ($min_price / 1000000);
        $formatted_pricemin = trim(number_format($min_price,2,'.',''),'0');
        $formatted_pricemin = preg_replace('/\.$/', '', $formatted_pricemin);

        if ($max_price >= 1000000000) {
            $max_price = ($max_price / 1000000000);
            $formatted_pricemax = trim(number_format($max_price,2,'.',''),'0');
            $formatted_pricemax = preg_replace('/\.$/', '', $formatted_pricemax);

            if($formatted_pricemin>1000){
                $formatted_pricemin=$formatted_pricemin/1000;
                $price_str = "Rs. ".intval(round($formatted_pricemin,1))." Bn- ".intval(round($formatted_pricemax,1))." Bn ".$price_type." ";
            }else{
                $price_str = "Rs. ".intval(round($formatted_pricemin,1))."M- ".intval(round($formatted_pricemax,1))." Bn ".$price_type." ";
            }
        }else{
            $max_price = ($max_price / 1000000);
            $formatted_pricemax = trim(number_format($max_price,2,'.',','),'0');
            $formatted_pricemax = preg_replace('/\.$/', '', $formatted_pricemax);
            $price_str = "Rs. ".intval(round($formatted_pricemin,1))."M - ".intval(round($formatted_pricemax,1))."M ".$price_type." ";
        }
    }else if ($min_price >= 10000 && $min_price < 1000000) {
        $min_price = ($min_price / 1000);
        $formatted_pricemin = trim(number_format($min_price,2,'.',','),'0');
        $formatted_pricemin = preg_replace('/\.$/', '', $formatted_pricemin);

        if ($max_price >= 1000000) {
            $max_price = ($max_price / 1000000);
            $formatted_pricemax = trim(number_format($max_price,2,'.',','),'0');
            $formatted_pricemax = preg_replace('/\.$/', '', $formatted_pricemax);
            $price_str = "Rs. ".intval(round($formatted_pricemin,1))."K - ".intval(round($formatted_pricemax,1))."M ".$price_type." ";
        }else if ($max_price >= 10000 && $max_price < 1000000) {
            $max_price = ($max_price / 1000);
            $formatted_pricemax = trim(number_format($max_price,2,'.',','),'0');
            $formatted_pricemax = preg_replace('/\.$/', '', $formatted_pricemax);
            $price_str = "Rs. ".intval(round($formatted_pricemin,1))."K - ".intval(round($formatted_pricemax),1)."K ".$price_type." ";
        }
    }else if($min_price=='Any'){

        $price_str = "Rs. Any - ".number_format(intval($max_price),0,'.',',')." ".$price_type." ";
//        number_format(intval($max_price), 0, '.', ',')

    }else {
        $price_str = "Rs. ".number_format(intval($min_price),0,'.',',')." - ".number_format($max_price,0,'.',',')." ".$price_type." ";
//        echo 222;
    }
//        echo $price_str;

    return $price_str;
//    echo $price_str;

}
//die($land_price_total.'lpw');
//echo $land_price_total;

//new add section
$actual_priceland_min = 0;
$actual_priceland_max = 0;
$pricetotalland_min   = 0;
$pricetotalland_max   = 0;

if ($land_price_total) {
    $pricetotalland_minmax = priceminmax($land_price_total, $tab, 'Total');

    $pricetotalland_min = $pricetotalland_minmax[0];
    $pricetotalland_max = $pricetotalland_minmax[1];

    $actual_priceland_min = $pricetotalland_min;
    $actual_priceland_max = $pricetotalland_max;
}
//}

if($tab=='rentals'){
    $showtab='rent';
}else if($tab=='sales'){
    $showtab='sale';
}else if($tab=='land'){
    $showtab='sale';
}
$sub_type = $comm_type;
if($property_type_url=='Commercial' && !empty($sub_type)){
    $proptype_str='sub-property-type='.$sub_type;
    $proptype_str_api='property_type=&sub-types='.$sub_type;
}else{
    $proptype_str='property-type='.$property_type_url;
    $proptype_str_api='property_type='.$property_type;
}

//land-area-min=10%20Perches&land-area-max=20%20Perches&area-option=perches
if($tab=='land'){
    $sqft_url="https://www.lankapropertyweb.com/$tabdis/index.php?search=1&location=$getLocation_url&$proptype_str&from_index=1&price-option=$price_option&radius=$radius&searchbox=$city_urlen&land-area-min=$floor_area_min%20Perches&land-area-max=$floor_area_max%20Perches&area-option=$area_option";
    $pricetotalland_url="https://www.lankapropertyweb.com/$tabdis/index.php?search=1&location=$getLocation_url&property-type=$property_type_url&from_index=1&min=$actual_priceland_min&max=$actual_priceland_max&price-option=total&radius=$radius&searchbox=$city_urlen&area-option=$area_option";
    //echo $pricetotalland_url;
}else{
    $sqft_url="https://www.lankapropertyweb.com/$tabdis/index.php?search=1&location=$getLocation_url&$proptype_str&from_index=1&price-option=$price_option&radius=$radius&searchbox=$city_urlen&floor-min=$floor_area_min%20sqft&floor-max=$floor_area_max%20sqft&area-option=$area_option";
}
$city_url="https://www.lankapropertyweb.com/$tabdis/index.php?search=1&location=$getLocation_url&$proptype_str&from_index=1&price-option=$price_option&radius=&searchbox=$city_urlen&area-option=$area_option";
//echo $city_url;
$price_url="https://www.lankapropertyweb.com/$tabdis/index.php?search=1&location=$getLocation_url&$proptype_str&from_index=1&min=$actual_price_min&max=$actual_price_max&price-option=$price_option&radius=$radius&searchbox=$city_urlen&area-option=$area_option";
//echo $price_url;

if($tab=='sales'){
    $price_sqft_url="https://www.lankapropertyweb.com/$tabdis/index.php?search=1&location=$getLocation_url&$proptype_str&from_index=1&min=$minrange_sqft_url&max=$maxrange_sqft_url&price-option=$price_option_sqft&radius=$radius&searchbox=$city_urlen&area-option=$area_option";
    //echo $price_sqft_url;
    $api_url_price_sqft = "https://www.lankapropertyweb.com/api/v3/search2?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoiYXBpX2tleSJ9.l6YJhp_Jm2tr%20yHhDdodj0E1kui6vfLordQUDXWF3y3U&lang=si&pic_limit=Y&type=$tab&$proptype_str_api&sub-types=&searchbox=$searchbox&constructed_rm=&constructed_uc=&short_term_rentals=&withImages=&availableNow=&urgentSale=&priceReduced=&is_district_search=&max_price=$maxrange_sqft&min_price=$minrange_sqft&without_price=&no_of_bedrooms=&radius=$radius&get_region=&date_posted=&keywords=&property_features=&price_type=$price_type_url_sqft&land_max=&floor_min=&floor_max=&without_size=&building_age=&verified_agent=&with_images=&with_price=&area_option=$area_option&land_min=&offer-type=&start_point=0&limit=8&location=$getLocation&show_filters=&is_similar=Y";
}

if($tab=='land'){
    $api_url_sqft = "https://www.lankapropertyweb.com/api/v3/search2?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoiYXBpX2tleSJ9.l6YJhp_Jm2tr%20yHhDdodj0E1kui6vfLordQUDXWF3y3U&lang=si&pic_limit=Y&type=$tab&$proptype_str_api&sub-types=&searchbox=$searchbox&constructed_rm=&constructed_uc=&short_term_rentals=&withImages=&availableNow=&urgentSale=&priceReduced=&is_district_search=&max_price=&min_price=&without_price=&no_of_bedrooms=&radius=$radius&get_region=&date_posted=&keywords=&property_features=&price_type=&land_max=$floor_area_max&floor_min=&floor_max=&without_size=&building_age=&verified_agent=&with_images=&with_price=&area_option=$area_option&land_min=$floor_area_min&offer-type=&start_point=0&limit=8&location=$getLocation&show_filters=&is_similar=Y";
    //if($price_type=='Per Perch' || $price_type=='Per Acre'){
    $api_url_pricetotalland = "https://www.lankapropertyweb.com/api/v3/search2?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoiYXBpX2tleSJ9.l6YJhp_Jm2tr%20yHhDdodj0E1kui6vfLordQUDXWF3y3U&lang=si&pic_limit=Y&type=$tab&$proptype_str_api&sub-types=&searchbox=$searchbox&constructed_rm=&constructed_uc=&short_term_rentals=&withImages=&availableNow=&urgentSale=&priceReduced=&is_district_search=&max_price=$actual_priceland_max&min_price=$actual_priceland_min&without_price=&no_of_bedrooms=&radius=$radius&get_region=&date_posted=&keywords=&property_features=&price_type=price_total&land_max=&floor_min=&floor_max=&without_size=&building_age=&verified_agent=&with_images=&with_price=&area_option=$area_option&land_min=&offer-type=&start_point=0&limit=8&location=$getLocation&show_filters=&is_similar=Y";
    //}

}else{
    $api_url_sqft = "https://www.lankapropertyweb.com/api/v3/search2?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoiYXBpX2tleSJ9.l6YJhp_Jm2tr%20yHhDdodj0E1kui6vfLordQUDXWF3y3U&lang=si&pic_limit=Y&type=$tab&$proptype_str_api&sub-types=&searchbox=$searchbox&constructed_rm=&constructed_uc=&short_term_rentals=&withImages=&availableNow=&urgentSale=&priceReduced=&is_district_search=&max_price=&min_price=&without_price=&no_of_bedrooms=&radius=$radius&get_region=&date_posted=&keywords=&property_features=&price_type=&land_max=&floor_min=$floor_area_min&floor_max=$floor_area_max&without_size=&building_age=&verified_agent=&with_images=&with_price=&area_option=$area_option&land_min=&offer-type=&start_point=0&limit=8&location=$getLocation&show_filters=&is_similar=Y";
}
//echo $api_url_sqft;

$api_url_price = "https://www.lankapropertyweb.com/api/v3/search2?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoiYXBpX2tleSJ9.l6YJhp_Jm2tr%20yHhDdodj0E1kui6vfLordQUDXWF3y3U&lang=si&pic_limit=Y&type=$tab&$proptype_str_api&sub-types=&searchbox=$searchbox&constructed_rm=&constructed_uc=&short_term_rentals=&withImages=&availableNow=&urgentSale=&priceReduced=&is_district_search=&max_price=$actual_price_max&min_price=$actual_price_min&without_price=&no_of_bedrooms=&radius=$radius&get_region=&date_posted=&keywords=&property_features=&price_type=$price_type_url&land_max=&floor_min=&floor_max=&without_size=&building_age=&verified_agent=&with_images=&with_price=&area_option=$area_option&land_min=&offer-type=&start_point=0&limit=8&location=$getLocation&show_filters=&is_similar=Y";
//echo $api_url_price;

if($city!=''){
    $api_url_city = "https://www.lankapropertyweb.com/api/v3/search2?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJuYW1lIjoiYXBpX2tleSJ9.l6YJhp_Jm2tr%20yHhDdodj0E1kui6vfLordQUDXWF3y3U&lang=si&pic_limit=Y&type=$tab&$proptype_str_api&sub-types=&searchbox=$searchbox&constructed_rm=&constructed_uc=&short_term_rentals=&withImages=&availableNow=&urgentSale=&priceReduced=&is_district_search=&max_price=&min_price=&without_price=&no_of_bedrooms=&radius=&get_region=&date_posted=&keywords=&property_features=&price_type=&land_max=&floor_min=&floor_max=&without_size=&building_age=&verified_agent=&with_images=&with_price=&area_option=$area_option&land_min=&offer-type=&start_point=0&limit=8&location=$getLocation&show_filters=&is_similar=Y";
}


//echo $api_url_sqft;
$request_sqft = @file_get_contents($api_url_sqft);
$arr_sqft     = json_decode($request_sqft, true);
$advers_sqft = $arr_sqft['ads'];
$results_count_sqft = $arr_sqft['result_count'];

//echo $api_url_price;
$request_price = @file_get_contents($api_url_price);
$arr_price = json_decode($request_price, true);
//print_r($arr_price);
$advers_price = $arr_price['ads'];
$results_count_price = $arr_price['result_count'];


//echo $api_url_city;
$request_city = @file_get_contents($api_url_city);
$arr_city = json_decode($request_city, true);
$advers_city = $arr_city['ads'];
$results_count_city = $arr_city['result_count'];
//echo $api_url_pricetotalland;
$request_pricetotalland = @file_get_contents($api_url_pricetotalland);
$arr_pricetotalland = json_decode($request_pricetotalland, true);


$advers_pricetotalland = $arr_pricetotalland['ads'];
$results_count_pricetotalland = $arr_pricetotalland['result_count'];
//var_dump($advers_pricetotalland);
if($tab=='sales'){
    $request_price_sqft = @file_get_contents($api_url_price_sqft);
    $arr_price_sqft = json_decode($request_price_sqft, true);
    $advers_price_sqft= $arr_price_sqft['ads'];
    $results_count_price_sqft = $arr_price_sqft['result_count'];
}

$activ_price='';
$activ_price_tab='';
$activ_city='';
$activ_city_tab='';
$activ_sqft='';
$activ_sqft_tab='';
$activ_pricetotalland='';
$activ_pricetotalland_tab='';

if($results_count_price <= 1 || empty($results_count_price) || $price_val == ''){
    $activ_pricetotalland='active';
    $activ_pricetotalland_tab='show active';

}
if(($results_count_price <= 1 || empty($results_count_price) || $price_val == '') || ($results_count_pricetotalland <= 1 || empty($results_count_pricetotalland) || $price_val == '')) {
    $activ_price='';
    $activ_price_tab='';
    $activ_pricetotalland='';
    $activ_pricetotalland_tab='';
    $activ_sqft='active';
    $activ_sqft_tab='show active';

}
if(($results_count_sqft <= 1 || empty($results_count_sqft) || $floor_area_min == '') && ($results_count_price <= 1 || empty($results_count_price)) && ($results_count_pricetotalland <= 1 || empty($results_count_pricetotalland) || $price_val == '')) {
    $activ_price='';
    $activ_price_tab='';
    $activ_pricetotalland='';
    $activ_pricetotalland_tab='';
    $activ_sqft='';
    $activ_sqft_tab='';
    $activ_city='active';
    $activ_city_tab='show active';

}
?>
<?php

//echo $results_count_price .'-'.$results_count_sqft .'-'. $results_count_pricetotalland.'-'. $results_count_city;
//$sqmt = 2;
//if($sqmt == 1) {
//    $results_count_pricetotalland = 1;
//    $results_count_price = $results_count_sqft = $results_count_pricetotalland = $results_count_city = 2;
//}
//else{
//
//}
//echo $results_count_price .'-'.$results_count_sqft.'-'. $results_count_pricetotalland .'-'. $results_count_city;
if($results_count_price > 1 || $results_count_sqft > 1 || $results_count_pricetotalland > 1 || $results_count_city > 1){?>
    <div id="Developer" class="the-team-container mb-4">
        <div class="other-project-swiper-container">
            <h3 class="title-content-1 mb-3">Find Similar Properties</h3>
            <div class="mb-3 filter-buttons d-flex align-items-center filter-btn-container">
                <?php
                if(($price !=0 || !empty($price)) && $results_count_price > 1){
                    if ($price_val > 0) {
                       $price_type=strip_tags($price_type);
                        if($price_val>=1000000){
                            $price_val = ($price_val / 1000000);
                            $formatted_price= trim(number_format($price,2,'.',','),'0');
                            $formatted_price = preg_replace('/\.$/', '', $formatted_price);
                            $price_str_ad = "Rs. ".$formatted_price."M ".$price_type." ";
                        }else if($price_val >= 10000 && $price_val < 1000000){
                            $price_val = ($price_val / 1000);
                            $formatted_price= trim(number_format($price_val,2,'.',','),'0');
                            $formatted_price = preg_replace('/\.$/', '', $formatted_price);
                            $price_str_ad = "Rs. ".$formatted_price."K ".$price_type." ";
                        }else{
                            $price_str_ad = "Rs. ".number_format($price_val,0,'.',',')." ".$price_type." ";
                        }
                        if($price_type == 'ONO'){ $price_type = "ONO";}
                        $price_actual_str =pricerangestr($price_sim,$price_sim_max,$price_type,$tab);
                        $price_actual_str=str_ireplace("ONO","",$price_actual_str);
                        $price_actual_str=str_ireplace("upwards","",$price_actual_str);
                        $price_actual_str=str_ireplace("Approx","",$price_actual_str);
                    }
                    else $price_str = "&nbsp;";

                if($tab=='land'){
                    $price_str_ad = $Ga_Price;
                    $price_str_ga = $land_price_total;

                }else{
                    $price_str_ga = $price_str;
                }
            //  echo "Original: " . $price_actual_str . PHP_EOL;
                    ?>

                    <button class="btn btn-custom-primary similar-filter-btn" data-simmler-filter="5"><?=$price_actual_str?>
                    </button>

                <?php } ?>


                <?php
//                echo $price.'-'.$price.'-'.$results_count_pricetotalland;
                if(($price !=0 || !empty($price)) && $results_count_pricetotalland > 1 ){

                    $pricetotalland_price_actual_str=pricerangestr($pricetotalland_min,$pricetotalland_max,$price_type,$tab);
                    $priceland_actual_str=str_ireplace("Per Perch","",$pricetotalland_price_actual_str);
                    $priceland_actual_str=str_ireplace("Per Acre","",$priceland_actual_str);
                    $priceland_actual_str=str_ireplace("ONO","",$priceland_actual_str);
                    $priceland_actual_str=str_ireplace("upwards","",$priceland_actual_str);
                    $priceland_actual_str=str_ireplace("Approx","",$priceland_actual_str);
                    $priceland_actual_str=$priceland_actual_str;
                    ?>
                    <button class="btn btn-outline-primary similar-filter-btn" data-simmler-filter="1"><?=$priceland_actual_str?>
                    </button>
                <?php

                } ?>

                <?php if(($price_sqft !=0 || !empty($price_sqft)) && $results_count_price_sqft > 1){
//                    echo $minrange_sqft.'-'.$maxrange_sqft.'-'.$price_type;
                    $price_sqft_price_str=pricerangestr($minrange_sqft,$maxrange_sqft,$price_type);
                    $price_sqft_price_str=str_ireplace("Per Perch","",$price_sqft_price_str);
                    $price_sqft_price_str=str_ireplace("Per Acre","",$price_sqft_price_str);
                    $price_sqft_price_str=str_ireplace("ONO","",$price_sqft_price_str);
                    $price_sqft_price_str=str_ireplace("upwards","",$price_sqft_price_str);
                    $price_sqft_price_str=str_ireplace("Approx","",$price_sqft_price_str);
                    $price_sqft_price_str=str_ireplace("Any - 10,000","0 - 10,000",$price_sqft_price_str);
                    $price_sqft_price_str=$price_sqft_price_str.' PSF';
                    ?>
                    <button class="btn btn-outline-primary similar-filter-btn" data-simmler-filter="2"><?=$price_sqft_price_str?>
                    </button>
                <?php } ?>

                <?php if($floor_area_min != '' && $results_count_sqft > 1 ){ ?>
                    <?php if($tab == 'land'){ ?>
                        <button class="btn btn-outline-primary similar-filter-btn" data-simmler-filter="3"><?=$floor_area_min?> - <?=$floor_area_max?> perches
                        </button>
                    <?php }else{ ?>
                        <button class="btn btn-outline-primary similar-filter-btn" data-simmler-filter="3"><?=$floor_area_min?> - <?=$floor_area_max?> sqft
                        </button>

                    <?php } } ?>
                <?php if($results_count_city > 1 && $city!=''){ ?>
                    <button class="btn btn-outline-primary similar-filter-btn" data-simmler-filter="4"><?=$city?>
                    </button>
                <?php } ?>



                <?php if (($price != 0 || !empty($price)) && $results_count_price > 3){?>
                    <a data-all="5" class="btn btn-link-custom px-xl-4 view-all-similar" onclick="gtag('event', 'click', {'event_category': 'similar_ads', 'event_label': 'Click', 'event_value': 1, 'non_interaction': true, 'page_path': '/similar_ads/price/orig-<?=$price_str_ad?>/card-viewall'});" href="<?=$price_url?>">View all</a>
                <?php }
                if (($price != 0 || !empty($price)) && $results_count_pricetotalland > 3) { ?>
                    <a data-all="1" class="btn btn-link-custom px-xl-4 view-all-similar" onclick="gtag('event', 'click', {'event_category': 'similar_ads', 'event_label': 'Click', 'event_value': 1, 'non_interaction': true, 'page_path': '/similar_ads/price/orig-<?=$price_str_ad?>/card-viewall'});" href="<?=$pricetotalland_url?>">View all</a>
                <?php } if (($price_sqft != 0 || !empty($price_sqft)) && $results_count_price_sqft > 3) { ?>
                    <a data-all="2" class="btn btn-link-custom px-xl-4 view-all-similar"  onclick="gtag('event', 'click', {'event_category': 'similar_ads', 'event_label': 'Click', 'event_value': 1, 'non_interaction': true, 'page_path': '/similar_ads/price/orig-<?=$price_str_ad?>/card-viewall'});" href="<?=$price_sqft_url?>">View all</a>
                <?php } if ($floor_area_min != '' && $results_count_sqft > 3) { ?>
                    <a data-all="3" class="btn btn-link-custom px-xl-4 view-all-similar" onclick="gtag('event', 'click', {'event_category': 'similar_ads', 'event_label': 'Click', 'event_value': 1, 'non_interaction': true, 'page_path': '/similar_ads/size/orig-<?=$floor_area_ad?>/card-viewall'});" href="<?=$sqft_url?>" >View all</a>
                <?php } if ($results_count_city > 3 && $city != '') { ?>
                    <a data-all="4" class="btn btn-link-custom px-xl-4 view-all-similar" onclick="gtag('event', 'click', {'event_category': 'similar_ads', 'event_label': 'Click', 'event_value': 1, 'non_interaction': true, 'page_path': '/similar_ads/city/orig-<?=$city?>/card-viewall'});" href="<?=$city_url?>"> View all</a>
                <?php }

                ?>
                <!--                    <a href="#" class="btn btn-link-custom px-xl-4">View all</a>-->
            </div>

            <div class="position-relative">

                    <div class="swiper other-project-swiper px-1 py-1 swiper-initialized swiper-horizontal swiper-pointer-events">
                        <div class="swiper-wrapper" style="transform: translate3d(0px, 0px, 0px); transition-duration: 0ms;" id="swiper-wrapper-d27e6e9c1d6cd22a" aria-live="polite">
                            <!--part one start-->
                            <?php
                            //   print_r($advers_pricetotalland);
                            if($results_count_pricetotalland > 1){
                                $sqft_count = 0;
                            //  btn 1 data-price="1"
                            foreach($advers_pricetotalland as $keyprice => $similprice) {
                            //   var_dump($similprice);
                                if($keyprice< 8 && $ad_id!=$similprice['ad_id']){
                                    $sqft_count++;
                                    if (strpos($similprice['pics'][0], 'thumb') !== false) {
                                        $picture = $similprice['pics'][0];
                                    } else {
                                        $picture = 'thumb_424_' . $similprice['pics'][0];
                                    }
                                    $pic_path_url = "https://www.lankapropertyweb.com/pics/".$similprice['ad_id']."/".$picture;
                                    if (@getimagesize($pic_path_url)) {
                                        $pic_path_url = $pic_path_url;
                                    }else{
                                        $pic_path_url = "https://www.lankapropertyweb.com/images/no_pic.png";
                                    }

                                    if($tab=='land') {
                                        $floorsize=$similprice['land_size'];
                                    } else{
                                        $floorsize=$similprice['floor_area'];
                                    }

                                    ?>
                                    <!--                                  button one      -->
                                    <div class="swiper-slide swiper-slide-item swiper-slide-active" data-price="1" style="width: 234.143px; margin-right: 15px;" role="group" aria-label="1 / 21">
                                        <div class="position-relative">

                                            <img class="img-fluid" src="<?=$pic_path_url; ?>" alt=""/>

                                            <!--                                        <img class="img-fluid" src="assets/img/details/other-projects/aas.jpg" alt="">-->

                                            <a onclick="gtag('event', 'click', {'event_category': 'similar_ads', 'event_label': '/similar_ads/size/orig-<?=$floor_area_ad?>/card-<?=$floorsize?>', 'event_callback': function() { window.location.href = '<?=$similprice['link']?>'; }, 'non_interaction': true});" href="<?=$similprice['link']?>" href="<?=$similprice['link']?>" class="icon-container">
                                                <img class="w-auto" src="/includes/img/details/details/camera.svg" alt="">
                                                <span>
                                               <?=$similprice['num_pics'];?>
                                            </span>
                                            </a>
                                        </div>
                                        <div class="icon-features d-flex justify-content-between align-items-center">
                                            <?php if($tab!='land') {?>
                                                <div class="d-flex align-items-center">
                                                    <img src="/includes/img/details/details/bed.svg" alt="">
                                                    <?=$similprice['rooms']?>
                                                </div>
                                            <?php  } ?>
                                            <?php if($tab=='land') {?>
                                                <div class="d-flex align-items-center">
                                                    <img src="./includes/img/details/details/scale.svg" alt="">
                                                    <?=$similprice['land_size']?>
                                                </div>
                                            <?php  } else{ ?>
                                                <div class="d-flex align-items-center">
                                                    <img src="/includes/img/details/details/scale.svg" alt="">
                                                    <?=$similprice['floor_area']?>
                                                </div>
                                            <?php  } ?>
                                        </div>
                                        <hr class="mx-3 mt-0">
                                        <ul class="list-unstyled">
                                            <li class="title">
                                                <a onclick="gtag('event', 'click', {'event_category': 'similar_ads', 'event_label': 'Click', 'event_callback': function() { window.location.href = '<?=$similprice['link']?>'; }, 'non_interaction': true});" href="<?=$similprice['link']?>">
                                                    <?=$similprice['heading']?>
                                                </a>
                                            </li>
                                            <li class="location">
                                                <i class="fa-solid fa-location-dot"></i>
                                                <?=$similprice['city']?>
                                            </li>
                                            <li class="price">
                                                <?php if ($similprice['price_str']){ echo $similprice['price_str']; }
                                                if ($similprice['price_type'] == 'ONO'){ ?> <span> <abbr title="Or near offer">ONO</abbr></span>  <?php }else{ ?> <span><?php echo $similprice['price_type'];?></span> <?php }  ?>
                                            </li>


                                        </ul>
                                    </div>


                                <?}
                            }
                            }
                            ?>

                            <!--  start second  data-price="2"-->
                            <?php
                            $sqft_count=0;
                            foreach($advers_price_sqft as $keyprice => $similprice_sqft) {
                                if($keyprice< 8 && $ad_id!=$similprice_sqft['ad_id']){
                                    if (strpos($similprice_sqft['pics'][0], 'thumb') !== false) {
                                        $picture = $similprice_sqft['pics'][0];
                                    } else {
                                        $picture = 'thumb_424_' . $similprice_sqft['pics'][0];
                                    }
                                    $pic_path_url = "https://www.lankapropertyweb.com/pics/".$similprice_sqft['ad_id']."/".$picture;
                                    if (@getimagesize($pic_path_url)) {
                                        $pic_path_url = $pic_path_url;
                                    }else{
                                        $pic_path_url = "https://www.lankapropertyweb.com/images/no_pic.png";
                                    }

                                    ?>
                                    <!-- data-price="2" button one      -->
                                    <div class="swiper-slide swiper-slide-item swiper-slide-active" data-price="2" style="width: 234.143px; margin-right: 15px;" role="group" aria-label="1 / 21">
                                        <div class="position-relative">

                                            <img class="img-fluid" src="<?=$pic_path_url; ?>" alt=""/>

                                            <!--                                        <img class="img-fluid" src="assets/img/details/other-projects/aas.jpg" alt="">-->

                                            <a onclick="gtag('event', 'click', {'event_category': 'similar_ads', 'event_label': '/similar_ads/size/orig-<?=$floor_area_ad?>/card-<?=$floorsize?>', 'event_callback': function() { window.location.href = '<?=$similval['link']?>'; }, 'non_interaction': true});" href="<?=$similval['link']?>" href="<?=$similval['link']?>" class="icon-container">
                                                <img class="w-auto" src="/includes/img/details/details/camera.svg" alt="">
                                                <span>
                                               <?=$similprice_sqft['num_pics'];?>
                                            </span>
                                            </a>
                                        </div>
                                        <div class="icon-features d-flex justify-content-between align-items-center">
                                            <?php if($tab!='land') {?>
                                                <div class="d-flex align-items-center">
                                                    <img src="/includes/img/details/details/bed.svg" alt="">
                                                    <?=$similprice_sqft['rooms']?>
                                                </div>
                                            <?php  } ?>
                                            <?php if($tab=='land') {?>
                                                <div class="d-flex align-items-center">
                                                    <img src="/includes/img/details/details/scale.svg" alt="">
                                                    <?=$similprice_sqft['land_size']?>
                                                </div>
                                            <?php  } else{ ?>
                                                <div class="d-flex align-items-center">
                                                    <img src="/includes/img/details/details/scale.svg" alt="">
                                                    <?=$similprice_sqft['floor_area']?>
                                                </div>
                                            <?php  } ?>
                                        </div>
                                        <hr class="mx-3 mt-0">
                                        <ul class="list-unstyled">
                                            <li class="title">
                                                <a onclick="gtag('event', 'click', {'event_category': 'similar_ads', 'event_label': 'Click', 'event_callback': function() { window.location.href = '<?=$similprice_sqft['link']?>'; }, 'non_interaction': true});" href="<?=$similprice_sqft['link']?>">
                                                    <?=$similprice_sqft['heading']?>
                                                </a>
                                            </li>
                                            <li class="location">
                                                <i class="fa-solid fa-location-dot"></i>
                                                <?=$similprice_sqft['city']?>
                                            </li>
                                            <li class="price">
                                                <?php if ($similprice_sqft['price_str'] ){ echo $similprice_sqft['price_str']; }
                                                if ($similprice_sqft['price_type'] == 'ONO'){ ?> <span> <abbr title="Or near offer">ONO</abbr></span>  <?php }else{ ?> <span><?php echo $similprice_sqft['price_type'];?></span> <?php }  ?>
                                            </li>

                                        </ul>
                                    </div>

                                <?}
                            }?>
                            <!--  end second part two     -->

                            <!--    part three     -->
                            <?php
                            $sqft_count=0;
                            //  data-price="3"
                            if($floor_area_min != '' && $results_count_sqft > 1 ){
                            foreach ($advers_sqft as $keysqft => $similval) {
                                if($sqft_count< 8 && $ad_id!=$similval['ad_id']){
                                    $sqft_count++;
                                    if (strpos($similval['pics'][0], 'thumb') !== false) {
                                        $picture = $similval['pics'][0];
                                    } else {
                                        $picture = 'thumb_424_' . $similval['pics'][0];
                                    }
                                    $pic_path_url = "https://www.lankapropertyweb.com/pics/".$similval['ad_id']."/".$picture;

                                    if (@getimagesize($pic_path_url)) {
                                        $pic_path_url = $pic_path_url;
                                    } else {
                                        $pic_path_url = "https://www.lankapropertyweb.com/images/no_pic.png";
                                    }

                                    if($tab=='land') {
                                        $floorsize=$similval['land_size'];
                                    } else{
                                        $floorsize=$similval['floor_area'];
                                    }

                                    ?>
                                    <!--                                  button one      -->
                                    <div class="swiper-slide swiper-slide-item swiper-slide-active" data-price="3" style="width: 234.143px; margin-right: 15px;" role="group" aria-label="1 / 21">
                                        <div class="position-relative">

                                            <img class="img-fluid" src="<?=$pic_path_url; ?>" alt=""/>

                                            <!--                                        <img class="img-fluid" src="assets/img/details/other-projects/aas.jpg" alt="">-->

                                            <a onclick="gtag('event', 'click', {'event_category': 'similar_ads', 'event_label': '/similar_ads/size/orig-<?=$floor_area_ad?>/card-<?=$floorsize?>', 'event_callback': function() { window.location.href = '<?=$similval['link']?>'; }, 'non_interaction': true});" href="<?=$similval['link']?>" href="<?=$similval['link']?>" class="icon-container">
                                                <img class="w-auto" src="/includes/img/details/details/camera.svg" alt="">
                                                <span>
                                               <?=$similval['num_pics'];?>
                                            </span>
                                            </a>
                                        </div>
                                        <div class="icon-features d-flex justify-content-between align-items-center">
                                            <?php if($tab!='land') {?>
                                                <div class="d-flex align-items-center">
                                                    <img src="/includes/img/details/details/bed.svg" alt="">
                                                    <?=$similval['rooms']?>
                                                </div>
                                            <?php  } ?>
                                            <?php if($tab=='land') {?>
                                                <div class="d-flex align-items-center">
                                                    <img src="/includes/img/details/details/scale.svg" alt="">
                                                    <?=$similval['land_size']?>
                                                </div>
                                            <?php  } else{ ?>
                                                <div class="d-flex align-items-center">
                                                    <img src="/includes/img/details/details/scale.svg" alt="">
                                                    <?=$similval['floor_area']?>
                                                </div>
                                            <?php  } ?>
                                        </div>
                                        <hr class="mx-3 mt-0">
                                        <ul class="list-unstyled">
                                            <li class="title">
                                                <a onclick="gtag('event', 'click', {'event_category': 'similar_ads', 'event_label': 'Click', 'event_callback': function() { window.location.href = '<?=$similval['link']?>'; }, 'non_interaction': true});" href="<?=$similval['link']?>">
                                                    <?=$similval['heading']?>
                                                </a>
                                            </li>
                                            <li class="location">
                                                <i class="fa-solid fa-location-dot"></i>
                                                <?=$similval['city']?>
                                            </li>
                                            <li class="price">
                                                <?php if ($similval['price_str'] ){ echo $similval['price_str']; }
                                                if ($similval['price_type'] == 'ONO'){ ?> <span> <abbr title="Or near offer">ONO</abbr></span>  <?php }else{ ?> <span><?php echo $similval['price_type'];?></span> <?php }  ?>
                                            </li>

                                        </ul>
                                    </div>
                                    <!--                                  button two      -->
                                    <!--                                 end    button two      -->

                                <?}
                            }?>
                          <?php }?>
                            <!--  end part three    -->

                            <!--  start four part  data-price="4"-->
                            <?php
                            $sqft_count=0;
                            foreach($advers_city as $keycity => $similcity) {
                                if($keycity< 8 && $ad_id!=$similcity['ad_id']) {
                                    if (strpos($similcity['pics'][0], 'thumb') !== false) {
                                        $picture = $similcity['pics'][0];
                                    } else {
                                        $picture = 'thumb_424_' . $similcity['pics'][0];
                                    }
                                    $pic_path_url = "https://www.lankapropertyweb.com/pics/".$similcity['ad_id']."/".$picture;
                                    if (@getimagesize($pic_path_url)) {
                                        $pic_path_url = $pic_path_url;
                                    }else{
                                        $pic_path_url = "https://www.lankapropertyweb.com/images/no_pic.png";
                                    }

                                    ?>
                                    <div class="swiper-slide swiper-slide-item swiper-slide-active" data-price="4" style="width: 234.143px; margin-right: 15px;" role="group" aria-label="1 / 21">
                                        <div class="position-relative">

                                            <img class="img-fluid" src="<?=$pic_path_url; ?>" alt=""/>

                                            <!--                                        <img class="img-fluid" src="assets/img/details/other-projects/aas.jpg" alt="">-->

                                            <a onclick="gtag('event', 'click', {'event_category': 'similar_ads', 'event_label': '/similar_ads/size/orig-<?=$floor_area_ad?>/card-<?=$floorsize?>', 'event_callback': function() { window.location.href = '<?=$similcity['link']?>'; }, 'non_interaction': true});" href="<?=$similcity['link']?>" href="<?=$similcity['link']?>" class="icon-container">
                                                <img class="w-auto" src="/includes/img/details/details/camera.svg" alt="">
                                                <span>
                                               <?=$similcity['num_pics'];?>
                                            </span>
                                            </a>
                                        </div>
                                        <div class="icon-features d-flex justify-content-between align-items-center">
                                            <?php if($tab!='land') {?>
                                                <div class="d-flex align-items-center">
                                                    <img src="/includes/img/details/details/bed.svg" alt="">
                                                    <?=$similcity['rooms']?>
                                                </div>
                                            <?php  } ?>
                                            <?php if($tab=='land') {?>
                                                <div class="d-flex align-items-center">
                                                    <img src="/includes/img/details/details/scale.svg" alt="">
                                                    <?=$similcity['land_size']?>
                                                </div>
                                            <?php  } else{ ?>
                                                <div class="d-flex align-items-center">
                                                    <img src="/includes/img/details/details/scale.svg" alt="">
                                                    <?=$similcity['floor_area']?>
                                                </div>
                                            <?php  } ?>
                                        </div>
                                        <hr class="mx-3 mt-0">
                                        <ul class="list-unstyled">
                                            <li class="title">
                                                <a onclick="gtag('event', 'click', {'event_category': 'similar_ads', 'event_label': 'Click', 'event_callback': function() { window.location.href = '<?=$similcity['link']?>'; }, 'non_interaction': true});" href="<?=$similcity['link']?>">
                                                    <?=$similcity['heading']?>
                                                </a>
                                            </li>
                                            <li class="location">
                                                <i class="fa-solid fa-location-dot"></i>
                                                <?=$similcity['city']?>
                                            </li>
                                            <li class="price">
                                                <?php if ($similcity['price_str'] ){ echo $similcity['price_str']; }
                                                if ($similcity['price_type'] == 'ONO'){ ?> <span> <abbr title="Or near offer">ONO</abbr></span>  <?php }else{ ?> <span><?php echo $similcity['price_type'];?></span> <?php }  ?>
                                            </li>

                                        </ul>
                                    </div>

                                <?}
                            }?>


                            <!--  start five part  data-price="5"-->
                            <?php
                            $sqft_count=0;
//                            print_r($advers_price);
//                            echo $advers_price;
                            foreach($advers_price as $keyprice => $similprice) {
                                if($keyprice< 8 && $ad_id!=$similprice['ad_id']){
                                    if (strpos($similprice['pics'][0], 'thumb') !== false) {
                                        $picture = $similprice['pics'][0];
                                    } else {
                                        $picture = 'thumb_424_' . $similprice['pics'][0];
                                    }
                                    $pic_path_url = "https://www.lankapropertyweb.com/pics/".$similprice['ad_id']."/".$picture;
                                    if (@getimagesize($pic_path_url)) {
                                        $pic_path_url = $pic_path_url;
                                    }else{
                                        $pic_path_url = "https://www.lankapropertyweb.com/images/no_pic.png";
                                    }
                                    ?>
                                    <div class="swiper-slide swiper-slide-item swiper-slide-active" data-price="5" style="width: 234.143px; margin-right: 15px;" role="group" aria-label="1 / 21">
                                        <div class="position-relative">

                                            <img class="img-fluid" src="<?=$pic_path_url; ?>" alt=""/>

                                            <!--                                        <img class="img-fluid" src="assets/img/details/other-projects/aas.jpg" alt="">-->

                                            <a onclick="gtag('event', 'click', {'event_category': 'similar_ads', 'event_label': '/similar_ads/size/orig-<?=$floor_area_ad?>/card-<?=$floorsize?>', 'event_callback': function() { window.location.href = '<?=$similprice['link']?>'; }, 'non_interaction': true});" href="<?=$similprice['link']?>" href="<?=$similprice['link']?>" class="icon-container">
                                                <img class="w-auto" src="/includes/img/details/details/camera.svg" alt="">
                                                <span>
                                               <?=$similprice['num_pics'];?>
                                            </span>
                                            </a>
                                        </div>
                                        <div class="icon-features d-flex justify-content-between align-items-center">
                                            <?php if($tab!='land') {?>
                                                <div class="d-flex align-items-center">
                                                    <img src="/includes/img/details/details/bed.svg" alt="">
                                                    <?=$similprice['rooms']?>
                                                </div>
                                            <?php  } ?>
                                            <?php if($tab=='land') {?>
                                                <div class="d-flex align-items-center">
                                                    <img src="/includes/img/details/details/scale.svg" alt="">
                                                    <?=$similprice['land_size']?>
                                                </div>
                                            <?php  } else{ ?>
                                                <div class="d-flex align-items-center">
                                                    <img src="/includes/img/details/details/scale.svg" alt="">
                                                    <?=$similprice['floor_area']?>
                                                </div>
                                            <?php  } ?>
                                        </div>
                                        <hr class="mx-3 mt-0">
                                        <ul class="list-unstyled">
                                            <li class="title">
                                                <a onclick="gtag('event', 'click', {'event_category': 'similar_ads', 'event_label': 'Click', 'event_callback': function() { window.location.href = '<?=$similprice['link']?>'; }, 'non_interaction': true});" href="<?=$similprice['link']?>">
                                                    <?=$similprice['heading']?>
                                                </a>
                                            </li>
                                            <li class="location">
                                                <i class="fa-solid fa-location-dot"></i>
                                                <?=$similprice['city']?>
                                            </li>
                                            <li class="price">
                                                <?php if ($similprice['price_str'] ){ echo $similprice['price_str']; }
                                                if ($similprice['price_type'] == 'ONO'){ ?> <span> <abbr title="Or near offer">ONO</abbr></span>  <?php }else{ ?> <span><?php echo $similprice['price_type'];?></span> <?php }  ?>
                                            </li>

                                        </ul>
                                    </div>

                                <?}
                            }?>
                            <!--  start five part  data-price="5"-->

<!--                            start all 4-->
                            <!--  part 5 end -->
                            <?php if($results_count_price > 3 ){ ?>
                                <a  data-price="5" onclick="gtag('event', 'click', {'event_category': 'similar_ads', 'event_label': 'Click', 'event_callback': function() { window.location.href = '<?=$price_url?>'; }, 'non_interaction': true});" href="<?=$price_url?>" class="swiper-slide swiper-slide-item d-flex justify-content-center align-items-center flex-column view-more-slide" data-price="4" style="width: 234.143px; margin-right: 15px;" role="group" aria-label="21 / 21">
                                    <div class="icon-circle">
                                        <img src="/includes/img/details/details/right-arrow.svg" alt="">
                                    </div>
                                        <p class="mt-4" style="text-align: center !important;">
                                            VIEW ALL PROPERTIES Within <?=$price_option_str?> range <?=$price_actual_str?> <br />(<?=$results_count_price?>)
                                        </p>
                                </a>
                            <?php } ?>
                            <!--  part 5 end -->
                            <!--  part 4 -->
                            <?php if($results_count_city > 3 && $city!=''){ ?>
                                    <a  onclick="gtag('event', 'click', {'event_category': 'similar_ads', 'event_label': 'Click', 'event_callback': function() { window.location.href = '<?=$city_url?>'; }, 'non_interaction': true});"  class="swiper-slide swiper-slide-item d-flex justify-content-center align-items-center flex-column view-more-slide" data-price="4" style="width: 234.143px; margin-right: 15px;" role="group" aria-label="21 / 21">
                                        <div class="icon-circle">
                                            <img src="/includes/img/details/details/right-arrow.svg" alt="">
                                        </div>

                                        <p class="mt-4" style="text-align: center !important;">
                                            VIEW ALL PROPERTIES FOR <?=$showtab?> in <?=$city?> <br />(<?=$results_count_city?>)
                                        </p>
                                    </a>
                                <?php } ?>
                            <!--  end part 4 -->

                            <!--  part 3 -->
                            <?php if($floor_area_min != '' && $results_count_sqft > 3){ ?>
                                <a  onclick="gtag('event', 'click', {'event_category': 'similar_ads', 'event_label': '/similar_ads/size/orig-<?=$floor_area_ad?>/card-viewall', 'event_callback': function() { window.location.href = '<?=$sqft_url?>'; }, 'non_interaction': true});" href="<?=$sqft_url?>" class="swiper-slide swiper-slide-item d-flex justify-content-center align-items-center flex-column view-more-slide" data-price="3" style="width: 234.143px; margin-right: 15px;" role="group" aria-label="21 / 21">
                                    <div class="icon-circle">
                                        <img src="/includes/img/details/details/right-arrow.svg" alt="">
                                    </div>
                                    <?php if($tab == 'land'){ ?>
                                        <p class="mt-4"  style="text-align: center !important;">
                                            VIEW ALL PROPERTIES Within the per perches range <?=$floor_area_range?>, in 5km radius <br />(<?=$results_count_sqft?>)
                                        </p>
                                    <?php }else{ ?>
                                        <p class="mt-4" style="text-align: center !important;">
                                            VIEW ALL PROPERTIES Within the sq. ft. range <?=$floor_area_range?>, in 5km radius <br />(<?=$results_count_sqft?>)
                                        </p>

                                    <?php }?>
                                </a>
                            <?php } ?>
                            <!--  part 3 end -->

                            <!--  part 2 -->
                            <?php if($results_count_price_sqft > 1 ){ ?>
                                    <a  onclick="gtag('event', 'click', {'event_category': 'similar_ads', 'event_label': 'Click', 'event_callback': function() { window.location.href = '<?=$price_sqft_url?>'; }, 'non_interaction': true});"  class="swiper-slide swiper-slide-item d-flex justify-content-center align-items-center flex-column view-more-slide" data-price="2" style="width: 234.143px; margin-right: 15px;" role="group" aria-label="21 / 21">
                                        <div class="icon-circle">
                                            <img src="/includes/img/details/details/right-arrow.svg" alt="">
                                        </div>

                                        <p class="mt-4" style="text-align: center !important;">
                                            VIEW ALL PROPERTIES Within total price range <?=$price_sqft_price_str?> <br />(<?=$results_count_price_sqft?>)
                                        </p>
                                    </a>

                            <?php } ?>
                            <!--  part 2 end -->

                            <!--  part 1 -->
                    <?php if($results_count_pricetotalland > 3 ){ ?>

                        <a  onclick="gtag('event', 'click', {'event_category': 'similar_ads', 'event_label': 'Click', 'event_callback': function() { window.location.href = '<?=$pricetotalland_url?>'; }, 'non_interaction': true});" class="swiper-slide swiper-slide-item d-flex justify-content-center align-items-center flex-column view-more-slide" data-price="1" style="width: 234.143px; margin-right: 15px;" role="group" aria-label="21 / 21">
                            <div class="icon-circle">
                                <img src="/includes/img/details/details/right-arrow.svg" alt="">
                            </div>

                            <p class="mt-4" style="text-align: center !important;">
                                VIEW ALL PROPERTIES Within total price range <?=$priceland_actual_str?> <br />(<?=$results_count_pricetotalland?>)
                            </p>
                        </a>
                    <?php } ?>
                            <!--  part 1 end-->
                        </div>

                        <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span>
                    </div>

                <!--                        end suwper-->
                <div class="swiper-button-prev other-project-prev swiper-button custom-swiper-nav swiper-button-disabled" tabindex="-1" role="button" aria-label="Previous slide" aria-controls="swiper-wrapper-d27e6e9c1d6cd22a" aria-disabled="true"></div>
                <div class="swiper-button-next other-project-next swiper-button custom-swiper-nav" tabindex="0" role="button" aria-label="Next slide" aria-controls="swiper-wrapper-d27e6e9c1d6cd22a" aria-disabled="false"></div>

            </div>

        </div>

    </div>

<?php } ?>