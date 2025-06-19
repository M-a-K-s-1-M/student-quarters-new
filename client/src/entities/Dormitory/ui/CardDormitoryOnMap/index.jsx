import './CardDormitoryOnMap.scss';
import { FaStar } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaMap } from "react-icons/fa";
import { AddDormFavorite } from '../../../../features/AddDormFavorite';
import { useModalDormitory } from '../../model';

export function CardDormitoryOnMap({ dormitory }) {
    const { openModal } = useModalDormitory();

    return (
        <div className='card-dormitory-on-map__popup-container'>
            <div className='card-dormitory-on-map__popup-container__image'>
                <img src='#' alt={dormitory.name} />

                <div
                    className={`card-dormitory-on-map__popup-container__image__favorite`}
                >
                    <AddDormFavorite />
                </div>

                <div className='card-dormitory-on-map__popup-container__image__dorm-evaluation'>
                    <FaStar className='card-dormitory-on-map__popup-container__image__dorm-evaluation__icon' />
                    <span>{dormitory.rating}</span>
                </div>
            </div>

            <div className='card-dormitory-on-map__popup-container__content'>
                <h3>{dormitory.name}</h3>
                <p className='card-dormitory-on-map__popup-container__content__address'>
                    <FaMapMarkerAlt className='card-dormitory-on-map__popup-container__content__address__icon' />
                    {dormitory.address}
                </p>
                <div className='card-dormitory-on-map__popup-container__content__features'>
                    {dormitory.amenities.map((feature, id) => {
                        return (
                            <span className='card-dormitory-on-map__popup-container__content__features__feature' key={id}>{feature}</span>
                        )
                    })}
                </div>
                <div className='card-dormitory-on-map__popup-container__content__footer'>
                    <div className='card-dormitory-on-map__popup-container__content__footer__dorm-price'>
                        <span className='card-dormitory-on-map__popup-container__content__footer__dorm-price__price'>{dormitory.price} ₽</span>
                        <span className='card-dormitory-on-map__popup-container__content__footer__dorm-price__period'> /{dormitory.priceUnit}</span>
                    </div>
                    <button className='card-dormitory-on-map__popup-container__content__footer__view-map-btn' onClick={() => openModal(dormitory)}>
                        <FaMap className='card-dormitory-on-map__popup-container__content__footer__view-map-btn__icon' />
                        Подробнее
                    </button>
                </div>
            </div>
        </div>
    )
}
