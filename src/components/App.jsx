import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import '../styles/index.scss';
import Header from './Header';
import Updates from './Updates';
import Footer from './Footer';

import Home from '../pages/Home';
import Movies from '../pages/movies';
import Theater from '../pages/theater';

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <section className='content-area'>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/movies' element={<Movies />} />
            <Route path='/tv' element={<Theater />} />
          </Routes>
        </section>
        <Updates />
      </main>
      <Footer />
    </Router>
  );
};

export default App;
