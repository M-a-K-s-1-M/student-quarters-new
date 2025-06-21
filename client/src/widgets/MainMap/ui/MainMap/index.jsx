import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './MainMap.scss';
import { CardDormitoryOnMap, useDorms } from '../../../../entities/Dormitory';

import { useSearchParams } from 'react-router-dom'
import { useEffect, useRef } from 'react';



export function MainMap() {
    const position = [56.8519, 60.6122];
    const { dorms } = useDorms();
    const [searchParams] = useSearchParams();
    const dormIdToOpen = Number(searchParams.get('dormId'));

    const markerRefs = useRef({});

    const mapRef = useRef(null);

    const map = useRef();

    useEffect(() => {
        setTimeout(() => {
            map.invalidateSize();
        }, 200);
    }, [map]);

    useEffect(() => {
        if (dormIdToOpen && markerRefs.current[dormIdToOpen]) {
            markerRefs.current[dormIdToOpen].openPopup();

            if (mapRef.current) {
                mapRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    }, [dormIdToOpen, dorms]);

    return (
        <div className='main-map' ref={mapRef}>
            <MapContainer
                center={position}
                zoom={12}
                style={{ height: '100%', width: '100%' }}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                />


                {dorms.map(dormMarker => {
                    const arrayLocation = [dormMarker.location.lat, dormMarker.location.lng];

                    return (
                        <Marker
                            position={arrayLocation}
                            key={dormMarker.id}
                            ref={ref => {
                                if (ref) markerRefs.current[dormMarker.id] = ref;
                            }}
                        >
                            <Popup>
                                <CardDormitoryOnMap dormitory={dormMarker} />
                            </Popup>
                        </Marker>
                    )
                })}

            </MapContainer>
        </div>
    );
}
