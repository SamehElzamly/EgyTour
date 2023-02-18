import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVanShuttle,faPlane,faShip} from "@fortawesome/free-solid-svg-icons";
import {faHeart} from '@fortawesome/free-regular-svg-icons'
export function TripsCards(props){

        const travelWay=(type)=>{
        if(type==="plane")
        return <FontAwesomeIcon icon={faPlane}/>
        else if(type==="car")
        return <FontAwesomeIcon icon={faVanShuttle}/>
        else 
        return <FontAwesomeIcon icon={faShip}/>
    }

    return(
        <div className="cards">
            {
            props.cards.map(trip=>{
                return(
                    <div className="card" key={trip.id}>
                        
                        <img src={trip.img} alt={trip.name}/>
                        {travelWay(trip.type)}
                        <FontAwesomeIcon icon={faHeart}/>
                        <p>{trip.details}</p>
                        <div>
                            <h3>{trip.name}</h3>
                            <p>{trip.price}$</p>
                        </div>
                        <form>
                            <div>
                                <label>number of tickets</label>
                                <input type='number' name='ticketsNumber' id="ticketsNumber" placeholder="number"/>
                            </div>
                            <button className="button">Book</button>
                        </form>
                    </div>
                        );
                    }
                )
            }
        </div>
    );
}