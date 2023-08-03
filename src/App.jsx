import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./sass/main.scss";

import Home from "./components/Pages/Home.jsx";
import HomeTheater from "./components/pages/HomeTheater.jsx";
import GarageBar from "./components/pages/GarageBar.jsx";
import Section from "./components/Section.jsx";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import SideBar from "./components/SideBar";
import Movies from "./components/Pages/Movies.jsx";

const App = () => {
  return (
    <>
      <Router>
        <Header headerTitle='4 Petes Sake' />
        <Section>
          <Routes>
            <Route path='/*' element={<Home />} />
            <Route path='/HomeTheater' element={<HomeTheater />} />
            <Route path='/GarageBar' element={<GarageBar />} />
            <Route path='/Movies' element={<Movies />} />
          </Routes>
          <SideBar title='Some Stuff'></SideBar>
        </Section>
        <Footer />
      </Router>
    </>
  );
};

export default App;
