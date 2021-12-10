import '../styles/index.scss';
import Header from './Header';
import Updates from './Updates';
import Footer from './Footer';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <section className="content-area">
          <h1>Hello react world!</h1>
        </section>
        <Updates />
      </main>
      <Footer />
    </>
  );
};

export default App;