import './styles.scss'

export function UserStatistics() {
    return (
        <ul className='user-statistics'>
            <li className='user-statistics__item'>
                <span className='user-statistics__item__value'>10</span>
                <span className='user-statistics__item__label'>Отзывов</span>
            </li>

            <li className='user-statistics__item'>
                <span className='user-statistics__item__value'>10</span>
                <span className='user-statistics__item__label'>Избранное</span>
            </li>

        </ul>
    )
}
