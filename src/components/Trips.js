import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faLocationDot,faChevronDown,faArrowRight,faArrowLeft,faVanShuttle,faPlane,faShip} from '@fortawesome/free-solid-svg-icons';
import {faHeart} from '@fortawesome/free-regular-svg-icons'
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { fetchSpeTrips } from "../store/tripsSlice";


export function Trips(){

    const trips=useSelector(state=>state.reducer.getTrips)
    const dispatch=useDispatch()
    const travelWay=(type)=>{
        if(type==="plane")
        return <FontAwesomeIcon icon={faPlane}/>
        else if(type==="car")
        return <FontAwesomeIcon icon={faVanShuttle}/>
        else 
        return <FontAwesomeIcon icon={faShip}/>
    }

    //function to change value of tha p that hold location
    const location=(ele)=>{
        document.getElementById('tripsLoc').innerText=ele.target.getAttribute('data-value')
    }

    let i=0
    return(
        <div id="Trips">
            <div className="tripsHead">
                <div>
                    <h2>Discover trips</h2>
                    <p>Explore all available trips in Sharm Elshiekh</p>
                </div>
                <div className="button" onClick={()=>{
                    document.querySelector('#Trips .tripsHead ul').classList.toggle('displayFlex')
                }} onMouseLeave={()=>{
                    document.querySelector('#Trips .tripsHead ul').classList.remove('displayFlex')
                }}>
                    <FontAwesomeIcon icon={faLocationDot}/>
                    <p data-value='All' id="tripsLoc">All</p>
                    <FontAwesomeIcon icon={faChevronDown}/>
                    <ul>
                        <li onClick={(e)=>{
                            dispatch(fetchSpeTrips(' '))
                            location(e)
                        }}><p data-value='All'>All</p></li>
                        <li onClick={(e)=>{
                            dispatch(fetchSpeTrips('luxor'))
                            location(e)
                        }}><p data-value='Luxor'>Luxor</p></li>
                        <li onClick={(e)=>{
                            dispatch(fetchSpeTrips('cairo'))
                            location(e)
                        }}><p data-value='Cairo'>Cairo</p></li>
                        <li onClick={(e)=>{
                            dispatch(fetchSpeTrips('sinai'))
                            location(e)
                        }}><p data-value='Sinai'>Sinai</p></li>
                        <li onClick={(e)=>{
                            dispatch(fetchSpeTrips('jurdon'))
                            location(e)
                        }}><p data-value='Outside Egypt'>Outside Egypt</p></li>
                    </ul>
                </div>
                <div>
                    <FontAwesomeIcon icon={faArrowLeft} onClick={(e)=>{
                        const cards=document.querySelectorAll('#Trips .tripsBody .card')
                        if(i===cards.length-1)
                        {
                            e.preventDefault();
                            return
                        }
                        else if(i===cards.length-2){
                            document.querySelector('#Trips .tripsHead div:last-child svg:first-child').classList.add('disable');
                            i=i+1;
                        }
                        else{
                            i=i+1
                        }
                        document.querySelector('#Trips .tripsHead div:last-child svg:last-child').classList.remove('disable')
                        cards[i-1].classList.add('displayNone')
                    }}/>
                    <FontAwesomeIcon icon={faArrowRight} className='disable' onClick={(e)=>{
                        const cards=document.querySelectorAll('#Trips .tripsBody .card')
                        if(i===0)
                        {
                            e.preventDefault();
                            return
                        }
                        else if(i===1){
                            document.querySelector('#Trips .tripsHead div:last-child svg:last-child').classList.add('disable')
                        i=i-1;
                        }
                        else{
                            i=i-1
                        }
                        document.querySelector('#Trips .tripsHead div:last-child svg:first-child').classList.remove('disable')
                        cards[i].classList.remove('displayNone')
                    }}/>
                </div>
            </div>
            <div className="tripsBody">
                {
                    trips.map(trip=>{
                        return(
                            <div className="card" key={trip.id}>
                                <img src={trip.img} alt={trip.name}/>
                                {travelWay(trip.type)}
                                <FontAwesomeIcon icon={faHeart}/>
                                <div>
                                        <h3>{trip.name}</h3>
                                        <h3>{trip.price}$</h3>
                                </div>
                </div>
                        );
                    })
                }
            </div>
            <div className="tripsFoot">
                <Link to='/discover' className="button">View All</Link>
            </div>
        </div>
        );
}