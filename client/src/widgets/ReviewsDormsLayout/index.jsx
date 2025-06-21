import { DormsFilterList } from '../DormsFilterList'
import { ReviewsList } from '../ReviewsList'
import './ReviewsDormsLayout.scss'
export function ReviewsDormsLayout() {
    return (
        <div className='reviews-dorms-layout'>
            <DormsFilterList />

            <ReviewsList />
        </div>
    )
}
