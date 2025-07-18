import { Select } from '@mantine/core';
import { useDorms } from '../../../../entities/Dormitory';
import './FilterDormsSelect.scss';
export function FilterDormsSelect() {
    const { dorms } = useDorms();
    const dormsCoutn = dorms.length;
    return (
        <div className='sort-dorms-on-map'>
            <h3>
                Найдено общежитий: <span>{dormsCoutn}</span>
            </h3>
            <Select
                data={['По рейтингу', 'По цене', 'По названию', 'Избранные']}
                defaultValue={'По рейтингу'}
                className='sort-dorms-on-map__select'
            />
        </div>
    )
}
