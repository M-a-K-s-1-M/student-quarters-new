import './MapControls.scss';
import { Select } from '@mantine/core';
import { FaPlus } from "react-icons/fa";

export function MapControls() {
    return (
        <div className='map-controls'>
            <h2>Интерактивная карта</h2>

            <div className='map-controls__advenced-filters'>
                <Select
                    className='map-controls__advenced-filters__filter-group'
                    label="Тип общежития:"
                    placeholder=""
                    data={['Все', 'Государственные', 'Частные']}
                    defaultValue="Все"
                    allowDeselect={false}
                />
                <Select
                    className='map-controls__advenced-filters__filter-group'
                    label="Цена:"
                    placeholder=""
                    data={['Любая', 'До 5000 руб', '5000-10000 руб', 'Свыше 10000 руб']}
                    defaultValue="Любая"
                    allowDeselect={false}
                />
                <button className='map-controls__advenced-filters__add-marker-btn'>
                    <FaPlus className='map-controls__advenced-filters__add-marker-btn__icon' />
                    <span> Добавить общежитие</span>
                </button>
            </div>
        </div>
    )
}
