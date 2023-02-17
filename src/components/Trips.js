import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLocationDot,faChevronDown,faArrowRight,faArrowLeft,faVanShuttle} from '@fortawesome/free-solid-svg-icons';
import {faHeart} from '@fortawesome/free-regular-svg-icons'
import { useSelector } from "react-redux";



export function Trips(){
    const trips=useSelector(state=>state.tripsSlice)


    return(
        <div id="Trips">
            <div className="tripsHead">
                <div><h2>Discover trips</h2><p>Explore all available trips in Sharm Elshiekh</p></div>
                <div className="button"><FontAwesomeIcon icon={faLocationDot}/><p>All</p><FontAwesomeIcon icon={faChevronDown}/></div>
                <div><FontAwesomeIcon icon={faArrowLeft}/><FontAwesomeIcon icon={faArrowRight}/></div>
            </div>
            <div className="tripsBody">
                {
                    trips.map(trip=>{
                        return(
                            <div className="card" key={trip.id}>
                                <img src={trip.img} alt={trip.name}/>
                                <FontAwesomeIcon icon={faVanShuttle}/>
                                <FontAwesomeIcon icon={faHeart}/>
                                <div>
                                        <h3>{trip.name}</h3>
                                        <h3>{trip.price}</h3>
                                </div>
                </div>
                        );
                    })
                }
            </div>
            <div className="tripsFoot">
                <button className="button">View All</button>
            </div>
        </div>
        );
}