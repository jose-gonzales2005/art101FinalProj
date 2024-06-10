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
    iconUrl: 'img/barrels.jpeg',
    iconSize: [38, 95],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
});

var rockIcon = L.icon({
    iconUrl: 'img/rockgarden.jpg',
    iconSize: [38, 95],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76]
});
var buddhaIcon = L.icon({
    iconUrl: 'img/buddahut.jpg',
    iconSize: [38, 95],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
});
var catsCradleIcon = L.icon({
    iconUrl: 'img/catscradle.jpg',
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
        url: 'localeDescs/barrels.html',
        icon: barrelIcon,
        position: [37.010012, -122.066216],
    },
    {
        name: 'rockMarker',
        url: 'localeDescs/rockGarden.html',
        icon: rockIcon,
        position: [37.001043, -122.049504]
    },
    {
        name: 'buddhaMarker',
        url: 'localeDescs/buddha.html',
        icon: buddhaIcon,
        position: [37.006623, -122.060037],
    },
    {
        name: 'catsCradleMarker',
        url: 'localeDescs/catsCradle.html',
        icon: catsCradleIcon,
        position: [37.006868, -122.056390],
    }
]



for (i = 0; i < 5; i++) { //loops through and adds all the markers in the markers library that is created above
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






