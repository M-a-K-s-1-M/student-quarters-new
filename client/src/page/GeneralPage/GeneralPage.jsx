import useSidebar from "../../app/stores/useSidebar"
import Sidebar from "../../widgets/Sidebar/Sidebar"
import s from './GeneralPage.module.scss';
import Feedback from '../../widgets/Feedback/Feedback';
import Map from "../../widgets/Map/Map";


export default function GeneralPage() {
    const { isActiveSidebar, activeTab } = useSidebar();

    return (
        <div className={`${s.general_page} ${isActiveSidebar && s.active}`}>
            <Sidebar />
            {activeTab === 'feedback' && <Feedback />}
            {activeTab === 'map' && <Map />}

        </div>
    )
}
