import './styles.scss'
import { GoStarFill } from "react-icons/go";
import { GoStar } from "react-icons/go";

export function RatingDormInStarsCalculate({ rating }) {
    const starFilled = Math.floor(rating || 0);

    return (
        <div className='rating-dorm-in-stars-calculate'>
            <div className='rating-dorm-in-stars-calculate__stars'>
                {[...Array(5)].map((_, i) =>
                    (i < starFilled) ?
                        <GoStarFill className='rating-dorm-in-stars-calculate__stars__icon' key={i} />
                        :
                        <GoStar className='rating-dorm-in-stars-calculate__stars__icon' key={i} />)
                }
            </div>
            <span className='rating-dorm-in-stars-calculate__count'>{rating}</span>
        </div>
    )
}
