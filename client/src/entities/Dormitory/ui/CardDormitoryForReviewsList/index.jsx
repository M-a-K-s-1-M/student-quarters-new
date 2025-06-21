import { RatingMiniStarCalculate } from '../../../../features/RatingMiniStarCalculate'
import './CardDormitoryForReviewsList.scss'
import { FaCommentAlt, FaMapMarkerAlt } from "react-icons/fa";
import { useState } from 'react';

export function CardDormitoryForReviewsList({ dormitory }) {
    const [active, setActive] = useState(false);

    return (
        <div className={'card-dormitory-for-reviews-list' + (active ? ' card-dormitory-for-reviews-list--active' : '')} onClick={() => setActive(!active)}>
            <div className='card-dormitory-for-reviews-list__dorm-img-small'>
                <img src="#" alt={dormitory.name} />

                <div className='card-dormitory-for-reviews-list__dorm-img-small__badge-wrapper'>
                    <RatingMiniStarCalculate rating={dormitory.rating} />
                </div>
            </div>

            <div className='card-dormitory-for-reviews-list__content-compact'>
                <h4 className='card-dormitory-for-reviews-list__content-compact__title'>{dormitory.name}</h4>

                <p className='card-dormitory-for-reviews-list__content-compact__address'>
                    <FaMapMarkerAlt className='card-dormitory-for-reviews-list__content-compact__address__icon' />
                    <span> {dormitory.address}</span>
                </p>

                <div className='card-dormitory-for-reviews-list__content-compact__info'>
                    <p className='card-dormitory-for-reviews-list__content-compact__info__price'>{dormitory.price} ₽<span> /{dormitory.priceUnit}</span></p>
                    <p className='card-dormitory-for-reviews-list__content-compact__info__cnt-reviews'><FaCommentAlt /><span> 3</span></p>
                </div>
            </div>
        </div>
    )
}
