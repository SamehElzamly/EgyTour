import '../home.css'
import { TripsCards } from "./TripsCards";
import {useState} from 'react';
import { useSelector } from "react-redux";
import { HeadGlobal } from './HeadGlobal';

export function Search(){
    const [filtered,steFiltered]=useState([])
    const trips=useSelector(state=>state.tripsSlice)

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
                steFiltered(filterd)
            }}/>
        </form>
        <TripsCards cards={filtered}/>
        </div>
    );
}