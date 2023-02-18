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
                <li><Link to="/" className='activePage'>Home</Link></li>
                <li><Link to="/discover">Discover</Link></li>
                <li><a href="/#AboutUs">Contact Us</a></li>
                <li><a href="/#Footer">AboutUs</a></li>
            </ul>
            <div className="signIn">
                <Link to='/log in' className='button'>Log In</Link>
                <Link to='/sign up' className='button'>Sign Up</Link>
            </div>
        </header>
        )
}