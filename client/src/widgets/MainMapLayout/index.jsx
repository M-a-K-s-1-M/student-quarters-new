import DormitoriesList from '../../features/DormitoriesList/ui';
import MainMap from '../../features/MainMap/ui';
import './MainMapLayout.scss';


export default function MainMapLayout() {
    return (
        <div className='main-map-layout'>
            <MainMap />
            <DormitoriesList />
        </div>
    )
}
