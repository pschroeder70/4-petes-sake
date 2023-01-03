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
        <Hero>This is my fight to get back in shape, at 52 years old!</Hero>
      </Section>
      <Section>
        <Content>
          <h2>Some History</h2>
          <p>I have let myself go...a lot.</p>
          <p>
            Few years back I was diagnosed with arthritis, and due to being a
            contractor and medical insurance being wonky, I didn't get
            midication for a while. So I spent almost a year sitting on my ass,
            eating shit food, and not doing much of anything but working (I am a
            web developer so I sit most of the time, and yes, this site sucks,
            it's not a porfolio piece, it's just a way simple way to keep track
            of what I am doing without having to hand write it).
          </p>
          <p>
            Now I have been on medication for a few years now, and it works
            great. I have pretty much full mobility, and really have no excuse
            as to why I kept slacking off...other then I am a lazy dude.
          </p>
          <p>
            Well my youngest daughter is about to graduate, and I think it's
            time to get my shit together. Not for her, not for my wife (though
            she deserves a better looking me, she's amazing!) but for me.
          </p>
          <p>
            I just purchased a Marcy 150 stack home gym, it's not the best, but
            it will fit my life right now. It should arrive on Jan. 13th. That's
            when this gets going.
          </p>
        </Content>
        <Stats
          title="My Stats @ the Start"
          age="52 years"
          weight="TBD @ start"
          height="5 ft 8 inch"
          bmi="TBD @ start"
        ></Stats>
      </Section>
      <Footer />
    </>
  );
};

export default App;
