import useUser from '../../app/stores/useUser'
import s from './Header.module.scss'

export default function Header() {
    const { isAuth, setIsAuth } = useUser();

    return (
        <div className={s.header}>
            {isAuth ? <p className={s.username}>Добро пожаловать username</p> : <p className={s.username}>Добро пожаловать Гость</p>}

            {isAuth ? <button className={s.btn} onClick={() => setIsAuth(false)}><span>Выйти</span></button> : <button className={s.btn}><span>Войти</span></button>
            }

        </div >
    )
}
