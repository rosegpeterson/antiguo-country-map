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

var caiVirrey = L.marker([4.6693, -74.0516]).addTo(map);

caiVirrey.bindPopup(
"<b>CAI El Virrey</b><br>Police Post near Parque El Virrey"
);
  
})
