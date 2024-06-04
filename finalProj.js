/* Author: Noah Dane

Final Project: Interactive UCSC map

*/

var map = L.map('map').setView([36.9819578, -122.0540163], 15);


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);


var koiIcon = L.icon({
    iconUrl: 'img/koi.png',
    iconSize: [38, 95],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
    shadowUrl: 'img/koi.png',
    shadowSize: [68, 95],
    shadowAnchor: [22, 94]
});

const markers = [
    {
        name: 'koiMarker',
        url: '/lab12/index.html',
        icon: koiIcon,
        position: [36.9819578, -122.0540163],
    },
    {
        name: 'marker2',
        url: 'url.com',
        position: [36.9919699, -122.0540175],
    }
]



for (i = 0; i < 2; i++) {
    marker = L.marker(markers[i].position, {icon: markers[i].icon, ndurl: markers[i].url}).addTo(map);
    marker.on('click', onMarkerClick);
}


function onMarkerClick(e) {
    $.get(e.target.options.ndurl, function( response ) {
        L.popup()  
                .setLatLng(e.latlng)
                .setContent(response)
                .openOn(map);
        console.log(e); // server response
    });
    
}






