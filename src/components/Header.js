import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot ,faCalendarDays,faUsers,faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import { HeadGlobal } from './HeadGlobal';
import { useSelector } from 'react-redux';
export function Header(){
    const [i,setIValue]=useState(1)
    const [v,setvValue]=useState(1)
    const trips=useSelector(state=>state.reducer.tripsSlice)

    function travelersNum(){
        if(i%2===0)
            {
                return(
                <input type='number'/>
            );
        }
        else{
            return
        }
    }
    function tripInfo(){
        if(v%2===0)
            {
                return(
                <select id='selectTrip' >
                    {
                        trips.map((trip)=>{
                            return(
                                <option value={trip.name} key={trip.id}>
                                    {trip.name} {trip.price}$
                                </option>
                                )
                        })
                    }
                </select>
            );
            
        }
        else{
            return
        }
    }
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
        <HeadGlobal/>
        <div className="headerInfo">
            <h1>Discover <span>self-guided </span>itineraries</h1>
            <p>More than 20 trip in sharm are ready for you.</p>
        </div>
        <div className="navbar">
            <ul>
                <li>
                    <div>
                        <FontAwesomeIcon icon={faLocationDot} />
                        <p>Trip</p>
                    </div>
                    <p>Choose a trip</p>
                </li>
                <li>
                    <div>
                    <FontAwesomeIcon icon={faCalendarDays}/>                    
                    <p>Dates</p>
                    </div>
                    <p>Choose a date</p>
                </li>
                <li>
                    <div>
                        <FontAwesomeIcon icon={faUsers} />
                        <p>Travelers</p>
                    </div>
                    <p>Number of tickets</p>
                </li>
                <li>
                    <Link to={'/discover'}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </Link>
                </li>
            </ul>
        </div>
        </>
    );
}