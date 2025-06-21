import { RatingDormInStarsCalculate } from '../../features/RatingDormInStarsCalculate'
import './ReviewsList.scss'
import { ReviewCard } from '../../entities/Review'


const reviews = [
    {
        text: "Очень уютное общежитие, чисто и спокойно.",
        rating: 5,
        author: "Иван Иванов",
        date: "2025-06-20"
    },
    {
        text: "Хорошее расположение, но иногда шумно по вечерам.",
        rating: 4,
        author: "Мария Петрова",
        date: "2025-06-18"
    },
    {
        text: "Средние условия, но персонал отзывчивый.",
        rating: 3,
        author: "Алексей Смирнов",
        date: "2025-06-15"
    }
];

export function ReviewsList({ dormitory }) {

    if (!dormitory) {
        dormitory = {
            id: 1,
            university: "УрФУ",
            name: "Общежитие УрФУ №1",
            rating: 4.5,
            address: "ул. Мира, 19, Екатеринбург",
            price: 1500,
            priceUnit: "месяц",
            type: "Государственное",
            placesAvailable: 24,
            amenities: ["Wi-Fi", "Кухня", "Прачечная", "Спортзал"],
            image: "urfu-dorm-1.jpg",
            location: {
                lat: 56.8441,
                lng: 60.6533
            }
        }
    }

    return (
        <div className='reviews-list'>

            <div className="reviews-list__header">
                <h3 className='reviews-list__header-title'>{dormitory.name}</h3>
                <RatingDormInStarsCalculate rating={dormitory.rating} />
            </div>

            <div className="reviews-list__list">
                {reviews.map((review, index) => (
                    <ReviewCard review={review} key={index} />
                ))}
            </div>
        </div>
    )
}
