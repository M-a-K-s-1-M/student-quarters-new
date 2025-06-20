import { FaSearch } from 'react-icons/fa';
import './SearchDormitoryInput.scss';

export function SearchDormitoryInput() {
    return (
        <div className='search-dormitory-input'>
            <FaSearch className='search-dormitory-input__icon' />
            <input type="text" placeholder="Поиск по названию или адресу..." />
        </div>
    )
}
