import { FaMapMarkerAlt, FaRubleSign } from 'react-icons/fa'
import './styles.scss'
import { RatingMiniStarCalculate } from '../../../../features/RatingMiniStarCalculate'
import { AddDormFavorite } from '../../../../features/AddDormFavorite'

export function CardFavoriteDormOnProfile({ dormitory }) {
    return (
        <div className='card-favorite-dorm-on-profile'>
            <div className='card-favorite-dorm-on-profile__image-wrapper'>
                <img src='#' className='card-favorite-dorm-on-profile__image-wrapper__image' alt={dormitory.name} />
            </div>

            <div className='card-favorite-dorm-on-profile__content'>
                <div className='card-favorite-dorm-on-profile__content__info-wrapper'>
                    <h4 className='card-favorite-dorm-on-profile__content__info-wrapper__title'>{dormitory.name}</h4>
                    <p className='card-favorite-dorm-on-profile__content__info-wrapper__address'>
                        <FaMapMarkerAlt className='card-favorite-dorm-on-profile__info-wrapper__content__address__icon' /><span>{dormitory.address}</span>
                    </p>
                    <p className='card-favorite-dorm-on-profile__content__info-wrapper__price'>
                        <FaRubleSign className='card-favorite-dorm-on-profile__content__info-wrapper__price__icon' /><span>{dormitory.price} руб/мес</span>
                    </p>
                </div>

                <div className='card-favorite-dorm-on-profile__content__footer'>
                    <RatingMiniStarCalculate rating={dormitory.rating} />
                    <AddDormFavorite />
                </div>
            </div>
        </div>
    )
}
