import useSidebar from "../../app/stores/useSidebar"
import Sidebar from "../../widgets/Sidebar/Sidebar"

export default function GeneralPage() {
    const { isActiveSidebar } = useSidebar();

    return (
        <main className={!isActiveSidebar ? "grid grid-cols-[80px_auto] duration-500 ease-out" : "grid grid-cols-[250px_auto] duration-500 ease-out"}>
            <Sidebar />
            <div >hello</div>

        </main >
    )
}
