/* Author: Noah Dane

Final Project: Interactive UCSC map

*/

var map = L.map('map').setView([36.9920578, -122.0590163], 15);


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


var koiIcon = L.icon({
    iconUrl: 'img/koi.png', //image for markers
    iconSize: [38, 95],  //size of markers easily adjustible here
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
});

var barrelIcon = L.icon({
    iconUrl: 'img/barrels1.png',
    iconSize: [38, 95],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
});


const markers = [
    {
        name: 'koiMarker',
        url: 'localeDescs/koiPond.html', //the link here will be displayed as a small popup when the marker is clicked
        icon: koiIcon, //links to the variable created above that holds all the data for each marker
        position: [37.000205, -122.048274],
    },
    {
        name: 'barrelsMarker',
        url: 'url.com',
        icon: barrelIcon,
        position: [37.010012, -122.066216],
    }
]



for (i = 0; i < 2; i++) { //loops through and adds all the markers in the markers library that is created above
    marker = L.marker(markers[i].position, {icon: markers[i].icon, ndurl: markers[i].url}).addTo(map);
    marker.on('click', onMarkerClick);
}


function onMarkerClick(e) {
    $.get(e.target.options.ndurl, function( response ) {
        L.popup({maxHeight: 400})  
                .setLatLng(e.latlng)
                .setContent(response)
                .openOn(map);
        console.log(e); // server response
    });
    
}






