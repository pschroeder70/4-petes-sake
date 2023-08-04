import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./sass/main.scss";

import Section from "./components/Section";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import Home from "./Pages/Home";
import HomeTheater from "./Pages/HomeTheater";
import GarageBar from "./Pages/GarageBar";
import MovieList from "./Pages/MovieList";

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
            <Route path='/Movies' element={<MovieList />} />
          </Routes>
          <SideBar title='Some Stuff'></SideBar>
        </Section>
        <Footer />
      </Router>
    </>
  );
};

export default App;
