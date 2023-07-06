import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlane,faUser } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
export function HeadGlobal() {

const[loggedIn,setLoggedIn]=useState(false)

    const logIn=()=>{
        if(loggedIn){
            return (
            <div className="signIn">
                {/* <img src={user[0].picture} alt={user[0].name}></img> */}
                <Link to={'/'} className='button' onClick={()=>{
                    localStorage.setItem("case","logedOut");
                    localStorage.removeItem("id");
                    window.location.href='/'
                }}>Logout</Link>
                <Link to={`/${window.localStorage.getItem('id')}`}>
                    <FontAwesomeIcon icon={faUser} />
                </Link>
            </div>
            )
        }
        else{
            return (
            <div className="signIn">
                <Link to='/log in' className='button'>Log In</Link>
                <Link to='/sign up' className='button'>Sign Up</Link>
            </div>
                )
        }
    }

    useEffect(()=>{
        if(localStorage.getItem('case')==="logedIn")
            setLoggedIn(true)
        else
            setLoggedIn(false)
    },[])
    return (
        <header id='header'>
            <div className='logo' onClick={() => {
                window.location.assign('/')
            }}>
                <FontAwesomeIcon icon={faPlane} />
                <h1>EgyTour</h1>
            </div>
            <ul>
                <li><a href="/#Home" className='activePage'>Home</a></li>
                <li><Link to="/discover">Discover</Link></li>
                <li><Link to="/fav trips">Favourite</Link></li>
                <li><a href="/#AboutUs">AboutUs</a></li>
                <li><a href="/#Footer">Contact Us</a></li>
            </ul>
            {logIn()}
        </header>
    )
}