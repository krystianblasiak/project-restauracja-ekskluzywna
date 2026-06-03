import styles from "./NotFound.module.scss";
import Container from "../Container/Container";

const NotFound = () => {
    return (
        <div className={styles.div}>
            <Container>
                <h2 className={styles.h2}>404 Not Found</h2>
            </Container>
        </div>
    )
}

export default NotFound;