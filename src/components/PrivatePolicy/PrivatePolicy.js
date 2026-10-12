import Container from "../Container/Container";
import styles from "./PrivatePolicy.module.scss";

const PrivatePolicy = () => {
    return (
        <div className={styles.privatePolicy}>
            <Container>
                <h2 className={styles.h2}>Polityka Prywatności</h2>
                <p className={styles.p}>Ta strona jest demonstracją i nie zbiera danych osobowych w celach komercyjnych. Formularze, jeśli są, służą wyłącznie do pokazania działania interfejsu — wpisane dane nie są zapisywane ani przekazywane dalej. Nie używamy cookies analitycznych ani marketingowych. To nie jest prawdziwa polityka prywatności.</p>
            </Container>
        </div>
    )
}

export default PrivatePolicy;