import MapControls from '../../features/MapControls/ui';
import PopularDormitories from '../../features/PopularDormitories/ui';
import SearchDormitory from '../../features/SearchDormitory/ui';
import MainMapLayout from '../../widgets/MainMapLayout';
import useSidebar from '../../widgets/Sidebar/model/useSidebar';
import './Mian.scss';

export default function Main() {
    const { isOpen } = useSidebar();

    return (
        <div className={`main ${isOpen && 'main--active-sidebar'}`}>
            <SearchDormitory />

            <PopularDormitories />

            <MapControls />

            <MainMapLayout />
        </div>
    )
}
