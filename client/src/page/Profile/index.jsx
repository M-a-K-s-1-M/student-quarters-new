import { useSidebar } from '../../widgets/Sidebar/model';
import './Profile.scss';

export default function Profile() {
    const { isOpen } = useSidebar();
    return (
        <div className={`profile ${isOpen && 'profile--active-sidebar'}`}>Profile</div>
    )
}
