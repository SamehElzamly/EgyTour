import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlane} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
export function HeadGlobal(){
    return(
        <header id='header'>
            <div className='logo' onClick={()=>{
                window.location.assign('/')
            }}>
                <FontAwesomeIcon icon={faPlane}/>
                <h1>EgyTour</h1>
            </div>
            <ul>
                <li><a href="/" className='activePage'>Home</a></li>
                <li><a href="#Trips">Discover</a></li>
                <li><a href="#Footer">Contact Us</a></li>
                <li><a href="#AboutUs">AboutUs</a></li>
            </ul>
            <div className="signIn">
                <Link to='/log in' className='button'>Log In</Link>
                <Link to='/sign up' className='button'>Sign Up</Link>
            </div>
        </header>
        )
}