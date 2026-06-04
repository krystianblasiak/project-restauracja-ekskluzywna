import styles from "./Booking.module.scss";
import Calendar from "../Calendar/Calendar";
import Container from "../Container/Container";

const Booking = () => {
    const handleChange = (e) => {
        e.preventDefault();
    };

    return (
        <div className={styles.booking}>
            <Container>
                <h2 className={styles.h2}>Rezerwacja</h2>
                <form className={styles.form} onChange={handleChange}>
                    <input className={styles.input1} placeholder="Imię" type="text"></input>
                    <input className={styles.input1} placeholder="Nazwisko" type="text"></input><br />
                    <input className={styles.input} placeholder="E-mail" type="email"></input><br />
                    <input className={styles.input} placeholder="Telefon kontaktowy" type="tel"></input> <br />
                    <select className={styles.input2}>
                        <option value="" disabled selected>Nr stolika</option>
                        <option value={1}>1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                        <option value={6}>6</option>
                        <option value={7}>7</option>
                        <option value={8}>8</option>
                        <option value={9}>9</option>
                        <option value={10}>10</option>
                        <option value={11}>11</option>
                        <option value={12}>12</option>
                        <option value={13}>13</option>
                        <option value={14}>14</option>
                        <option value={15}>15</option>
                    </select>
                    <div className={styles.wrapper}>
                        <Calendar />
                        <div className={styles.box}>
                            <div className={styles.box1}>
                                <button className={styles.btn1} onClick={handleChange}>16:00</button>
                                <button className={styles.btn1} onClick={handleChange}>17:00</button>
                                <button className={styles.btn1} onClick={handleChange}>18:00</button>
                            </div>
                            <div className={styles.box1}>
                                <button className={styles.btn1} onClick={handleChange}>19:00</button>
                                <button className={styles.btn1} onClick={handleChange}>20:00</button>
                                <button className={styles.btn1} onClick={handleChange}>21:00</button>
                            </div>
                        </div>
                    </div>
                    <br />
                    <button type="submit" className={styles.btn}>Rezerwuj</button>
                </form>
            </Container>
        </div>
    );
};

export default Booking;