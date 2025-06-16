import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './MainMap.scss';
import { useDorms } from '../../../../entities/Dormitory';
import { useState } from 'react';

import { FaStar } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaMap } from "react-icons/fa";
import { AddDormFavorite } from '../../../../features/AddDormFavorite';



export function MainMap() {
    const position = [56.8519, 60.6122];
    const { dorms } = useDorms();

    return (
        <div className='main-map'>
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
                        <Marker position={arrayLocation} key={dormMarker.id}>
                            <Popup>
                                <div className='main-map__popup-container'>
                                    <div className='main-map__popup-container__image'>
                                        <img src='#' alt={dormMarker.name} />

                                        <div
                                            className={`main-map__popup-container__image__favorite`}
                                        >
                                            <AddDormFavorite />
                                        </div>

                                        <div className='main-map__popup-container__image__dorm-evaluation'>
                                            <FaStar className='main-map__popup-container__image__dorm-evaluation__icon' />
                                            <span>{dormMarker.rating}</span>
                                        </div>
                                    </div>

                                    <div className='main-map__popup-container__content'>
                                        <h3>{dormMarker.name}</h3>
                                        <p className='main-map__popup-container__content__address'>
                                            <FaMapMarkerAlt className='main-map__popup-container__content__address__icon' />
                                            {dormMarker.address}
                                        </p>
                                        <div className='main-map__popup-container__content__features'>
                                            {dormMarker.amenities.map((feature, id) => {
                                                return (
                                                    <span className='main-map__popup-container__content__features__feature' key={id}>{feature}</span>
                                                )
                                            })}
                                        </div>
                                        <div className='main-map__popup-container__content__footer'>
                                            <div className='main-map__popup-container__content__footer__dorm-price'>
                                                <span className='main-map__popup-container__content__footer__dorm-price__price'>{dormMarker.price} ₽</span>
                                                <span className='main-map__popup-container__content__footer__dorm-price__period'> /{dormMarker.priceUnit}</span>
                                            </div>
                                            <button className='main-map__popup-container__content__footer__view-map-btn'>
                                                <FaMap className='main-map__popup-container__content__footer__view-map-btn__icon' />
                                                Подробнее
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </Popup>
                        </Marker>
                    )
                })}

                {/* <Marker position={position}>
                    <Popup>
                        Привет, это маркер! <br /> Кликните для информации.
                    </Popup>
                </Marker> */}


            </MapContainer>
        </div>
    );
}
