// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
//let map = L.map('mapid').setView([30, 30], 2);
// Use [34.0522, -118.2437], 14) for Los Angeles
// Use [40.7, -94.5], 4) for North America
// Use [36.1733, -120.1794], 7) for California
// Use [37.6213, -122.3790], 5) for center at San Francisco airport
// Use [30, 30], 2 for geographical center of the Earth
// Use [43.7, -79.3, 11] for Toronto
// Use [39.5, -98.5], 3 for geographic center of US

// Add GeoJSON data.
// let sanFranAirport =
// {"type":"FeatureCollection","features":[{
//     "type":"Feature",
//     "properties":{
//         "id":"3469",
//         "name":"San Francisco International Airport",
//         "city":"San Francisco",
//         "country":"United States",
//         "faa":"SFO",
//         "icao":"KSFO",
//         "alt":"13",
//         "tz-offset":"-8",
//         "dst":"A",
//         "tz":"America/Los_Angeles"},
//         "geometry":{
//             "type":"Point",
//             "coordinates":[-122.375,37.61899948120117]}}
// ]};

// Grabbing our GeoJSON data and add to map.
// L.geoJSON(sanFranAirport).addTo(map);

//Grabbing our GeoJSON data using onEachFeature funtion and add to map.


//Grabbing our GeoJSON data using onEachFeature funtion and add to map.
// L.geoJSON(sanFranAirport, {
//     // We turn each feature into a marker on the map.
//     onEachFeature: function(feature, layer) {
//       console.log(layer);
//       layer.bindPopup("<h2> Airport code: " + feature.properties.faa + "</h2> <hr> <h2> Airport name: " + feature.properties.name + "</h2>")
//     }
//   }).addTo(map);

// Grabbing our GeoJSON data using pointToLayer function and add to map.
//L.geoJSON(sanFranAirport, {
    // We turn each feature into a marker on the map.
//    pointToLayer: function(feature, latlng) {
//      console.log(feature);
//     return L.marker(latlng)
//      .bindPopup("<h2>" + feature.properties.name + "</h2> <hr> <h3>" + feature.properties.city + ", " + feature.properties.country + "</h3>")
//    }

//  }).addTo(map);

// Coordinates for each point to be used in the line.
// let line = [
//      [33.9416, -118.4085],
//      [37.6213, -122.3790],
//      [40.7899, -111.9791],
//      [47.4502, -122.3088]
//    ];

// Create a polyline using the line coordinates and make the line red.
// L.polyline(line, {
//      color: "yellow"
//    }).addTo(map);

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
// let cityData = cities;

// // Loop through the cities array and create one marker for each city.
// cityData.forEach(function(city) {
//       console.log(city)
//       L.circleMarker(city.location, {
//             radius: city.population/100000,
//             color: "orange",
//             lineweight: 4,
//       })
//       .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>") 
//       .addTo(map);
// });

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
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
   attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
   maxZoom: 18,
   accessToken: API_KEY
});

// Use 'streets-v11' for the simple map background and 'dark-v10' for a dark map above in tileLayer https
// Use 'satellite-streets-v11' for map lines
// Use 'navigation-night-v1' for night view
// Use 'light-v10 for light
// Use 'dark-v10 for dark

// Then we add our 'graymap' tile layer to the map.
// streets.addTo(map);


// We create the dark view tile layer that will be an option for our second map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// Create a base layer that holds both maps.
let baseMaps = {
    "Streets": streets,
    "Satellite": satelliteStreets
  };

// Create the map object with center, zoom level and default layer.
let map = L.map('mapid', {
    center: [39.5, -98.5],
  //center: [30, 30], for geo center of Earth
    zoom: 3,
    layers: [streets]
});

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

// Retrieve the earthquake GeoJSON data.
d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(function(data) {
  // Creating a GeoJSON layer with the retrieved data.
  L.geoJSON(data).addTo(map);
});


// Accessing the Toronto neighborhoods JSON file URL.
//let torontoHoods = "https://raw.githubusercontent.com/Christy-cyber/Mapping_Earthquakes/main/torontoNeighborhoods.json";

// Accessing the airport GeoJSON URL
//let airportData = "https://raw.githubusercontent.com/Christy-cyber/Mapping_Earthquakes/main/majorAirports.json";

// Create a style for the lines.
// let myStyle = {
//   //color: yellow,
//   color: "#ffffa1",
//   weight: 2
// }

// // Grabbimg GeoJSON data for Toronto
// d3.json(torontoHoods).then(function(data) {
//   console.log(data);
//   // Creating a GeoJSON layer with the retrieved data.
//   //L.geoJSON(data).addTo(map);
//   L.geoJSON(data, {
//       color: "#ffffa1",
//       weight: 1,
//         style: myStyle,
//         onEachFeature: function(feature, layer) {
//           layer.bindPopup("<h3> Neighborhood: " + feature.properties.AREA_NAME + "</h3");
//       }
//     })
//    .addTo(map);
//     });
 
 
//  L.geoJSON(data).addTo(map);
//  color: "#ffffa1",
//  weight: 2
//    style: myStyle,
//    onEachFeature: function(feature, layer) {
//      layer.bindPopup("<h3> Airline: " + feature.properties.airline + "</h3> <hr> <h3> Destination: " + feature.properties.dst + "</h3");
//});

// Grabbing our GeoJSON data for airport Data.
// d3.json(airportData).then(function(data) {
//     console.log(data);
//   // Creating a GeoJSON layer with the retrieved data.
// //  L.geoJSON(data).addTo(map);
//    L.geoJSON(data, {
//      // We turn each feature into a marker on the map.
//      onEachFeature: function(feature, layer) {
//        console.log(layer);
//        layer.bindPopup("<h2> Airport code: " + feature.properties.faa + "</h2> <hr> <h2> Airport name: " + feature.properties.name + "</h2>")
//      }
//    }).addTo(map);
  
//});

// L.geoJSON(airportData, {
//     // We turn each feature into a marker on the map.
//     onEachFeature: function(feature, layer) {
//       console.log(layer);
//       layer.bindPopup("<h2> Airport code: " + feature.properties.faa + "</h2> <hr> <h2> Airport name: " + feature.properties.name + "</h2>")
//     }
//   }).addTo(map);
