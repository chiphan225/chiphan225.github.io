let map1 = L.map('map1').setView([30.4077116,-91.1818346], 4)

var OpenStreetMap_BlackAndWhite = L.tileLayer('https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
	maxZoom: 18,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});
let pft = L.marker([30.4077116,-91.1818346]).addTo(map1)

let patrickftaylorhall = L.polygon([
  [30.509, -91.08],
  [30.503, -91.06],
  [30.51, -91.047]
]).addTo(map1);

pft.bindPopup('this is pft')
patrickftaylorhall.bindPopup('patrick taylor hall')

var latlngs = [
    [30.51, -91.68],
    [30.77, -91.43],
    [30.04, -90.2]
];
var polyline = L.polyline(latlngs, {color: 'red'}).addTo(map1);
// zoom the map to the polyline
map.fitBounds(polyline.getBounds());
