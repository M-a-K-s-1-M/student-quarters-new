import useSidebar from '../../widgets/Sidebar/model/useSidebar';
import './About.scss';

export default function About() {
    const { isOpen } = useSidebar();
    return (
        <div className={`about ${isOpen && 'about--active-sidebar'}`}>About</div>
    )
}
