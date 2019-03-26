let map1 = L.map('map1').setView([30.4077116,-91.1818346], 4)

var OpenStreetMap_BlackAndWhite = L.tileLayer('https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png', {
	maxZoom: 18,
	attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});
let pft = L.marker([30.4077116,-91.1818346]).addTo(map1)

let patrickftaylorhall = L.polygon([
  [51.509, -0.08],
  [51.503, -0.06],
  [51.51, -0.047]
]).addTo(map1);

pft.bindPopup('A polygon')
patrickftaylorhall.bindPopup('A marker')
