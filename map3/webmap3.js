let map3 = L.map('map3').setView([30.4077116,-91.1818346], 4)
L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_nolabels/{z}/{x}/{y}.png').addTo(map3)
var OpenTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
	maxZoom: 17,
	attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
});
let stateDemographicsUrl = 'https://geog4046.github.io/portfolio/data/us_state_demographics_ESRI_2010A.geojson'
jQuery.getJSON(stateDemographicsUrl, function (data) {
  L.geoJSON(data).addTo(stateMap)
})
let stateStyle = function (feature) {
  let age = feature.properties.MED_AGE // get the current state's Median Age attribute
  let stateColor = 'olive' // let the initial color be a darker green
  if ( age < 38 ) { stateColor = 'green' } // if the state's median age is less than the average, color it a lighter green
  return {
    color: stateColor, //use the color variable above for the value
    weight: 1,
    fillOpacity: 0.2
  }
}
   let stateGeojsonOptions = {
 style: stateStyle,
 onEachFeature: onEachFeature
   }
      let onEachFeature = function (feature, layer) {
     let name = feature.properties.STATE_NAME
     let age = feature.properties.MED_AGE
     layer.bindPopup('Median age of ' + name + ': ' + age + '<br>National average: 38')
   }
      L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}').addTo(renameThis)
let grayBasemap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}').addTo(renameThis)
let streetsBasemap = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}').addTo(renameThis)
let basemaps = {
  'Streets': streetsBasemap,
  'Gray canvas': grayBasemap
}
let statesLayer = L.layerGroup().addTo(map3)
let layers = {
  'Median age by state': statesLayer
}
L.control.layers(basemaps, layers).addTo(map3)
