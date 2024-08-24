import { NavLink } from 'react-router-dom'

import style from './Nav.module.scss';


const navItems = [
    { label: 'Главная', to: '/' },
    { label: 'Учить слова', to: '/vocabs' },
    { label: 'Самоучитель', to: '/tables' }
]

export default function Nav() {
    return (
        <nav>
            <div className={style.nav}>
                <NavLink to="/" className={style.logo}><strong>Learn<em> English</em></strong>
                </NavLink>

                <ul className={style.nav__list}>
                    {navItems.map((item, index) => (
                        <li key={index} className={style.nav__list_item}>
                            <NavLink to={item.to} className={style.link}>
                                {item.label}
                            </NavLink>
                        </li>
                    ))}
                </ul>

            </div>
        </nav>
    );
}
