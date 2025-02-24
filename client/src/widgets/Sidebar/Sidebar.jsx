
import ProfileIcon from '@mui/icons-material/AccountCircleOutlined';
import MapIcon from '@mui/icons-material/MapOutlined';
import FeedbackIcon from '@mui/icons-material/ForumOutlined';
import LogoutIcon from '@mui/icons-material/LogoutOutlined';
import SettingsIcon from '@mui/icons-material/SettingsOutlined';
import MenuIcon from '@mui/icons-material/MenuOutlined';
import { useState } from 'react';
import useSidebar from '../../app/stores/useSidebar';
import useUser from '../../app/stores/useUser';

export default function Sidebar() {
    const { isActiveSidebar, setIsActiveSidebar } = useSidebar();
    const { isAuth } = useUser();


    return (
        <div className={!isActiveSidebar ? 'h-dvh w-[80px] py-[0.8rem] px-[0.8rem] bg-black duration-500 ease-out text-center'
            : 'h-dvh w-[250px] py-[0.8rem] px-[0.8rem] bg-black duration-500 ease-out'}>
            <div className={isActiveSidebar ? 'grid grid-cols-[auto_30px] mb-[0.8rem] duration-500 ease-out'
                : 'items-end text-center mb-[0.8rem] duration-500 ease-out'}>
                {isActiveSidebar &&
                    <button type='button' className="grid grid-cols-[30px_auto] gap-2 items-end">
                        <img src="../../../public/logoGeneral.png" alt="logo" className='items-center' />
                        <span className='font-bold text-xm text-start duration-500 ease-out'>StudentQuarters</span>
                    </button>
                }
                <button type='button' className='items-end' onClick={() => setIsActiveSidebar(!isActiveSidebar)}>
                    <MenuIcon />
                </button>

            </div>

            {isAuth &&
                <div className={isActiveSidebar ? "flex h-[50px] w-[90%] my-[0.8rem] mx-[auto] items-center" : "text-center"}>
                    <ProfileIcon />
                    {isActiveSidebar &&
                        <div>
                            <p className="bold">username</p>
                        </div>
                    }
                </div>
            }

            <ul>
                <li className='h-[50px] w-[90%] my-[0.8rem] mx-[auto]'>
                    <a href="#" className='items-center'>
                        <MapIcon />
                        {isActiveSidebar && <span className='nav-item'>Карта</span>}
                    </a>
                </li>
                <li className=' h-[50px] w-[90%] my-[0.8rem] mx-[auto]'>
                    <a href="#" className='items-center'>
                        <FeedbackIcon />
                        {isActiveSidebar && <span className='nav-item'>Отзывы</span>}
                    </a>
                </li>
                {isAuth &&
                    <li className=' h-[50px] w-[90%] my-[0.8rem] mx-[auto]'>
                        <a href="#" className='items-center'>
                            <SettingsIcon />
                            {isActiveSidebar && <span className='nav-item'>Настройки</span>}
                        </a>
                    </li>}
                {isAuth &&
                    <li className='h-[50px] w-[90%] my-[0.8rem] mx-[auto]'>
                        <a href="#" className='items-center'>
                            <LogoutIcon />
                            {isActiveSidebar && <span className='nav-item'>Выход</span>}
                        </a>
                    </li>}
            </ul>
        </div >
    )
}
