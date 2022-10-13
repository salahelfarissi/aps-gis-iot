import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const Map = () => {
  return (
    <>
      <MapContainer
        center={[48.8305753, 2.2851128]}
        zoom={15}
        scrollWheelZoom={true}
      >
        <TileLayer url="https://api.mapbox.com/styles/v1/salahelfarissi/cl96t7idm000l14mtg9tqgpfj/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1Ijoic2FsYWhlbGZhcmlzc2kiLCJhIjoiY2ttb3p1Yzk3Mjl2bzJ2bno3OGlqcjJ2bCJ9.pErPZNgS_t5jzHlsp_XyRQ" />
        <Marker position={[48.8305753, 2.2851128]}>
          <Popup>Ligne 12 (Porte de Versailles)</Popup>
        </Marker>
      </MapContainer>
    </>
  );
};

export default Map;
