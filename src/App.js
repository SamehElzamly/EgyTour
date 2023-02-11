import { Header } from './components/Header';
import { Trips } from './components/Trips';
import './App.css';

function App() {
  return (
    <div className="container">
      <header className="header">
        <Header/>
      </header>
        <Trips/>
    </div>
  );
}

export default App;
