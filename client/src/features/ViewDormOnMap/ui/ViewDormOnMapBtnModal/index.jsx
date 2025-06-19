import { useNavigate } from 'react-router-dom'
import './ViewDormOnMapBtnModal.scss'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { useModalDormitory } from '../../../../entities/Dormitory';


export function ViewDormOnMapBtnModal({ dormId }) {
    const navigate = useNavigate();
    const { closeModal } = useModalDormitory();

    const handleClick = () => {
        navigate(`/?dormId=${dormId}`);
        closeModal();
    };

    return (
        <button className='view-dorm-on-map-btn-modal' onClick={handleClick}>
            <FaMapMarkerAlt className='view-dorm-on-map-btn-modal__icon' />
            <span>Показать на карте</span>
        </button>
    )
}
