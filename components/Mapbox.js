import React from "react";
import Map, { Marker, Popup } from "react-map-gl";
import getCenter from "geolib/es/getCenter";

function Mapbox({ searchResults }) {
  // Transform the search results object into the data format required by geolib
  const coordinates = searchResults.map((result) => ({
    longitude: result.long,
    latitude: result.lat,
  }));

  // The latitude and longitude of the center of locations coordinates
  const center = getCenter(coordinates);

  return (
    <Map
      initialViewState={{
        longitude: center.longitude,
        latitude: center.latitude,
        zoom: 11,
      }}
      style={{ width: "100%", height: "100%" }}
      mapStyle="mapbox://styles/kyzeyeo/cl5ueq2x7000u14n3q0timxpr"
      mapboxAccessToken={process.env.mapbox_key}
    >
      {searchResults.map((result) => (
        <div key={result.long}>
          <Marker
            longitude={result.long}
            latitude={result.lat}
            anchor="bottom"
            offset={[-20, -10]}
          >
            <p className="cursor-pinter text-2xl animate-bounce">📌</p>
          </Marker>
        </div>
      ))}
    </Map>

    // <Map
    //   initialViewState={{
    //     longitude: -100,
    //     latitude: 40,
    //     zoom: 3.5,
    //   }}
    //   mapStyle="mapbox://styles/mapbox/streets-v9"
    //   mapboxAccessToken={process.env.mapbox_key}
    // >
    //   <Marker longitude={-100} latitude={40} anchor="bottom">
    //     <p>📌</p>
    //   </Marker>
    // </Map>
  );
}

export default Mapbox;
