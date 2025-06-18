import { FaBookmark } from 'react-icons/fa'
import './AddDormFavoriteBtn.scss'

export function AddDormFavoriteBtn() {
    return (
        <button className='add-dorm-favorite-btn'>
            <FaBookmark className='add-dorm-favorite-btn__icon' />
            <span>Добавить в избранное</span>
        </button>
    )
}
