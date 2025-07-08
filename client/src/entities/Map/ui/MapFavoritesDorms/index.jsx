import './styles.scss';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { CardDormitoryOnMap, useDorms } from '../../../../entities/Dormitory';
import { useEffect } from 'react';

function InvalidateMapSize() {
    const map = useMap();
    useEffect(() => {
        setTimeout(() => {
            map.invalidateSize();
        }, 100);
    }, [map]);
    return null;
}

export function MapFavoritesDorms() {
    const position = [56.8519, 60.6122];

    return (
        <div className='map-favorites-dorms' >
            <MapContainer
                center={position}
                zoom={12}
                style={{ height: '100%', width: '100%' }}

            >
                <InvalidateMapSize />

                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
            </MapContainer>
        </div>
    )
}
