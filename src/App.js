import { Header } from './components/Header';
import { Trips } from './components/Trips';
import { AboutUs } from './components/AboutUs';
import { Footer } from './components/Footer';
import './home.css';
import { Routes,Route } from 'react-router-dom';
import { Search } from './components/Search';
function App() {
  //add trip to favourite
  let trips=document.querySelectorAll('.card svg:nth-child(3)')
  trips.forEach(e=>{
    e.addEventListener('click',()=>{
      e.classList.toggle('favouriteTrip')
    })
  })
  return (
    <Routes>
      <Route path='/' element={
        <>
          <div className="container">
            <header className="header">
              <Header/>
            </header>
              <section onLoad={()=>{
                // header change on scrool
                const header =document.querySelector('header header')
                const headerInfo=document.querySelector('.header .headerInfo')
                window.onscroll = function() {
                if (this.pageYOffset >10) {
                    header.classList.add("fixedHeader");
                    headerInfo.classList.add('staticHeaderInfo')
                }
                else{
                    headerInfo.classList.remove('staticHeaderInfo')
                    header.classList.remove("fixedHeader");
                }
                }
              /////////////////// 
              }}>
              <Trips/>
              <AboutUs/>
            </section>
            <Footer/>
          </div>
        </>
      }/>
      <Route path='/search' element={<Search/>}/>
    </Routes>
  );
}
export default App;
