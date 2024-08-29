import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./sass/main.scss";

import Section from "./components/Section";
import SideBar from "./components/SideBar";
import NavBarHeader from "./components/NavBarHeader";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import HomeTheater from "./Pages/HomeTheater";
import GarageBar from "./Pages/GarageBar";
import MovieList from "./Pages/MovieList";
import MovieSearch from "./Pages/MovieSearch";

const App = () => {
  return (
    <>
      <Router>
        <NavBarHeader />
        <Section>
          <SideBar />
          <Routes>
            <Route path='/*' element={<Home />} />
            <Route path='/HomeTheater' element={<HomeTheater />} />
            <Route path='/GarageBar' element={<GarageBar />} />
            <Route path='/MovieList' element={<MovieList />} />
            <Route path='/MovieSearch' element={<MovieSearch />} />
          </Routes>
        </Section>
        <Footer />
      </Router>
    </>
  );
};

export default App;
