const searchBox = document.getElementById("searchBox");

searchBox.addEventListener("keypress", function(e){

 if(e.key==="Enter"){

  fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${searchBox.value}`)
  .then(res=>res.json())
  .then(data=>{

    if(data.length>0){

      const lat=data[0].lat;
      const lon=data[0].lon;

      map.setView([lat,lon],17);

      L.marker([lat,lon]).addTo(map);

    }

  });

 }

});
