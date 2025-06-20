import { SearchDormitoryInput } from '../../features/SearchDormitory'
import './ReviewsPageHeader.scss'

export default function ReviewsPageHeader() {
    return (
        <div className='reviews-page-header'>
            <h1 className="reviews-page-header__title">Отзывы о общежитиях</h1>
            <div className='reviews-page-header__search-wrapper'>
                <SearchDormitoryInput />
            </div>
        </div>
    )
}
