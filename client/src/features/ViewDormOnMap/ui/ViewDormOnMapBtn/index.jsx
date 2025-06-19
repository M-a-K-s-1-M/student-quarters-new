import { FaMap } from 'react-icons/fa'
import './ViewDormOnMapBtn.scss'
import { useNavigate } from 'react-router-dom'
import { useModalDormitory } from '../../../../entities/Dormitory';

export function ViewDormOnMapBtn({ dormId }) {

    const navigate = useNavigate();
    const { closeModal } = useModalDormitory();

    const handleClick = () => {
        navigate(`/?dormId=${dormId}`);
        closeModal();
    };

    return (
        <button className='view-dorm-on-map-btn' onClick={handleClick}>
            <FaMap className='view-dorm-on-map-btn__icon' />
            На карте
        </button>
    )
}
