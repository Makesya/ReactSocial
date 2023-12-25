import css from './Navigation.module.css'
import { NavLink } from 'react-router-dom'
const Navigation = () => {
    return (
        <nav className={css.nav}>
            <ul>
                <li><NavLink to="/profile" className={(navData) => navData.isActive ? css.selected : ""}>Profile</NavLink></li>
                <li><NavLink to="/messages" className={(navData) => navData.isActive ? css.selected : ""}>Messages</NavLink></li>
                <li><NavLink to="/news" className={(navData) => navData.isActive ? css.selected : ""}>News</NavLink></li>
                <li><NavLink to="/music" className={(navData) => navData.isActive ? css.selected : ""}>Music</NavLink></li>
                <li><NavLink to="/settings" className={(navData) => navData.isActive ? css.selected : ""}>Settings</NavLink></li>
            </ul>
        </nav>
    )
}
export default Navigation;