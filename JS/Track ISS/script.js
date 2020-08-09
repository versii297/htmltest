const mymap = L.map("mapid").setView([51.505, -0.09], 13);

// add tileLayer to map
const attribution =
  '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';

const tileUrl = "https://{s},tile.openstreetmap.org/{z}/{x}/{y}.png";
const tiles = L.tileLayer(tileUrl, { attribution });
tiles.addTo(mymap);

// fetch api
const api_url = "https://api.wheretheiss.at/v1/satellites/25544";
async function getData() {
  const response = await fetch(api_url);
  const data = await response.json();
  const { latitude, longitude } = data;
  document.getElementById("location").innerHTML = `
  <p>Latitude: ${latitude}</p>
  <p>Longitude: ${longitude}</p>
  `;
}

getData();
