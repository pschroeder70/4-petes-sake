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

          <h3>About me? </h3><span class="section__content--date">7/7/2023</span>
          <p>Aww you wanna know about me?</p>
          <p>Well I am an avid movie collector/watcher, mostly 4k.  I know enough about cars to get myself in trouble when I (try) to fix them.</p>
          <p>Been married more then once, have some amazing kids, all grown up now.  And currently the best wife in the world, no...you can't have her.</p>
          <p>I am at a crossroads(?) in my life right now, for the past 30 years I have been a front end web developer. But I have gotten older, and my family took priority, and to be honest I think I may have lost a step or two. It is a great gig, but a tough gig that requires constant learning of new things. I was laid-off in March (after 9 years), and haven't really touched a computer much, other then to look for jobs. And mostly those jobs have been more basic, I really wish I could go back to working for Blockbuster (yup, that old) that was a really awesome gig.  Not only that being 53 it seems not many people are looking to bring you on.</p>
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
