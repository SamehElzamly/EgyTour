import { Header } from './components/Header';
import {Trips} from './components/Trips'
import { AboutUs } from './components/AboutUs';
import { Footer } from './components/Footer';
import './home.css';
import { Routes,Route } from 'react-router-dom';
import { Search } from './components/Search';
import { useDispatch,useSelector } from 'react-redux';
import { useEffect } from 'react';
import { addTrips } from './store/tripsSlice';
import { LogIn } from './components/LogIn';
import { SignUp } from './components/SignUp';


function App() {
  // load trips from api
    const dispatch=useDispatch();
    let api='http://localhost:3001/trips'
    useEffect(()=>{
         fetch(api)
         .then(res=> {return res.json()})
         .then(res=>{
            dispatch(addTrips(res))
        }
            )
        .catch(err=>console.log(err))
    },[])
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
                const links=document.querySelectorAll('#header ul li a')

                window.onscroll = function() {
                if (this.pageYOffset >10) {
                    header.classList.add("fixedHeader");
                    headerInfo.classList.add('staticHeaderInfo')
                }
                else{
                    headerInfo.classList.remove('staticHeaderInfo')
                    header.classList.remove("fixedHeader");
                }
                /////////////////// 
              // avtive section change on scrool
              if(this.pageYOffset>330&&this.pageYOffset<900){
                links.forEach(e=>{
                  e.classList.remove('activePage')
                })
                links[1].classList.add('activePage')
              }
              else if(this.pageYOffset>900&&this.pageYOffset<1680){
                links.forEach(e=>{
                  e.classList.remove('activePage')
                })
                links[2].classList.add('activePage')
              }
              else if(this.pageYOffset>1680){
                links.forEach(e=>{
                  e.classList.remove('activePage')
                })
                links[3].classList.add('activePage')
              }
              else{
                links.forEach(e=>{
                  e.classList.remove('activePage')
                })
                links[0].classList.add('activePage')
              }
                }
              }}>
                <Trips/>
              <AboutUs/>
            </section>
            <Footer/>
          </div>
        </>
      }/>
      <Route path='/discover' element={<Search/>}/>
      <Route path='/log in' element={      <div className='logInPage'>
        <LogIn/>
      </div>} />
      <Route path='/sign up' element={
      <div className='signUpPage'>
        <SignUp/>
      </div>
} />
    </Routes>
  );
}
export default App;
