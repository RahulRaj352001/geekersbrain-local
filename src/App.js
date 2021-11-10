import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Home/Header";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home";
import ErrorPage from "./pages/ErrorPage";
function App() {
  return (
    <>
      <header>
        <Header />
      </header>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/home" element={<Home />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
