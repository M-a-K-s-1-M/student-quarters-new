import './ui/Sidebar.scss';
import { Burger } from '@mantine/core';
import { useState } from 'react';

import { FaMap } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { FaSignInAlt } from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import useUser from '../../features/Auth/model/useUser';
import { RiGraduationCapLine } from "react-icons/ri";

export default function Sidebar() {
    const [acitveItem, setActiveItem] = useState('map')
    const [isOpen, setIsOpen] = useState(true);
    const { isAuth } = useUser();

    const handleItemClick = (itemName) => {
        setActiveItem(itemName);
    }

    return (
        <div className={`sidebar ${!isOpen && 'sidebar--collapsed'}`}>
            <div className='sidebar__header'>
                <h2>
                    <RiGraduationCapLine className='sidebar__header__logo' />
                    StudentQuarters
                </h2>
                <Burger size='md' opened={isOpen} onClick={() => setIsOpen(!isOpen)} color='white' />
            </div>

            <nav className='sidebar__nav'>
                <a className={`sidebar__nav__item ${acitveItem === 'map' && 'sidebar__nav__item--active'}`} onClick={() => handleItemClick('map')}>
                    <FaMap className='sidebar__nav__item__icon ' />
                    <span>Карта</span>
                </a>

                <a className={`sidebar__nav__item ${acitveItem === 'reviews' && 'sidebar__nav__item--active'}`} onClick={() => handleItemClick('reviews')}>
                    <FaStar className='sidebar__nav__item__icon' />
                    <span>Отзывы</span>
                </a>

                <a className={`sidebar__nav__item  ${!isAuth && 'sidebar__nav__item--disabled'} ${(acitveItem === 'profile' && isAuth) && 'sidebar__nav__item--active'}`} onClick={() => handleItemClick('profile')}>
                    <FaUser className='sidebar__nav__item__icon' />
                    <span>Личный кабинет</span>
                </a>

                <a className={`sidebar__nav__item ${acitveItem === 'about' && 'sidebar__nav__item--active'}`} onClick={() => handleItemClick('about')}>
                    <FaInfoCircle className='sidebar__nav__item__icon' />
                    <span>О проекте</span>
                </a>
            </nav>

            <div className='sidebar__footer'>

                {isAuth ?
                    <button className='sidebar__footer__logout-btn'>
                        <FaSignOutAlt className='sidebar__footer__logout-btn__icon' />
                        <span>Выйти</span>
                    </button>
                    :
                    <a className='sidebar__footer__auth-link'>
                        <FaSignInAlt className='sidebar__footer__auth-link__icon' />
                        <span>Войти</span>
                    </a>
                }


            </div>
        </div>
    )
}
