import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Nécessaire pour afficher le marqueur correctement
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: '/leaflet/dist/images/marker-icon-2x.png',
  iconUrl: '/leaflet/dist/images/marker-icon.png',
  shadowUrl: '/leaflet/dist/images/marker-shadow.png',
});

const Text = () => {
  const position = [47.52046368712577, -18.909546482423334];

  return (
    <div>
      <h1>Position sur la Carte</h1>
      <MapContainer center={position} zoom={13} style={{ height: "400px", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            Position: [47.5205, -18.9095]
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Text;