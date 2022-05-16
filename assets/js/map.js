
$(document).ready(() => {

    $('#showOnMap').change((value) => {
        if ($('#showOnMap').is(':checked')) {
            console.log('checked');

            $('#map-parent').addClass('map-enabled');

        } else {
            console.log('not checked');
            $('#map-parent').removeClass('map-enabled');

        }
    });

});

let map;
function initMap() {

    map = new google.maps.Map(document.getElementById("map"), {
        center: new google.maps.LatLng(-33.91722, 151.23064),
        zoom: 10,
    });

    const features = [
        {
            position: new google.maps.LatLng(-33.91721, 151.2263),
            type: "info",
        },
        {
            position: new google.maps.LatLng(-33.91539, 151.2282),
            type: "info",
        },
        {
            position: new google.maps.LatLng(-33.91747, 151.22912),
            type: "info",
        },
        {
            position: new google.maps.LatLng(-33.9191, 151.22907),
            type: "info",
        },
        {
            position: new google.maps.LatLng(-33.91725, 151.23011),
            type: "info",
        },
        {
            position: new google.maps.LatLng(-33.91872, 151.23089),
            type: "info",
        },
        {
            position: new google.maps.LatLng(-33.91784, 151.23094),
            type: "info",
        },
        {
            position: new google.maps.LatLng(-33.91682, 151.23149),
            type: "info",
        },
        {
            position: new google.maps.LatLng(-33.9179, 151.23463),
            type: "info",
        }
    ];


    const contentString =
        '<div id="content" style="background: #FFFFFF;border-radius: 4px; margin-left: 5px;margin-top: 5px;">' +
        '<img style="width: 100%;width: 250px; height: 150px; object-fit: cover;margin-bottom: 15px;" src="https://i.picsum.photos/id/201/270/300.jpg?hmac=eUPYnIrqhvHmZB0_vluUvJSEHy7HLvIvvsc8V8V3a98"/>' +
        '<h1 style="font-family: Rubik-Medium; line-height:1;' + 'font-size: 20px;' + 'color: #202330;' + 'letter-spacing: -0.37px;">JAT - 146 Residents</h1>' +
        '<p style="font-family: Rubik-Regular; font-size: 16px; color: #71757B; line-height: 1; margin-bottom: 0;"> Thalawathugoda</p>' +
        '<div style="display: flex; flex-wrap: nowrap; margin-top: 15px; align-items: flex-end">' +
        '<div style="width: 50%;">' +
        '<h2 style="font-family: Rubik-Medium; font-size: 18px; color: #029432; line-height: 20px;margin-bottom: 0;">Rs. 34.5 Mn</h2>' +
        '<h2 style="font-family: Rubik-Medium; font-size: 18px; color: #71757B; line-height: 20px;margin-bottom: 0;">Upwards</h2>' +
        '</div>' +
        '<div style="width: 50%;"> ' +
        '<a href="#" style="text-decoration: none;background-color: #FF4501;width: 100%;font-family: Rubik-Medium;font-size: 14px;color: #FFFFFF;text-align: center; display: block; border-radius: 4px; padding: 10px 15px;">VIEW MORE</a> </div>' +
        '</div>' +
        "</div>";



    const infowindow = new google.maps.InfoWindow({
        content: contentString,
    });

    // Create markers.
   const markers = features.map((data,i)=>{
        const marker = new google.maps.Marker({
            position: data.position,
            map: map,
        });


        // marker.addListener("click", (val) => {
        //     console.log("click", val);
        //     infowindow.open({
        //         anchor: marker,
        //         map,
        //         shouldFocus: false,
        //     });
        // });

       marker.addListener('mouseover', function() {
           infowindow.open({
               anchor: marker,
               map,
               shouldFocus: false,
           });
       });

// assuming you also want to hide the infowindow when user mouses-out
       marker.addListener('mouseout', function() {
           infowindow.close();
       });

        return marker;
    });

   console.log(markers);

    // new MarkerClusterer({ markers, map });
    const markerCluster = new markerClusterer.MarkerClusterer({ map, markers });


}

window.initMap = initMap;
