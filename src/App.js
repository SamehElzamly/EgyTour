import { Header } from './components/Header';
import { Trips } from './components/Trips';
import { AboutUs } from './components/AboutUs';
import { Footer } from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="container">
      <header className="header">
        <Header/>
      </header>
      <section>
        <Trips/>
        <AboutUs/>
      </section>
      <Footer/>
    </div>
  );
}

export default App;
