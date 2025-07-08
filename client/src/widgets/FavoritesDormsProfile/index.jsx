import './styles.scss'
import { CardFavoriteDormOnProfile, useDorms } from '../../entities/Dormitory';
import { MapFavoritesDorms } from '../../entities/Map/ui/MapFavoritesDorms';

export function FavoritesDormsProfile() {
    const { dorms } = useDorms();
    return (
        <div className='favorites-dorms-profile'>
            <h3 className='favorites-dorms-profile__title'>Избранные общежития</h3>


            <div className='favorites-dorms-profile__content-wrapper'>
                <ul className="favorites-dorms-profile__content-wrapper__list">
                    {dorms.map((dorm) => (
                        <li key={dorm.id} className='favorites-dorms-profile__content-wrapper__list__item'>
                            <CardFavoriteDormOnProfile dormitory={dorm} />
                        </li>
                    ))}
                </ul>

                <MapFavoritesDorms />
                {/* <div className='favorites-dorms-profile__content-wrapper__map-favorites-dorms-wrapper'>
                </div> */}
            </div>
        </div>
    )
}
