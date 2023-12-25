import css from './Header.module.css';
const Header = () => {
    return (
        <header className={css.header}>
            <img className={css.logoImage} src="logo192.png" alt="" />
            <h1>React Social Network</h1>
        </header>
    )
}
export default Header;