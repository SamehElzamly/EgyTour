import { HeadGlobal } from "./HeadGlobal";
import '../home.css'
import { TripsCards } from "./TripsCards";
import {useState,useEffect} from 'react'
let api='http://localhost:3001/trips'
export function Search(){

    const [filtered,steFiltered]=useState([])
    const [trips,setTrips]=useState([])
    useEffect(()=>{
        fetch(api)
        .then(res=> {return res.json()})
        .then(res=>setTrips(res))
        .catch(err=>console.log(err))
    },[])

    return(
        <div className="searchPage">
        <HeadGlobal/>
        <form id="searchForm">
            <input type='search' id="search"  onChange={e=>{
                let filterd=trips.filter((ele)=>{
                    let nativeValue=e.target.value.toLowerCase();
                    let value=nativeValue.charAt(0).toUpperCase()+nativeValue.slice(1);
                    return ele.name.search(value)>-1;
                })
                steFiltered(filterd)
            }}/>
            <button>Submit</button>
        </form>
        <TripsCards cards={filtered}/>
        </div>
    );
}