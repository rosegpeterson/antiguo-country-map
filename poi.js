const poiLayer = L.layerGroup().addTo(map);

fetch("data/pois.geojson")
.then(res=>res.json())
.then(data=>{

data.features.forEach(feature=>{

 const coords = feature.geometry.coordinates;

 const marker = L.marker([coords[1],coords[0]])
  .addTo(poiLayer)
  .bindPopup(`
  <b>${feature.properties.name}</b><br>
  ${feature.properties.type}
  `);

 const li = document.createElement("li");
 li.textContent = feature.properties.name;

 li.onclick = ()=>{
   map.setView([coords[1],coords[0]],17);
   marker.openPopup();
 };

 document.getElementById("poi-list").appendChild(li);

});

});
