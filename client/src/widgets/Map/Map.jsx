import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import './Map.scss'

export default function Map() {
    return (
        <div className='leaflet_map_wrapper'>
            <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true} className='leaflet_map_container'>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]} className='leaflet_marker'>
                    <Popup className='leaflet_popup'>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div >
    )
}
