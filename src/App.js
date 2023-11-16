import Header from "./components/Header";
import Landing from "./pages/landing/Landing";
import Standings from "./pages/standings/Standings";
import Mailing from "./pages/mailing/Mailing";
import Game from "./pages/game/Game";
import Footer from "./components/Footer";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/standings" element={<Standings />} />
        <Route path="/mailing" element={<Mailing />} />
        <Route path="/game" element={<Game />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
