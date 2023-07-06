import { Link, useParams } from "react-router-dom"

import {useDispatch, useSelector} from 'react-redux'
import { useEffect } from "react";
import { fetchUserData } from "../store/users";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
export const ProfileNav =()=>{
    const params = useParams();
    const dispatch=useDispatch()
    const data = useSelector(state=>state.reducer.fetchUserData)
    useEffect(()=>{
        dispatch(fetchUserData(params.userId))
        let current=window.location.href.split('/');
        let bar=document.querySelectorAll('nav ul li a');
        console.log(bar,current);
    },[])
    function userImage(){
        if (data[0].img)
        return <div className="profilePhoto"><img src={data[0].img} alt='profile'/></div>
        else
        return <div className="profilePhoto"><FontAwesomeIcon icon={faUser} /></div>
    }
    return(
        <nav>
            <div>
                {userImage()}
                <h1>{data[0].firstName}</h1>
            </div>
            <ul>
                <li>
                <Link to ={`/${params.userId}/myTrips`} >My trips</Link>
                </li>
                <li>
                <Link to ={`/${params.userId}/paymentHistory`}>Payment history</Link>
                </li>
                <li>
                <Link to ={`/${params.userId}/favTrips`}>My fav Trips</Link>
                </li>
            </ul>
        </nav>
    )
}