import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Menu } from "./pages/Menu";
import { Atmosphere } from "./pages/Atmosphere";
import { Contacts } from "./pages/Contacts";
import { NotFound } from "./modules/NotFound/NotFound";
import { BeerPreview } from "./modules/Menu/BeerPreview/BeerPreview";
import { SharedLayout } from "./components/SharedLayout/SharedLayout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="about-us" element={<About />} />
        <Route path="menu" element={<Menu />}>
          <Route path="bar" element={<BeerPreview />} />
          <Route path="snacks" element={<BeerPreview />} />
          <Route path="kitchen" element={<BeerPreview />} />
          <Route path="souses" element={<BeerPreview />} />
        </Route>
        <Route path="atmosphere" element={<Atmosphere />} />
        <Route path="contacts" element={<Contacts />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
