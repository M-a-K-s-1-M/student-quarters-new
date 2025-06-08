import { MapControls } from '../../widgets/MapControls/index';
import { PopularDormList } from '../../widgets/PopularDormitories';
import { SearchDormitory } from '../../features/SearchDormitory/index';

import { MainMapLayout } from '../../widgets/MainMapLayout';
import { useSidebar } from '../../widgets/Sidebar/model';
import './Mian.scss';

export default function Main() {
    const { isOpen } = useSidebar();

    return (
        <div className={`main ${isOpen && 'main--active-sidebar'}`}>
            <SearchDormitory />

            <PopularDormList />

            <MapControls />

            <MainMapLayout />
        </div>
    )
}
