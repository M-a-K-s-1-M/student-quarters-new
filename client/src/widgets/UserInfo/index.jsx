import { UserAvatar } from '../../entities/User'
import { UserData } from '../../entities/User'
import { UserStatistics } from '../../entities/User'
import './styles.scss'

export function UserInfo() {
    return (
        <div className='user-info'>
            <div className='user-info__avatar-wrapper'>
                <UserAvatar />
            </div>

            <div className='user-info-details'>
                <UserData />

                <UserStatistics />
            </div>
        </div>
    )
}
