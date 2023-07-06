import { Header } from './components/Header';
import {Trips} from './components/Trips'
import { AboutUs } from './components/AboutUs';
import { Footer } from './components/Footer';
import './home.css';
import { Routes,Route, Navigate, Outlet } from 'react-router-dom';
import { Search } from './components/Search';
import { useSelector,useDispatch } from 'react-redux';
import { LogIn } from './components/LogIn';
import { SignUp } from './components/SignUp';
import { FavTrips } from './components/profile/FavTrips';
import { useEffect } from 'react';
import { fetchUsers } from './store/users';
import { fetchTrips } from './store/tripsSlice';
import { ProfileNav } from './components/Profile';
import { HeadGlobal } from './components/HeadGlobal';
import { MyTrips } from './components/profile/MyTrips';
import { PaymentHistory } from './components/profile/paymentHistory';

function App() {
  const user=useSelector(state=>state.reducer.fetchUserData)
  const dispatch=useDispatch();
  // const mainTrips=useSelector(state=>state.reducer.tripsSlice)
  useEffect(()=>{
    dispatch(fetchUsers())
    dispatch(fetchTrips())
    })
  setTimeout(addToFav(),1000)
  function addToFav(trip){
    const icons=document.querySelectorAll('.card svg:nth-child(3)')
    icons.forEach((icon,i)=>{
      icon.addEventListener('click',()=>{

      })
    })
  }

  return (
    <Routes>
      <Route path='/' element={
        <>
          <div className="container">
            <header className="header" id='Home'>
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
                links[3].classList.add('activePage')
              }
              else if(this.pageYOffset>1680){
                links.forEach(e=>{
                  e.classList.remove('activePage')
                })
                links[4].classList.add('activePage')
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
      <Route path='/fav trips' element={<FavTrips/>}/>
      <Route path='/log in' element={
          //       user[0]?(
          // <Navigate replace to={'/'}/>
      // ):
        (<div className='logInPage'>
          <LogIn/>
        </div>)
      } />
      <Route path='/sign up' element={
      //   user[0]?(
      //     <Navigate replace to={'/'}/>
      // ):
      (<div className='signUpPage'>
        <SignUp/>
      </div>)
} />
<Route path='/:userId' element={
  <>
    <HeadGlobal/>
    <div id="Profile">
      <div className="profileBody">
        <ProfileNav/>
        <Outlet/>
      </div>
    </div>
    <Footer/>
  </>
  }>
    <Route path='' element={<h1 className='rootPortfolio'>Welcome {user[0].firstName}</h1>}/>
  <Route path='myTrips' element={<MyTrips/>}/>
  <Route path='paymentHistory' element={<PaymentHistory/>}/>
  <Route path='favTrips'element={<FavTrips/>}/>
</Route>
    </Routes>
  );
}
export default App;
