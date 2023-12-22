import styles from "./Footer.module.css";
import { ReactComponent as Trademark } from "../../assets/trademark.svg";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Trademark />
            <p>Desenvolvido por Thiago Moura.</p>
        </footer>
    )
}

export default Footer;