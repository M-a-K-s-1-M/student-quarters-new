import './DormsFilterList.scss';
import { FilterDormsSelect } from "../../../../features/FilterDorms";
import { CardDormitory, CardDormitoryForReviewsList, useDorms } from "../../../../entities/Dormitory";
import { useLocation } from 'react-router-dom';

export function DormsFilterList() {
    const { dorms } = useDorms();

    const location = useLocation();

    return (
        <div className="dorms-filter-list">
            <FilterDormsSelect />
            <div className='dorms-filter-list__cards'>
                {dorms.map((dorm) => {
                    return (
                        <div key={dorm.id} >
                            {location.pathname === '/'
                                ? <CardDormitory dormitory={dorm} />
                                : <CardDormitoryForReviewsList dormitory={dorm} />
                            }
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}
