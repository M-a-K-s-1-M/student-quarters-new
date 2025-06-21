import './CardDormitory.scss';
import { FaStar } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaMap } from "react-icons/fa";
import { AddDormFavorite } from '../../../../features/AddDormFavorite';
import { ViewDormOnMapBtn } from '../../../../features/ViewDormOnMap';

export function CardDormitory({ dormitory }) {
    return (
        <div className={`dormitory-card ${dormitory.id === 1 && 'dormitory-card--featured'}`}>
            <div className='dormitory-card__image'>
                <img src='#' alt={dormitory.name} />

                <div
                    className={`dormitory-card__image__favorite`}
                >
                    <AddDormFavorite />
                </div>

                <div className='dormitory-card__image__dorm-evaluation'>
                    <FaStar className='dormitory-card__image__dorm-evaluation__icon' />
                    <span>{dormitory.rating}</span>
                </div>
            </div>

            <div className='dormitory-card__content'>
                <h3>{dormitory.name}</h3>
                <p className='dormitory-card__content__address'>
                    <FaMapMarkerAlt className='dormitory-card__content__address__icon' />
                    {dormitory.address}
                </p>
                <div className='dormitory-card__content__features'>
                    {dormitory.amenities.map((feature, id) => {
                        return (
                            <span className='dormitory-card__content__features__feature' key={id}>{feature}</span>
                        )
                    })}
                </div>
                <div className='dormitory-card__content__footer'>
                    <div className='dormitory-card__content__footer__dorm-price'>
                        <span className='dormitory-card__content__footer__dorm-price__price'>{dormitory.price} ₽</span>
                        <span className='dormitory-card__content__footer__dorm-price__period'> /{dormitory.priceUnit}</span>
                    </div>

                    <ViewDormOnMapBtn dormId={dormitory.id} />
                </div>
            </div>
        </div>
    )
}
