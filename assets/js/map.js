$(document).ready(()=>{
    $('#showOnMap').change((value)=>{
        if ($('#showOnMap').is(':checked')) {
            console.log('checked');

            $('#map-parent').addClass('map-enabled');

        }else {
            console.log('not checked');
            $('#map-parent').removeClass('map-enabled');

        }
    });

});


let map;

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: new google.maps.LatLng(-33.91722, 151.23064),
        zoom: 16,
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

    // Create markers.
    for (let i = 0; i < features.length; i++) {
        const marker = new google.maps.Marker({
            position: features[i].position,
            map: map,
        });
    }
}

window.initMap = initMap;
