let map1 = L.map('map1').setView([30.4077116,-91.1818346], 4)

var OpenTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
	maxZoom: 17,
	attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
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
