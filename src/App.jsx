import "./App.scss";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Beer } from "./pages/Beer";
import { Menu } from "./pages/Menu";
import { Galery } from "./pages/Galery";
import { Contacts } from "./pages/Contacts";
import { NotFound } from "./components/NotFound/NotFound";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<Beer />} />
        <Route path="/menu" element={<Menu />}>
          <Route path="bar" element={<Menu />} />
          <Route path="snacks" element={<Menu />} />
          <Route path="kitchen" element={<Menu />} />
          <Route path="souses" element={<Menu />} />
        </Route>
        <Route path="/atmosphere" element={<Galery />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
