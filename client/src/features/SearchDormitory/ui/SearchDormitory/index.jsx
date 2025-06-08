import { useState } from 'react';
import './SearchDormitory.scss';
import { FaSearch } from "react-icons/fa";

export function SearchDormitory() {
    const [activeFitler, setActiveFilter] = useState('all');

    const handleFilter = (titleFilter) => {
        setActiveFilter(titleFilter);
    }
    return (
        <div className={`search-dormitory`}>
            <div className='search-dormitory__content'>
                <h1>Найдите идеальное общежитие для студентов</h1>
                <p>Лучшие студенческие общежития в Москве с отзывами, рейтингами и подробной информацией</p>

                <div className='search-dormitory__content__panel'>
                    <div className='search-dormitory__content__panel__input-container'>
                        <FaSearch className='search-dormitory__content__panel__input-container__icon' />
                        <input type="text" placeholder="Поиск по названию или адресу..." />
                    </div>

                    <div className="search-dormitory__content__panel__filters">
                        <button
                            className={`search-dormitory__content__panel__filters__filter 
                            ${activeFitler === 'all' && 'search-dormitory__content__panel__filters__filter--active'}`}
                            onClick={() => handleFilter('all')}>Все</button>
                        <button
                            className={`search-dormitory__content__panel__filters__filter 
                            ${activeFitler === 'government' && 'search-dormitory__content__panel__filters__filter--active'}`}
                            onClick={() => handleFilter('government')}>Государственные</button>
                        <button
                            className={`search-dormitory__content__panel__filters__filter 
                            ${activeFitler === 'private' && 'search-dormitory__content__panel__filters__filter--active'}`}
                            onClick={() => handleFilter('private')}>Частные</button>
                        <button
                            className={`search-dormitory__content__panel__filters__filter 
                            ${activeFitler === 'price' && 'search-dormitory__content__panel__filters__filter--active'}`}
                            onClick={() => handleFilter('price')}>До 5000 руб</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
