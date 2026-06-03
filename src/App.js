import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <main>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      <Footer />
    </main>
  );
}

export default App;
