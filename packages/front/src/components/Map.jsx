import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Map = () => {
    return (
        <>
            <MapContainer
                center={[51.505, -0.09]}
                zoom={13}
                scrollWheelZoom={false}
            >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]}>
                    <Popup>Porte de Versailles.</Popup>
                </Marker>
            </MapContainer>
        </>
    );
};

export default Map;
