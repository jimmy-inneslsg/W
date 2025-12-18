mapboxgl.accessToken = 'pk.eyJ1IjoiamltbXlyb2NoYS1pbm5lc2Fzc29jIiwiYSI6ImNtNmw4OG5ibjAwYzIycG9ncmRoaTNwdWcifQ._bVwo6TxNtDdZy92K8xx_g';

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v12',
  center: [-71.137, 42.452], // Winchester, MA
  zoom: 14
});

map.addControl(new mapboxgl.NavigationControl());

// Store pins in memory
const pins = [];

map.on('click', (e) => {
  const lngLat = e.lngLat;

  // Save pin
  pins.push({
    lng: lngLat.lng,
    lat: lngLat.lat
  });

  // Add marker
  const marker = new mapboxgl.Marker({ color: 'red' })
    .setLngLat(lngLat)
    .setPopup(
      new mapboxgl.Popup().setHTML(`
        <strong>Pin dropped</strong><br>
        Lat: ${lngLat.lat.toFixed(5)}<br>
        Lng: ${lngLat.lng.toFixed(5)}
      `)
    )
    .addTo(map);

  marker.togglePopup();

  console.log(pins);
});
