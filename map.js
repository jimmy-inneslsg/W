mapboxgl.accessToken = 'pk.eyJ1IjoiamltbXlyb2NoYS1pbm5lc2Fzc29jIiwiYSI6ImNtNmw4OG5ibjAwYzIycG9ncmRoaTNwdWcifQ._bVwo6TxNtDdZy92K8xx_g';

const map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/mapbox/streets-v12',
  center: [-71.137, 42.452],
  zoom: 14
});

map.addControl(new mapboxgl.NavigationControl());

// Store pins
const pins = [];

// Click to add pins
map.on('click', (e) => {
  const lngLat = e.lngLat;

  pins.push({
    lng: lngLat.lng,
    lat: lngLat.lat
  });

  const marker = new mapboxgl.Marker({ color: 'red' })
    .setLngLat(lngLat)
    .setPopup(
      new mapboxgl.Popup({ offset: 25 }).setHTML(`
        <strong>Pin added</strong><br>
        Lat: ${lngLat.lat.toFixed(5)}<br>
        Lng: ${lngLat.lng.toFixed(5)}
      `)
    )
    .addTo(map);

  marker.togglePopup();

  console.log('Pins:', pins);
});

map.on('load', () => {
  console.log('Map loaded — click to add pins');
});
