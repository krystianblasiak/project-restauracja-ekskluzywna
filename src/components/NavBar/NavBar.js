import { NavLink } from "react-router-dom";
import styles from "./NavBar.module.scss";
import Container from "../Container/Container";
import { useEffect, useState } from "react";

const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const sync = () => {
            if(window.innerWidth > 767) {
                setIsOpen(false);
            }
        }
        window.addEventListener("resize", sync);
        return () => window.removeEventListener("resize", sync);
    })

    const handlerHumburger = () => {
        setIsOpen(!isOpen);
    }

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
                <div className={styles.div}>
                    <button className={styles.btn} onClick={handlerHumburger}><i className="fa-solid fa-bars"></i></button>
                </div>
                <div className={`${styles.menu} ${isOpen ? styles.activeMenu : ""}`}>
                    <ul className={styles.ul1}>
                        <li className={styles.li1}><NavLink to="/" className={({ isActive }) => isActive ? styles.isActive : undefined }>Strona Główna</NavLink></li>
                        <li className={styles.li1}><NavLink to="/menu" className={({ isActive }) => isActive ? styles.isActive : undefined }>Menu</NavLink></li>
                        <li className={styles.li1}><a href="/#onas" className={({ isActive }) => isActive ? styles.isActive : undefined }>O nas</a></li>
                        <li className={styles.li1}><NavLink to="/rezerwacja" className={({ isActive }) => isActive ? styles.isActive : undefined }>Rezerwacja</NavLink></li>
                        <li className={styles.li1}><a href="/#kontakt" className={({ isActive }) => isActive ? styles.isActive : undefined }>Kontakt</a></li>
                    </ul>
                </div>
            </Container>
        </nav>
    );
}

export default NavBar;