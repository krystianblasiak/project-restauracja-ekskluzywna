import { Route, Routes } from "react-router-dom";
import Container from "./components/Container/Container";
import NavBar from "./components/NavBar/NavBar";
import Home from "./components/Home/Home";

function App() {
  return (
    <main>
      <NavBar />
      <Container>
        <Routes>
          <Route path="/" element={<Home/>} />
        </Routes>
      </Container>
    </main>
  );
}

export default App;
