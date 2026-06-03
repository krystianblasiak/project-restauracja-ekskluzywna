import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import NotFound from "./components/NotFound/NotFound";
import Menu from "./components/Menu/Menu";

function App() {
  return (
    <main>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/menu" element={<Menu />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      <Footer />
    </main>
  );
}

export default App;
