import './DormsFilterList.scss';
import { SortDormsOnMap } from "../../../../features/SortDormsOnMap";
import { CardDormitory, useDorms } from "../../../../entities/Dormitory";

export function DormsFilterList() {
    const { dorms } = useDorms();
    return (
        <div className="dorms-filter-list">
            <SortDormsOnMap />
            <div className='dorms-filter-list__cards'>
                {dorms.map((dorm) => {
                    return (
                        <>
                            <CardDormitory data={dorm} />
                        </>
                    )
                })
                }
            </div>
        </div>
    )
}
