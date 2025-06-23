import { useSidebar } from '../../widgets/Sidebar/model';
import { TabsProfile } from '../../widgets/TabsProfile';
import { UserInfo } from '../../widgets/UserInfo';
import './Profile.scss';

export default function Profile() {
    const { isOpen } = useSidebar();
    return (
        <div className={`profile ${isOpen && 'profile--active-sidebar'}`}>
            <div className='profile__header'>
                <h1 className='profile__header__title'>Личный кабинет</h1>
            </div>

            <div className='profile__wrapper'>
                <UserInfo />

                <TabsProfile />
            </div>
        </div>
    )
}
