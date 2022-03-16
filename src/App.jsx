import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './styles/index.scss'
import Header from './components/header'
import Nav from './components/nav'
import Hero from './components/hero'
import Updates from './components/updates'
import Footer from './components/footer'

import Home from './pages/Home'
import Movies from './pages/movies'
import Theater from './pages/theater'

const App = () => {
  return (
    <>
      <Header 
        headerTitle="4 Petes Sake"
      >
      </Header>
      <Hero>this is the hero section</Hero>
      <Updates title="What's New">
        <ul>
          <li>Nothing, just started this...</li>
        </ul>
      </Updates>
      <Footer />
    </>
  );
};

export default App;
