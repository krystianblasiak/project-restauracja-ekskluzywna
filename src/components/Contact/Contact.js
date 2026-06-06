import styles from "./Contact.module.scss";
import Container from "../Container/Container";

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { resetStatus, sendEmail } from "../../redux/contactSlice";

const Contact = () => {
    const dispatch = useDispatch();
    const { loading, success, error } = useSelector(state => state.contact);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
    });

    useEffect(() => {
        if(success){
            setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
            const timer = setTimeout(() => dispatch(resetStatus()), 6000);
            return () => clearTimeout(timer);
        }
    }, [success, dispatch]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value});
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(sendEmail(formData));
    };

    return (
        <section id="kontakt" className={styles.section}>
            <Container>
                <h2 className={styles.h2}>Kontakt</h2>
                <div className={styles.wrapper}>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <input className={styles.input} placeholder="Imię i nazwisko" type="text" name="name" value={formData.name} onChange={handleChange} required/>
                        <input className={styles.input} placeholder="E-mail" type="email" name="email" value={formData.email} onChange={handleChange} required/><br />
                        <input className={styles.input} placeholder="Telefon kontaktowy" type="tel" name="phone" value={formData.phone} onChange={handleChange} required/>
                        <input className={styles.input} placeholder="Temat" type="text" name="subject" value={formData.subject} onChange={handleChange} required/><br />
                        <textarea className={styles.textarea} placeholder="Treść wiadomość" name="message" value={formData.message} onChange={handleChange} required /><br />
                        <button type="submit" className={styles.btn}>{loading ? "Wysyłanie..." : "Wyślij wiadomość"}</button>
                        {success && <p style={{color: 'green'}}>✅ Wiadomość wysłana!</p>}
                        {error && <p style={{color: 'red'}}>❌ {error}</p>}
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