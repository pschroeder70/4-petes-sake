import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./sass/main.scss";
import Header from "./components/Header";
import Section from "./components/Section";
import Stats from "./components/SideBar";
import Footer from "./components/Footer";
import Home from "./components/Pages/Home";
import HomeTheater from "./components/pages/HomeTheater";
import GarageBar from "./components/pages/GarageBar";

const App = () => {
  return (
    <>
      <Router>
        <Header headerTitle='4 Petes Sake' />
        <Section>
          <Routes>
            <Route path='/' exact element={<Home />} />
            <Route path='/HomeTheater' exact element={<HomeTheater />} />
            <Route path='/GarageBar' exact element={<GarageBar />} />
          </Routes>
          <Stats title='Some Stuff'></Stats>
        </Section>
        <Footer />
      </Router>
    </>
  );
};

export default App;
