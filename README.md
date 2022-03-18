# Mapping Earthquakes
## Purpose and Overview
The purpose of this project was to map earthquakes that have occurred globally within the past seven days.  Earthquake locations were highlighted by the relative size and color of circle markers. A corresponding pop-up marker conveyed location and magnitude information for each earthquake. The following deliverables were also requested:
 - Tectonic plate data as an overlay
 - Major earthquake data (> 4.5) within the past week as an overlay
 - An additional base layer map


## Resources
Data and Information Sources: 
 - Tectonic plates boundary map (https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_boundaries.json) (credits: Hugo Ahlenius, Nordpil, and Peter Bird), accessed 17 March 2022.
 - Earthquakes for the past 7 days (https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson), accessed 17 March 2022.
 - Earthquakes > 4.5 for the past 7 days (https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_week.geojson), accessed 17 March 2022.

Software and Programming Languages:
 - Leaflet v 1.7.1 (credits: Vladimir Agafonkin)
 - D3.js (https://d3js.org/d3.v5.min.js) (credits: Mike Bostock, 2020)
 - Mapbox Static Tiles API (https://api.mapbox.com/styles/)
 - HTML, JavaScript, CSS


## Results
A base layer with three maps was created with three overlays for tectonic plate boundaries, earthquakes for the past seven days, and earthquakes greater than 4.5 for the last seven days.  Earthquakes were highlighted with circle markers that depicted the relative magnitude of earthquakes as shown by circle size and color.  Pop-up markers were included for each location that conveyed location and magnitude.
