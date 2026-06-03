import styles from "./Home.module.scss";
import Hero from "../Hero/Hero";
import AboutUs from "../AboutUs/AboutUs";
import Contact from "../Contact/Contact";

const Home = () => {
    return (
        <div>
            <Hero />
            <AboutUs />
            <Contact />
        </div>
    )
}

export default Home;
