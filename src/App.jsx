import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./sass/main.scss";
import Header from "./components/header/";
import Section from "./components/section";
import Content from "./components/content";

import Stats from "./components/stats";
import Footer from "./components/footer"

const App = () => {
  return (
    <>
      <Header headerTitle="4 Petes Sake" />
        
      <Section>
        <Content>
          <h2>What to do?</h2>
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
