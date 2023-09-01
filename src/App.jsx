import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Menu } from "./pages/Menu";
import { Atmosphere } from "./pages/Atmosphere";
import { Contacts } from "./pages/Contacts";
import { ErrorPage } from "./pages/ErrorPage";
import { BeerPreview } from "./modules/Menu/BeerPreview/BeerPreview";
import { SharedLayout } from "./components/SharedLayout/SharedLayout";
import { AsideMenu } from "./modules/Menu/AsideMenu/AsideMenu";

const MenuExample = () => {
  return (
    <div>
      <AsideMenu />
      <h1>Hello</h1>
    </div>
  );
};

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
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
}

export default App;
