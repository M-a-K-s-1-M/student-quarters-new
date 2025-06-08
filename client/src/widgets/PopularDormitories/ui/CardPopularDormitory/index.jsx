import './CardPopularDormitory.scss';
import { FaStar } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaMap } from "react-icons/fa";

export function CardPopularDormitory({ data }) {
    return (
        <div className={`dormitory-card ${data.id === 1 && 'dormitory-card--featured'}`}>
            <div className='dormitory-card__image'>
                <img src='#' alt={data.name} />
                <div className='dormitory-card__image__dorm-evaluation'>
                    <FaStar className='dormitory-card__image__dorm-evaluation__icon' />

                    <span>{data.rating}</span>
                </div>
            </div>

            <div className='dormitory-card__content'>
                <h3>{data.name}</h3>
                <p className='dormitory-card__content__address'>
                    <FaMapMarkerAlt className='dormitory-card__content__address__icon' />
                    {data.address}
                </p>
                <div className='dormitory-card__content__features'>
                    {data.amenities.map((feature, id) => {
                        return (
                            <span className='dormitory-card__content__features__feature' key={id}>{feature}</span>
                        )
                    })}
                </div>
                <div className='dormitory-card__content__footer'>
                    <div className='dormitory-card__content__footer__dorm-price'>
                        <span className='dormitory-card__content__footer__dorm-price__price'>{data.price} ₽</span>
                        <span className='dormitory-card__content__footer__dorm-price__period'> /{data.priceUnit}</span>
                    </div>
                    <button className='dormitory-card__content__footer__view-map-btn'>
                        <FaMap className='dormitory-card__content__footer__view-map-btn__icon' />
                        На карте
                    </button>
                </div>
            </div>
        </div>
    )
}
