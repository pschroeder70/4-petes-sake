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
          <h2>Some History</h2>
          <p>I have developed websites for the last 30 years.</p>
          <p>Got laid off a few months ago</p>
          <p>Having a bit of a mid-life crisis, not sure what I am doing.</p>
          <p>
            Well my youngest daughter is about to graduate, and I think it's
            time to get my shit together. Not for her, not for my wife (though
            she deserves a better looking me, she's amazing!) but for me.
          </p>
          <p>
            What next?  Go back to the same old grind?
          </p>
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
