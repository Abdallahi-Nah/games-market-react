import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Header, Footer } from "./sections/index";
import { Home, Profile } from "./pages/index";
import { Container } from "./components/index";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </Container>
        <Footer />
      </Router>
    </>
  );
}

export default App;
