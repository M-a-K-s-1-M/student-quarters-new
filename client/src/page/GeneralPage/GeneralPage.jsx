import useSidebar from "../../app/stores/useSidebar";
import Header from "../../widgets/Header/Header";
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

                </div>
            </div>
        </>
    )
}
