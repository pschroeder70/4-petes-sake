import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/index.scss';
import Header from './components/header';
import Hero from './components/hero';
import Updates from './components/updates';
import Footer from './components/footer';

import Home from './pages/Home';
import Movies from './pages/movies';
import Theater from './pages/theater';

import filmRole from './images/film-movie.mp4';

const App = () => {
  return (
    <Router>
      <Header />
      <Hero 
        video={filmRole}
      />
      <main>
        <section className='content-area'>
          <div className='content-area__body'>
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route path='/movies' element={<Movies />} />
              <Route path='/tv' element={<Theater />} />
            </Routes>
          </div>
          <Updates />
        </section>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
