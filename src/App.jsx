import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./sass/main.scss";
import Header from "./components/header/";
import Section from "./components/section";
import Content from "./components/content";
import Hero from "./components/hero";
import Stats from "./components/stats";
import Footer from "./components/footer";

const App = () => {
  return (
    <>
      <Header headerTitle="4 Petes Sake"></Header>
      <Section>
        <Hero>I am 52 and have no idea what I am doing anymore.</Hero>
      </Section>
      <Section>
        <Content>
          <h2>Get ya t-shirts...</h2>
          <a href="4PetesSakeShirts.etsy.com">4 Petes Sake Shirts</a></p>
        </Content>
        <Stats
          title="Some fun stuff should be over here"
          age="52 years"
          height="5 ft 8 inch"
        ></Stats>
      </Section>
      <Footer />
    </>
  );
};

export default App;
