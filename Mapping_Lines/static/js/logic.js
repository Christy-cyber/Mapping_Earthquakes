// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
let map = L.map('mapid').setView([40.7, -94.5], 4);
// Use [34.0522, -118.2437], 14) for Los Angeles


//    Create the tile layer that will be the background of our map using Leaflet documentation.
//let streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
//    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//    maxZoom: 18,
//    id: 'mapbox/streets-v11',
//    tileSize: 512,
//    zoomOffset: -1,
//    accessToken: API_KEY
//});

// Get data from cities.js
let cityData = cities;

// Loop through the cities array and create one marker for each city.
cityData.forEach(function(city) {
      console.log(city)
      L.circleMarker(city.location, {
            radius: city.population/100000,
            color: "orange",
            lineweight: 4,
      })
      .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>") 
      .addTo(map);
});

// Add a circleMarker to the map for Los Angeles, California, with a 300 pixel radius.
//let marker = L.circleMarker([34.0522, -118.2437], {
//      radius: 300,
//      color: "black",
//     fillColor: '#ffffa1'
//}).addTo(map);

// To add a marker for LA, use: L.marker([34.0522, -118.2437]).addTo(map);
// To add a circle with a 100 m radius, use: L.circle([34.0522, -118.2437], {
//    radius: 100

// Code for doing the above using Mapbox Syles API below
// Create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token={accessToken}', {
 attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
 maxZoom: 18,
 accessToken: API_KEY
});

// Use 'streets-v11' for the simple map background and 'dark-v10' for a dark map above in tileLayer https

// Then we add our 'graymap' tile layer to the map.
streets.addTo(map);