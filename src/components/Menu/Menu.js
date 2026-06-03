import styles from "./Menu.module.scss";
import Container from "../Container/Container";

const Menu = () => {
    return (
        <div className={styles.menu}>
            <Container>
                <h2 className={styles.h2}>Menu</h2>
                <div className={styles.box}>
                    <img className={styles.img} src="images/pexels-karola-g-6660180.jpg" alt="Przystawki"></img>
                    <h3 className={styles.h3}>Przystawki</h3>
                    <div className={styles.box1}>
                        <div className={styles.box2}>
                            <p className={styles.p1}>Crostini z wołowiną</p><p className={styles.p2}>45 zł</p>
                        </div>
                        <p className={styles.p3}>rukola, rzodkiewka, krem balsamiczny, majonez sojowy</p>
                    </div>
                    <div className={styles.box1}>
                        <div className={styles.box2}>
                            <p className={styles.p1}>Sałatka Cezar z kurczakiem</p><p className={styles.p2}>50 zł</p>
                        </div>
                        <p className={styles.p3}>sałata rzymska, pomidor koktajlowy, boczek, Grana Padano, grzanka, sos cezar</p>
                    </div>
                    <div className={styles.box1}>
                        <div className={styles.box2}>
                            <p className={styles.p1}>Tatar z polędwicy wołowej</p><p className={styles.p2}>79 zł</p>
                        </div>
                        <p className={styles.p3}>ogórek konserwowy, żółtko, cebula czerwona, marynowane kurki, <br />musztarda
                        francuska, Grana Padano, pieczywo</p>
                    </div>
                </div>
                <div className={styles.box}>
                    <img className={styles.img} src="images/pexels-sylwester-ficek-154797634-33894617.jpg" alt="Dania główne"></img>
                    <h3 className={styles.h3}>Dania główne</h3>
                    <div className={styles.box1}>
                        <div className={styles.box2}>
                            <p className={styles.p1}>Pierś z kaczki</p><p className={styles.p2}>75 zł</p>
                        </div>
                        <p className={styles.p3}>puree buraczano-żurawinowe, karmelizowana śliwka, marchewka paryska,
                        groszek cukrowy, oliwa pietruszkowa, sos cydrowy</p>
                    </div>
                    <div className={styles.box1}>
                        <div className={styles.box2}>
                            <p className={styles.p1}>Stek z polędwicy wołowej</p><p className={styles.p2}>175 zł</p>
                        </div>
                        <p className={styles.p3}>pieczony ziemniak, pieczarki z rusztu, grillowana okra, sos demi glace,
                        czosnek konfitowany, masło ziołowe</p>
                    </div>
                    <div className={styles.box1}>
                        <div className={styles.box2}>
                            <p className={styles.p1}>Kurczak kukurydziany z pesto</p><p className={styles.p2}>65 zł</p>
                        </div>
                        <p className={styles.p3}>risotto z puree z groszku, fasolka szparagowa w tempurze, pomidorki
                        koktajlowe</p>
                    </div>
                </div>
                <div className={styles.box}>
                    <img className={styles.img} src="images/pexels-anhelina-vasylyk-734724285-34413626.jpg" alt="Pizza"></img>
                    <h3 className={styles.h3}>Pizza</h3>
                    <div className={styles.box1}>
                        <div className={styles.box2}>
                            <p className={styles.p1}>Margherita</p><p className={styles.p2}>30 zł</p>
                        </div>
                        <p className={styles.p3}>sos pomidorowy, mozzarella, pomidor, bazylia</p>
                    </div>
                    <div className={styles.box1}>
                        <div className={styles.box2}>
                            <p className={styles.p1}>Salami</p><p className={styles.p2}>40 zł</p>
                        </div>
                        <p className={styles.p3}>sos pomidorowy, mozzarella, salami, papryka, pieczarki</p>
                    </div>
                    <div className={styles.box1}>
                        <div className={styles.box2}>
                            <p className={styles.p1}>Capriciosa</p><p className={styles.p2}>35 zł</p>
                        </div>
                        <p className={styles.p3}>sos pomidorowy, mozzarella, szynka, kukurydza, pieczarki</p>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Menu;