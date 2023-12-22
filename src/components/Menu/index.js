import MenuLink from "../MenuLink";
import styles from "./Menu.module.css";

const Menu = () => {
    return (
        <header>
            <nav className={styles.navegation}>
                <MenuLink to="/">
                    Início
                </MenuLink>
                <MenuLink to="/aboutme">
                    Sobre mim
                </MenuLink>
            </nav>
        </header>
    )
}

export default Menu;