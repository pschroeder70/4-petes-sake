import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './sass/main.scss'
import Header from './components/header'
import Nav from './components/nav'
import Section from './components/section'
import Content from './components/content'
import Hero from './components/hero'
import Updates from './components/updates'
import Footer from './components/footer'

const App = () => {
  return (
    <>
      <Header 
        headerTitle="4 Petes Sake"
      >
      </Header>
      <Section>
        <Hero>this is the hero section</Hero>
      </Section>
      <Section>
        <Content>
          <h2>Testing Content 1</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam lacus suspendisse faucibus interdum posuere lorem. Amet porttitor eget dolor morbi non arcu. Ultricies leo integer malesuada nunc vel. Pellentesque sit amet porttitor eget. Porttitor massa id neque aliquam vestibulum morbi. Suspendisse potenti nullam ac tortor vitae purus. Nisl purus in mollis nunc sed id semper. Suscipit tellus mauris a diam maecenas sed. </p>
          <p>Est placerat in egestas erat imperdiet sed euismod nisi. Integer malesuada nunc vel risus. Mi eget mauris pharetra et ultrices neque ornare. Scelerisque eleifend donec pretium vulputate sapien nec sagittis. Lacus viverra vitae congue eu consequat ac. Egestas erat imperdiet sed euismod nisi porta lorem mollis. Ut venenatis tellus in metus vulputate eu. Pellentesque diam volutpat commodo sed egestas.</p>

          <h2>Testing Content 2</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quam lacus suspendisse faucibus interdum posuere lorem. Amet porttitor eget dolor morbi non arcu.</p>
          <p>Ultricies leo integer malesuada nunc vel. Pellentesque sit amet porttitor eget. Porttitor massa id neque aliquam vestibulum morbi. Suspendisse potenti nullam ac tortor vitae purus. Nisl purus in mollis nunc sed id semper. Suscipit tellus mauris a diam maecenas sed. </p>
          <p>Est placerat in egestas erat imperdiet sed euismod nisi. Integer malesuada nunc vel risus. Mi eget mauris pharetra et ultrices neque ornare. Scelerisque eleifend donec pretium vulputate sapien nec sagittis. Lacus viverra vitae congue eu consequat ac. Egestas erat imperdiet sed euismod nisi porta lorem mollis. Ut venenatis tellus in metus vulputate eu. Pellentesque diam volutpat commodo sed egestas.</p>
        </Content>
        <Updates title="What's New">
          <ul>
            <li>Nothing, just started this...</li>
          </ul>
        </Updates>
      </Section>
      <Footer />
    </>
  );
};

export default App;
