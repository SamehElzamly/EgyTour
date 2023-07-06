import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVanShuttle,faPlane,faShip} from "@fortawesome/free-solid-svg-icons";
import {faHeart} from '@fortawesome/free-regular-svg-icons'
import { useDispatch, useSelector } from "react-redux";
// import { addFavTrip } from "../store/tripsSlice";
import { useEffect } from "react";

export function TripsCards(props){


    const dispatch=useDispatch();
    const user=useSelector(state=>state.reducer.logInSLice)
    const trips=useSelector(state=>state.reducer.tripsSlice)
        const travelWay=(type)=>{
        if(type==="plane")
        return <FontAwesomeIcon icon={faPlane}/>
        else if(type==="car")
        return <FontAwesomeIcon icon={faVanShuttle}/>
        else 
        return <FontAwesomeIcon icon={faShip}/>
    }

    setTimeout(()=>{
        trips.forEach(trip => {
        const icon=document.querySelector(`.card:nth-child(${trip.id}) svg:nth-child(3)`)
        if (trip.fav){
            icon.classList.add('favTrip')
        }
        else{
            icon.classList.remove('favTrip') 
        }
        });
    },100)

    return(
        <div className="cards">
            {
            props.cards.map(trip=>{
                return(
                    <div className="card" key={trip.id}>
                        
                        <img src={trip.img} alt={trip.name}/>
                        {travelWay(trip.type)}
                        <FontAwesomeIcon icon={faHeart} onClick={(e)=>{
                                // dispatch(addFavTrip(trip.id-1))
                        }}/>
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
                            <button className="button">Book</button >
                        </form>
                    </div>
                        );
                    }
                )
            }
        </div>
    );
}