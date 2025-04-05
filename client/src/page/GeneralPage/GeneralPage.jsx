import useSidebar from "../../app/stores/useSidebar";
import AnalyticsMarks from "../../widgets/analyticsMarks/AnalyticsMarks";
import Header from "../../widgets/Header/Header";
import Map from "../../widgets/Map/Map";
import Sidebar from "../../widgets/Sidebar/Sidebar";
import s from './GeneralPage.module.scss';


export default function GeneralPage() {
    const { isActiveSidebar } = useSidebar();
    return (
        <>
            <div className={`${s.general_page} ${isActiveSidebar && s.active}`}>
                <Sidebar />
                <div>
                    <Header />
                    <div className={s.main_content}>
                        <Map />
                        <AnalyticsMarks />
                    </div>
                </div>
            </div>
        </>
    )
}
