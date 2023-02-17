import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVanShuttle} from "@fortawesome/free-solid-svg-icons";
import {faHeart} from '@fortawesome/free-regular-svg-icons'
export function TripsCards(props){
    return(
        <div className="cards">
            {
            props.cards.map(trip=>{
                return(
                    <div className="card" key={trip.id}>
                        
                        <img src={trip.img} alt={trip.name}/>
                        <FontAwesomeIcon icon={faVanShuttle}/>
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
                            <button>Book</button>
                        </form>
                    </div>
                        );
                    }
                )
            }
        </div>
    );
}