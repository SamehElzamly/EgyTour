import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import boat from '../public/images/boat.jpg';
import dahab from '../public/images/dahab.jpg'
import santCathrine from '../public/images/santCathrine.jpg'
import snorkling from '../public/images/snorkling.jpg'
import {faLocationDot,faChevronDown,faArrowRight,faArrowLeft,faVanShuttle,faCalendarDays} from '@fortawesome/free-solid-svg-icons';
import {faHeart} from '@fortawesome/free-regular-svg-icons'
export function Trips(){
    return(
        <div id="Trips">
            <div className="tripsHead">
                <div><h2>Discover trips</h2><p>Explore all available trips in Sharm Elshiekh</p></div>
                <div className="button"><FontAwesomeIcon icon={faLocationDot}/><p>All</p><FontAwesomeIcon icon={faChevronDown}/></div>
                <div><FontAwesomeIcon icon={faArrowLeft}/><FontAwesomeIcon icon={faArrowRight}/></div>
            </div>
            <div className="tripsBody">
                <div className="card">
                    <img src={dahab} alt="dahab"/>
                        <FontAwesomeIcon icon={faVanShuttle}/>
                        <FontAwesomeIcon icon={faHeart}/>
                    <div>
                            <h3>Dahab</h3>
                            <h3>20$</h3>
                    </div>
                </div>
                <div className="card">
                    <img src={santCathrine} alt="santCathrine"/>
                        <FontAwesomeIcon icon={faVanShuttle}/>
                        <FontAwesomeIcon icon={faHeart}/>
                    <div>
                            <h3>santCathrine</h3>
                            <h3>40$</h3>
                    </div>
                </div><div className="card">
                    <img src={boat} alt="boat"/>
                        <FontAwesomeIcon icon={faVanShuttle}/>
                        <FontAwesomeIcon icon={faHeart}/>
                    <div>
                            <h3>boat trip</h3>
                            <h3>40$</h3>
                    </div>
                </div><div className="card">
                    <img src={snorkling} alt="snorkling"/>
                        <FontAwesomeIcon icon={faVanShuttle}/>
                        <FontAwesomeIcon icon={faHeart}/>
                    <div>
                            <h3>snorkling</h3>
                            <h3>20$</h3>
                    </div>
                </div>
            </div>
            <div className="tripsFoot">
                <button className="button">View All</button>
            </div>
        </div>
        );
}