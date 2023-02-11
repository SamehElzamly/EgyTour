import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
                    <img src="https://c1.wallpaperflare.com/preview/171/977/172/dahab-blue-hole-beach-egypt-sky-sea.jpg" alt="dahab"/>
                        <FontAwesomeIcon icon={faVanShuttle}/>
                        <FontAwesomeIcon icon={faHeart}/>
                    <div>
                            <h3>Dahab</h3>
                            <h3>20$</h3>
                    </div>
                </div>
                <div className="card">
                    <img src="https://c1.wallpaperflare.com/preview/144/815/805/egypt-sinai-st-catherine-s-monastery-mountain.jpg" alt="santCathrine"/>
                        <FontAwesomeIcon icon={faVanShuttle}/>
                        <FontAwesomeIcon icon={faHeart}/>
                    <div>
                            <h3>santCathrine</h3>
                            <h3>40$</h3>
                    </div>
                </div><div className="card">
                    <img src="https://c1.wallpaperflare.com/preview/934/805/116/ship-sea-red-sea-water.jpg" alt="boat"/>
                        <FontAwesomeIcon icon={faVanShuttle}/>
                        <FontAwesomeIcon icon={faHeart}/>
                    <div>
                            <h3>boat trip</h3>
                            <h3>40$</h3>
                    </div>
                </div><div className="card">
                    <img src="https://c0.wallpaperflare.com/preview/773/1017/146/water-human-person-outdoors.jpg" alt="snorkling"/>
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