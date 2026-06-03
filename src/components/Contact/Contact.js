import styles from "./Contact.module.scss";
import Container from "../Container/Container";

const Contact = () => {
    return (
        <section id="kontakt" className={styles.section}>
            <Container>
                <h2 className={styles.h2}>Kontakt</h2>
                <div className={styles.wrapper}>
                    <form className={styles.form}>
                        <input className={styles.input} placeholder="Imię i nazwisko" type="text"/>
                        <input className={styles.input} placeholder="E-mail" type="email"/><br />
                        <input className={styles.input} placeholder="Telefon kontaktowy" type="tel" />
                        <input className={styles.input} placeholder="Temat" type="text" /><br />
                        <textarea className={styles.textarea} placeholder="Treść wiadomość" /><br />
                        <button type="submit" className={styles.btn}>Wyślij wiadomość</button>
                    </form>
                    <p className={styles.p}>
                        Adres:<br />
                        ul. Polna 145<br />
                        90-001 Łódź<br /><br />
                        Telefon kontaktowy:<br />
                        124 526 900<br /> <br />
                        E-mail:<br />
                        kontakt@ekskluzywna.pl
                    </p>
                </div>
            </Container>
        </section>
        
    )
}

export default Contact;