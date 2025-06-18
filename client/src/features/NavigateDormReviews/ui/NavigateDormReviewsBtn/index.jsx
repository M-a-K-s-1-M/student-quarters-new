import './NavigateDormReviewsBtn.scss'
import { FaStar } from 'react-icons/fa'

export function NavigateDormReviewsBtn() {
    return (
        <button className='navigate-dorm-reviews-btn'>
            <FaStar className='navigate-dorm-reviews-btn__icon' />
            <span>Отзывы</span>
        </button>
    )
}
