import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot ,faCalendarDays,faUsers,faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
export function Header(){
    return(
        <>    
        <div></div>    
        <span >
            <div ></div>
            <div ></div>
            <div ></div>
            <div ></div>
            <div ></div>
        </span>
        <header>
            <h1>EgyTour</h1>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="#Trips">Discover</a></li>
                <li><a href="/">How it works</a></li>
                <li><a href="/">AboutUs</a></li>
            </ul>
            <div className="signIn">
                <button>Log In</button>
                <button>Sign Up</button>
            </div>
        </header>
        <div className="headerInfo">
            <h1>Discover <span>self-guided </span>itineraries</h1>
            <p>More than 20 trip in sharm are ready for you.</p>
        </div>
        <div className="navbar">
            <ul>
                <li>
                <div><FontAwesomeIcon icon={faLocationDot} /><p>Trip</p></div>
                <p>Choose a trip</p>
                </li>
                <li>
                <div><FontAwesomeIcon icon={faCalendarDays} /><p>Dates</p></div>
                <p>Choose a date</p>
                </li>
                <li>
                <div><FontAwesomeIcon icon={faUsers} /><p>Travelers</p></div>
                <p>Number of tickets</p>
                </li>
               
                <li>
                     <FontAwesomeIcon icon={faMagnifyingGlass} />
                </li>
            </ul>
           
        </div>
        </>
    );
}