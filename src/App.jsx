import "./App.scss";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Beer } from "./pages/Beer";
import { Snacks } from "./pages/Snacks";
import { Menu } from "./pages/Menu";
import { Galery } from "./pages/Galery";
import { Contacts } from "./pages/Contacts";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/beer" element={<Beer />} />
        <Route path="/snacks" element={<Snacks />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/galary" element={<Galery />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
