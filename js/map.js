var map = L.map('map').setView([4.6698,-74.0525],15);

L.tileLayer(
'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
{
attribution:'© OpenStreetMap'
}).addTo(map);

var marker = L.marker([4.6698,-74.0525]).addTo(map);

marker.bindPopup("Antiguo Country, Bogotá").openPopup();

fetch("data/pois.geojson")
.then(res=>res.json())
.then(data=>{

L.geoJSON(data,{
onEachFeature:(feature,layer)=>{

layer.bindPopup(
"<b>"+feature.properties.name+"</b><br>"+
feature.properties.type
)

}
}).addTo(map)

var alejandroAranaZone = L.polygon([
[4.6722, -74.0514],
[4.6722, -74.0504],
[4.6713, -74.0504],
[4.6713, -74.0514]
],{
color:"#2563eb",
fillOpacity:0.3
}).addTo(map);

alejandroAranaZone.bindPopup(
"<b>Alejandro Arana Zone</b><br> Carrera 15 between Calle 85 and Calle 86"
);
  
})
