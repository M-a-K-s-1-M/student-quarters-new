import './styles.scss'
import { FaEnvelope } from 'react-icons/fa'

export function UserData() {
    return (
        <div className='user-data'>
            <h2 className='user-data__username'>Иван Петров</h2>
            <p className='user-data__email'><FaEnvelope className='user-data__email__icon' /> user@example.com</p>
        </div>
    )
}
