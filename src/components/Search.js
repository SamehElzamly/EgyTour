import '../home.css'
import { TripsCards } from "./TripsCards";
import {useState} from 'react';
import { useSelector } from "react-redux";
import { HeadGlobal } from './HeadGlobal';



export function Search(){
    const [filtered,setFiltered]=useState([])
    const trips=useSelector(state=>state.tripsSlice)

    setTimeout(()=>{
            setFiltered(trips)
            const links=document.querySelectorAll('#header ul li a')
            links.forEach(e=>{
                e.classList.remove('activePage')
            })
            links[1].classList.add('activePage')
    },0)


    return(
        <div className="searchPage">
        <HeadGlobal/>
        <form id="searchForm" >
            <input type='search' id="search" placeholder="search" onChange={e=>{
                let filterd=trips.filter((ele)=>{
                    let nativeValue=e.target.value.toLowerCase();
                    let value=nativeValue.charAt(0).toUpperCase()+nativeValue.slice(1);
                    return ele.name.search(value)>-1;
                })
                setFiltered(filterd)
            }}/>
        </form>
        <TripsCards cards={filtered}/>
        </div>
    );
}