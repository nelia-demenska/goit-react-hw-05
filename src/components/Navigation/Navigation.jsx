import { NavLink } from 'react-router';
import css from './Navigation.module.css';
import { buildLinkClass } from '../../../helpers/buildLinkClass'

export default function Navigation () {
    return (
    <header className={css.header}>
        <nav className={css.nav}>
            <NavLink className={buildLinkClass} to='/'>Home</NavLink>
            <NavLink className={buildLinkClass} to='/movies'>Movies</NavLink>
        </nav>
    </header>
    )
}