
import ProfileIcon from '@mui/icons-material/AccountCircleOutlined';
import MapIcon from '@mui/icons-material/MapOutlined';
import FeedbackIcon from '@mui/icons-material/ForumOutlined';
import LogoutIcon from '@mui/icons-material/LogoutOutlined';
import SettingsIcon from '@mui/icons-material/SettingsOutlined';
import MenuIcon from '@mui/icons-material/MenuOutlined';
import useSidebar from '../../app/stores/useSidebar';
import useUser from '../../app/stores/useUser';
import s from './Sidebar.module.scss';

export default function Sidebar() {
    const { isActiveSidebar, setIsActiveSidebar, activeTab, setActiveTab } = useSidebar();
    const { isAuth } = useUser();


    return (
        <div className={`${s.sidebar} ${isActiveSidebar && s.active}`}>
            <div className={`${s.top} ${isActiveSidebar && s.active}`}>
                {isActiveSidebar &&
                    <button type='button' className={s.logo}>
                        <img src="../../../public/logoGeneral.png" alt="logo" className={s.logo_img} />
                        <span className={s.logo_title}>StudentQuarters</span>
                    </button>
                }
                <MenuIcon className={s.menu_icon} onClick={() => setIsActiveSidebar(!isActiveSidebar)} />
            </div>


            <div className={s.nav_container}>
                <ul className={s.nav_list}>
                    {isAuth &&
                        <li className={`${s.nav_item} ${activeTab === 'profile' && s.active_tab}`} onClick={() => setActiveTab('profile')}>
                            <a href="#" className={s.link} >
                                <ProfileIcon className={s.icon} />
                                {isActiveSidebar &&
                                    <p className={s.title}>username</p>
                                }
                            </a>
                        </li>
                    }
                    <li className={`${s.nav_item} ${activeTab === 'map' && s.active_tab}`} onClick={() => setActiveTab('map')}>
                        <a href="#" className={s.link}>
                            <MapIcon className={s.icon} />
                            {isActiveSidebar && <span className={s.title}>Карта</span>}
                        </a>
                    </li>
                    <li className={`${s.nav_item} ${activeTab === 'feedback' && s.active_tab}`} onClick={() => setActiveTab('feedback')}>
                        <a href="#" className={s.link}>
                            <FeedbackIcon className={s.icon} />
                            {isActiveSidebar && <span className={s.title}>Отзывы</span>}
                        </a>
                    </li>
                </ul>
                {isAuth &&
                    <ul className={s.nav_auth_list}>
                        <li className={`${s.nav_item} ${activeTab === 'settings' && s.active_tab}`} onClick={() => setActiveTab('settings')}>
                            <a href="#" className={s.link}>
                                <SettingsIcon className={s.icon} />
                                {isActiveSidebar && <span className={s.title}>Настройки</span>}
                            </a>
                        </li>
                        <li className={`${s.nav_item} ${activeTab === 'logout' && s.active_tab}`} onClick={() => setActiveTab('logout')}>
                            <a href="#" className={s.link}>
                                <LogoutIcon className={s.icon} />
                                {isActiveSidebar && <span className={s.title}>Выход</span>}
                            </a>
                        </li>
                    </ul>
                }
            </div>
        </div >
    )
}
