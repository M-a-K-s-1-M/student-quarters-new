import './ViewDormOnMapBtn.scss'
import { FaMapMarkerAlt } from 'react-icons/fa'
export function ViewDormOnMapBtn() {
    return (
        <button className='view-dorm-on-map-btn'>
            <FaMapMarkerAlt className='view-dorm-on-map-btn__icon' />
            <span>Показать на карте</span>
        </button>
    )
}
