import { useSidebar } from '../../widgets/Sidebar/model';
import './Reviews.scss';

export default function Reviews() {
    const { isOpen } = useSidebar();

    return (
        <div className={`reviews ${isOpen && 'reviews--active-sidebar'}`}>Reviews</div>
    )
}
