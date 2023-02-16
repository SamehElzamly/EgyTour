import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlane} from '@fortawesome/free-solid-svg-icons'
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
                <li><a href="/">How it works</a></li>
                <li><a href="#AboutUs">AboutUs</a></li>
            </ul>
            <div className="signIn">
                <button>Log In</button>
                <button>Sign Up</button>
            </div>
        </header>
        )
}