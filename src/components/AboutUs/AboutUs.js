import styles from "./AboutUs.module.scss";
import Container from "../Container/Container";

const AboutUs = () => {
    return (
        <Container>
            <section className={styles.section}>
                <h2 className={styles.h2}>O Nas</h2>
                <div className={styles.wrapper}>
                    <img className={styles.img} src="images/pexels-ali-dashti-506667798-28241708.jpg" alt="Restauracja Ekskluzywna"></img>
                    <p className={styles.p}>Nasza restauracja to wyjątkowe
                        miejsce na kulinarnej mapie regionu,
                        stworzone z pasji do autentycznych
                        smaków i tradycyjnych receptur.
                        Każdego dnia dbamy o
                        niepowtarzalną atmosferę, serwując
                        Wam świeże, domowe potrawy
                        przygotowywane wyłącznie z
                        lokalnych produktów najwyższej
                        jakości.</p>
                </div>
            </section>
        </Container>
    )
}

export default AboutUs;