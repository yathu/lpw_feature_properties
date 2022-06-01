$(document).ready(() => {

    $(".mapView").scroll(function () {
        console.log('scrool.....');
    });

    $('#showOnMap').change((value) => {
        if ($('#showOnMap').is(':checked')) {
            console.log('checked');

            $('#map-parent').addClass('map-enabled');
            $('.filter-form-container').addClass('sticky-top');

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
        // streetViewControl: false,
        mapTypeControl: false,
        fullscreenControl: false,
        styles: [
            {
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    }
                ]
            },
            {
                "elementType": "labels.icon",
                "stylers": [
                    {
                        "visibility": "off"
                    }
                ]
            },
            {
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "elementType": "labels.text.stroke",
                "stylers": [
                    {
                        "color": "#f5f5f5"
                    }
                ]
            },
            {
                "featureType": "administrative.land_parcel",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#bdbdbd"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                ]
            },
            {
                "featureType": "poi",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e5e5e5"
                    }
                ]
            },
            {
                "featureType": "poi.park",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "road",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#ffffff"
                    }
                ]
            },
            {
                "featureType": "road.arterial",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#757575"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#dadada"
                    }
                ]
            },
            {
                "featureType": "road.highway",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#616161"
                    }
                ]
            },
            {
                "featureType": "road.local",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            },
            {
                "featureType": "transit.line",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#e5e5e5"
                    }
                ]
            },
            {
                "featureType": "transit.station",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#eeeeee"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "geometry",
                "stylers": [
                    {
                        "color": "#c9c9c9"
                    }
                ]
            },
            {
                "featureType": "water",
                "elementType": "labels.text.fill",
                "stylers": [
                    {
                        "color": "#9e9e9e"
                    }
                ]
            }
        ],
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
        '<div id="content" style="background: #FFFFFF;border-radius: 4px; margin-left: 5px;margin-top: 5px;min-width: 250px;min-height: 264px;">' +
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

    const svgMarker = {
        path: "M16.4678684,0 C7.38765789,0 0,6.72916992 0,15.0000293 C0,17.4829395 0.681517544,19.9447559 1.97710526,22.1283105 L15.5673158,44.5166016 C15.7482368,44.8150781 16.093,45 16.4678684,45 C16.8427368,45 17.1875,44.8150781 17.3684211,44.5166016 L30.9636491,22.1209277 C32.2542193,19.9447559 32.9357368,17.4828516 32.9357368,14.9999414 C32.9357368,6.72916992 25.5480789,0 16.4678684,0 Z M16.4678684,22.5 C11.9277632,22.5 8.23398246,19.135459 8.23398246,15.0000293 C8.23398246,10.8645996 11.9277632,7.50005859 16.4678684,7.50005859 C21.0079737,7.50005859 24.7017544,10.8645996 24.7017544,15.0000293 C24.7017544,19.135459 21.0079737,22.5 16.4678684,22.5 Z",
        fillColor: "#2a8e36",
        fillOpacity: 0.8,
        strokeWeight: 0,
        rotation: 0,
        scale: 1,
        anchor: new google.maps.Point(15, 30),
    };

    // Create markers.
    const markers = features.map((data, i) => {
        const marker = new google.maps.Marker({
            position: data.position,
            map: map,
            icon: svgMarker,
            // icon:'assets/img/marker.svg',
        });


        // marker.addListener("click", (val) => {
        //     console.log("click", val);
        //
        //     infowindow.setOptions({maxWidth: 285});
        //     infowindow.setOptions({minWidth: 285});
        //     infowindow.setOptions({maxHeight: 293});
        //     infowindow.setOptions({minHeight: 293});
        //
        //     infowindow.open({
        //         anchor: marker,
        //         map,
        //         shouldFocus: false,
        //     });
        // });

        //
        marker.addListener('mouseover', function () {
            infowindow.open({
                anchor: marker,
                map,
                shouldFocus: false,
            });
        });

// assuming you also want to hide the infowindow when user mouses-out
        marker.addListener('mouseout', function () {
            infowindow.close();
        });

        return marker;
    });

    // console.log(markers);

    $(".property-list-item").hover(
        function () {

            try {
                console.log(map.controls);


                const index = $(this).data("index");
                google.maps.event.trigger(markers[index], 'mouseover');

            } catch (e) {
                console.log('error==>', e);
            }

        }, function () {

            const index = $(this).data("index");
            google.maps.event.trigger(markers[index], 'mouseout');

        }
    );

    mcOptions = {
        styles: [{
            height: 54,
            url: "assets/img/cluster.svg",
            width: 54,
            textColor: '#fff',
        }
        ]
    };

    var mc = new MarkerClusterer(map, markers, mcOptions);

    // const markerCluster = new markerClusterer.MarkerClusterer({ map, markers});


}

window.initMap = initMap;
