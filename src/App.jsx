import { useState } from "react";
import "./App.scss";
import { BeerPreview } from "./components/BeerPreview/BeerPreview";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Modal } from "./components/Header/modal";
import { beer } from "./components/data/beerData";
import { Hero } from "./components/Hero/Hero";

function App() {
  const [modalActive, setModalActive] = useState(true);

  return (
    <div className="App">
      <Header />
      <Hero />
      <Modal active={modalActive} setActive={setModalActive} />
      <BeerPreview beerData={beer} />
      <Footer />
    </div>
  );
}

export default App;
