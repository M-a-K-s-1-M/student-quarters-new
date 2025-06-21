import { FaStar } from 'react-icons/fa'
import './styles.scss'

export function RatingMiniStarCalculate({ rating }) {
    return (
        <div className='rating-mini-star-calculate'>
            <FaStar className='rating-mini-star-calculate__icon' />
            <span>{rating}</span>
        </div>
    )
}
