import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./sass/main.scss";

import Section from "./components/Section";
import NavBarHeader from "./components/NavBarHeader";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
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
          <Routes>
            <Route path='/*' element={<Home />} />
            <Route path='/HomeTheater' element={<HomeTheater />} />
            <Route path='/GarageBar' element={<GarageBar />} />
            <Route path='/Movies' element={<MovieList />} />
            <Route path='/MovieSearch' element={<MovieSearch />} />
          </Routes>
          <SideBar title='Some Stuff'></SideBar>
        </Section>
        <Footer />
      </Router>
    </>
  );
};

export default App;
