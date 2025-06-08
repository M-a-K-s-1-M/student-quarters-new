import { DormsFilterList } from '../../../DormsFilterList';
import { MainMap } from '../../../MainMap';
import './MainMapLayout.scss';


export function MainMapLayout() {
    return (
        <div className='main-map-layout'>
            <MainMap />
            <DormsFilterList />
        </div>
    )
}
