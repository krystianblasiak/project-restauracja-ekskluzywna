import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.scss";
import Container from "../Container/Container";

const NavBar = () => {
    return (
        <nav className={styles.nav}>
            <Container>
                <ul className={styles.ul}>
                    <li className={styles.li}><NavLink to="/" className={({ isActive }) => isActive ? styles.isActive : undefined }>Strona Główna</NavLink></li>
                    <li className={styles.li}><NavLink to="/menu" className={({ isActive }) => isActive ? styles.isActive : undefined }>Menu</NavLink></li>
                    <li className={styles.li}><a href="/#onas" className={({ isActive }) => isActive ? styles.isActive : undefined }>O nas</a></li>
                    <li className={styles.li}><NavLink to="/rezerwacja" className={({ isActive }) => isActive ? styles.isActive : undefined }>Rezerwacja</NavLink></li>
                    <li className={styles.li}><a href="/#kontakt" className={({ isActive }) => isActive ? styles.isActive : undefined }>Kontakt</a></li>
                </ul>
            </Container>
        </nav>
    );
}

export default NavBar;