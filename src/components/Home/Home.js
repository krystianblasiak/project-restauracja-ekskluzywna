import styles from "./Home.module.scss";
import Hero from "../Hero/Hero";
import AboutUs from "../AboutUs/AboutUs";

const Home = () => {
    return (
        <div>
            <Hero />
            <AboutUs />
        </div>
    )
}

export default Home;
