import useSidebar from '../../widgets/Sidebar/model/useSidebar';
import './Mian.scss';

export default function Main() {
    const { isOpen } = useSidebar();

    return (
        <div className={`main ${isOpen && 'main--active-sidebar'}`}>Main</div>
    )
}
