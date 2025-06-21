import { RatingDormInStarsCalculate } from '../../../../features/RatingDormInStarsCalculate'
import './styles.scss'
import { formatDate } from '../../../../shared/lib/formatDate'

export function ReviewCard({ review, key }) {
    const date = formatDate(review.date);
    return (
        <div key={key} className='review-card'>
            <div className='review-card__header'>
                <RatingDormInStarsCalculate rating={review.rating} />
            </div>

            <div className='review-card__content'>
                <p className='review-card__content__text'>{review.text}</p>
            </div>

            <div className='review-card__footer'>
                <p className='review-card__footer__author'>{review.author}</p>
                <p className='review-card__footer__date'>{date}</p>
            </div>
        </div>
    )
}
