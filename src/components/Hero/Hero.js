import { NavLink } from "react-router-dom";
import Container from "../Container/Container";
import styles from "./Hero.module.scss";

const Hero = () => {
    return (
        <header className={styles.h}>
            <Container>
                <div className={styles.wrapper}>
                    <div className={styles.box}>
                        <h1 className={styles.h1}>Restauracja <span className={styles.span}>Ekskluzywna</span></h1>
                        <ul className={styles.ul}>
                            <li className={styles.li}><NavLink to="/menu">Nasze menu</NavLink></li>
                            <li className={styles.li}><NavLink to="/rezerwacja">Rezerwacja</NavLink></li>
                        </ul>
                    </div>
                </div>
            </Container>
        </header>
    );
}

export default Hero;