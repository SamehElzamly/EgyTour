import ill1 from '../public/images/undraw_travel_mode_re_2lxo.svg'
import ill2 from '../public/images/undraw_trip_re_f724.svg'
import {faAngleRight,faAngleLeft} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export function AboutUs(){
    return(
        <div id='AboutUs'>
            <div className="aboutUsHead">
                <div>
                    <h2>An <span>easier</span> way to manage your trips</h2>
                    <p>We make it super easy to schedule, organize and travel with friends or family. Trips is free — and available to use no matter where you book.</p>
                    <p>We are here to make it easy for you to book trips and enjoy your stay in Sharm Elsheikh.</p>
                <p>all you have to do is explore our availble trips and book one.</p>
                <p>we will contact you to confirm the booking process and discussing trip details.</p>
                    <button className='button'>Get Started</button>
                </div>
                <div>
                    <img src={ill2} alt='travel car'/>
                </div>
            </div>
            <div className="aboutUsBody">
                <div>
                    <h2>what our travelers are saying</h2>
                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
                    <p><span>-Name</span>( trip name )</p>
                    <div>
                        <FontAwesomeIcon icon={faAngleLeft}/>
                        <FontAwesomeIcon icon={faAngleRight}/>
                    </div>
                </div>
                <div>
                    <img src={ill1} alt='traveler'/>
                </div>
            </div>
        </div>
    );
}