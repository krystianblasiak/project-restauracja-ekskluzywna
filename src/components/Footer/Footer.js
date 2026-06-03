import styles from "./Footer.module.scss";
import Container from "../Container/Container";
import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <Container>
                <div className={styles.wrapper}>
                    <ul className={styles.ul}>
                        <li className={styles.li}><NavLink to="/" className={({ isActive }) => isActive ? styles.isActive : undefined }>Strona Główna</NavLink></li>
                        <li className={styles.li}><NavLink to="/menu" className={({ isActive }) => isActive ? styles.isActive : undefined }>Menu</NavLink></li>
                        <li className={styles.li}><a href="/#onas" className={({ isActive }) => isActive ? styles.isActive : undefined }>O nas</a></li>
                        <li className={styles.li}><NavLink to="/rezerwacja" className={({ isActive }) => isActive ? styles.isActive : undefined }>Rezerwacja</NavLink></li>
                        <li className={styles.li}><a href="/#kontakt" className={({ isActive }) => isActive ? styles.isActive : undefined }>Kontakt</a></li>
                    </ul>
                </div>
            </Container>
            <h6 className={styles.h6}>Copyright 2026 © Restauracja Ekskluzywna. Wszelkie prawa zastrzeżone.</h6>
        </footer>
    )
}

export default Footer;