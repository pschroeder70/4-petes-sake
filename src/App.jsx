import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./sass/main.scss";
import Header from "./components/header/";
import Section from "./components/section";
import Content from "./components/content";

import Stats from "./components/stats";
import Footer from "./components/footer";

import NotLazy from "./images/not-lazy.png"

const App = () => {
  return (
    <>
      <Header headerTitle="4 Petes Sake" />
        
      <Section>
        <Content>
          <h2>Get ya t-shirts...</h2>
          <img src={NotLazy} alt="t-shirt with battery that says I'm not lazy I'm just in power-saving mode" className="content--promo-image" />
          <p><a href='https://www.4PetesSakeShirts.etsy.com' target='_blank'>4 Petes Sake Shirts</a></p>
        </Content>
        <Stats
          title="Some fun stuff should be over here"
        ></Stats>
      </Section>
      <Footer />
    </>
  );
};

export default App;
