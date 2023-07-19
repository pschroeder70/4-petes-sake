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

          <h3>About me? </h3><span className="section__content--date">7/7/2023</span>
          <p>Aww you wanna know about me?</p>
          <p>Well I am an avid movie collector/watcher, mostly 4k.  I know enough about cars to get myself in trouble when I (try) to fix them.</p>
          <p>Been married more then once, have some amazing kids, all grown up now.  And currently the best wife in the world, no...you can't have her.</p>
          <p>Was with my last company for 10 years, and sadly was laid-off, so been looking for my next adventure!</p>
          <p>I also feel like, my site is never 'ready', partially due to not having much artistic skill, and when you do something for a living you never get time to work on your own thing.  Example: Mechanic with a busted ride, or a house painter whos house needs painting, that sort of thing.</p>
          <script>
            const canvas = document.getElementById("tutorial");
            const ctx = canvas.getContext("2d");
          </script>
        </Content>
        <Stats
          title="Some fun stuff should be over here"
        >
        </Stats>
      </Section>
      <Footer />
    </>
  );
};

export default App;
