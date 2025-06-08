import './PopularDormList.scss';
import { CardPopularDormitory } from '../CardPopularDormitory/index';
import { usePopularDormitories } from '../../../../entities/Dormitory';

export function PopularDormList() {
    const { dataDormitories } = usePopularDormitories();

    return (
        <div className={`popular-dormitories`}>
            <div className='popular-dormitories__header'>
                <h2>Популярные общежития</h2>
                <p>Общежития с лучшими отзывами и рейтингами</p>
            </div>

            <div className='popular-dormitories__featured'>
                {dataDormitories.map((dormitory) => {
                    return (
                        <CardPopularDormitory data={dormitory} key={dormitory.id} />
                    )
                })}
            </div>
        </div>
    )
}
