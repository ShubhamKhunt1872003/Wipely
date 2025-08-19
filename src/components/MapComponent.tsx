import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default markers in react-leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface MapComponentProps {
  height?: string;
  showPopup?: boolean;
}

const MapComponent: React.FC<MapComponentProps> = ({ height = "300px", showPopup = true }) => {
  // Melbourne, Australia coordinates
  const melbournePosition: [number, number] = [-37.8136, 144.9631];

  return (
    <div style={{ height, width: '100%', maxWidth: '100%' }} className="rounded-lg overflow-hidden shadow-lg">
      <MapContainer
        center={melbournePosition}
        zoom={12}
        style={{ height: '100%', width: '100%', maxWidth: '100%' }}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={melbournePosition}>
          {showPopup && (
            <Popup>
              <div className="text-center">
                <strong>Wipely HQ</strong><br />
                Melbourne, VIC, Australia<br />
                <span className="text-emerald-600">Professional Cleaning Services</span>
              </div>
            </Popup>
          )}
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapComponent;